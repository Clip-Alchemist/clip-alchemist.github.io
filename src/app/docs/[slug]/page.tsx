import { promises as fsPromises } from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

export default async function DocsPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), "src", "docs", `${slug}.md`);

  const fileContents = await fsPromises.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const title = data.title;
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processedContent.toString();

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
    </div>
  );
}
export async function generateStaticParams() {
  const posts = await fsPromises
    .readdir(path.join(process.cwd(), "src", "docs"), {})
    .then(p => p.filter(p => p.endsWith(".md")))
    .then(p => p.map(p => p.replace(/\.md$/, "")));
  return posts.map(post => ({
    slug: post,
  }));
}
