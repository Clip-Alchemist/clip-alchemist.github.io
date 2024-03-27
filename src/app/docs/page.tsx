import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
export default async function Docs() {
  // contentディレクトリ内のマークダウンファイル一覧を取得
  const postsDirectory = path.join(process.cwd(), "src", "docs");
  const fileNames = fs.readdirSync(postsDirectory);

  // 各ファイルの中身を取得
  const posts = await Promise.all(
    // 各ファイル情報を取得
    fileNames.map(async fileName => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      // slugとfrontmatter(title, date, description)を取得
      return {
        slug: fileName.replace(".md", ""),
        frontmatter: data,
      };
    })
  );

  return (
    <main className="p-12 max-w-7xl grid gap-12 w-full">
      <h1 className="text-4xl font-bold">Documentation</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug} className="">
            <Link href={`/docs/${post.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
