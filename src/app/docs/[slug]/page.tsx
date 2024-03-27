import { promises as fsPromises } from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

export default async function DocsPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), "src", "docs", `${slug}.md`);

  const fileContents = await fsPromises.readFile(filePath, "utf8");
  const { data, content }: { data: any; content: string } =
    matter(fileContents);
  const title: string = data.title;
  return (
    <main className="w-full">
      <div className="p-12 max-w-7xl grid gap-6 w-full">
        <h1 className="text-4xl font-bold">{title}</h1>
        <MDXRemote
          source={content}
          components={{
            a: props => <a target="_blank" {...props} />,
            img: p => {
              const { src, ...rest } = p;
              return (
                // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                <img
                  src={
                    src?.startsWith("http")
                      ? src
                      : "./posts/" + path + src?.replace(/^.\//g, "/")
                  }
                  {...rest}
                />
              );
            },
            h1: ({ children }) => <h1 className="pl-0">{children}</h1>,
            h2: ({ children }) => <h2 className="pl-1 text-3xl">{children}</h2>,
            h3: ({ children }) => <h3 className="pl-2 text-2xl">{children}</h3>,
            h4: ({ children }) => <h4 className="pl-3 text-xl">{children}</h4>,
            h5: ({ children }) => <h5 className="pl-4">{children}</h5>,
            h6: ({ children }) => <h6 className="pl-5">{children}</h6>,
            p: ({ children }) => <p className="pl-6">{children}</p>,
            ul: ({ children }) => <ul className="ml-4">{children}</ul>,
            li: ({ children }) => (
              <li className="list-inside list-disc">{children}</li>
            ),
            table: ({ children }) => (
              <Table className="ml-4 whitespace-nowrap">{children}</Table>
            ),
            thead: ({ children }) => (
              <TableHeader className="">{children}</TableHeader>
            ),
            tr: ({ children }) => <TableRow className="">{children}</TableRow>,
            th: ({ children }) => (
              <TableHead className="">{children}</TableHead>
            ),
            td: ({ children }) => (
              <TableCell className="">{children}</TableCell>
            ),
            checkbox: props => (
              <Checkbox type="checkbox" className="mr-2" {...props} />
            ),
          }}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              // rehypePlugins: [require("rehype-slug")],
            },
          }}
        />
      </div>
    </main>
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
