import { Header } from "@/components/header";
import { getYamlContent, getSlugsFromDirectory } from "@/lib/yaml-loader";
import path from "path";
import { notFound } from "next/navigation";

const BLOG_CONTENT_DIR = "src/content/blog";

interface BlogPostContent {
  title: string;
  date: string;
  content: string;
}

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const slugs = await getSlugsFromDirectory(BLOG_CONTENT_DIR);
  return slugs.map((slug) => ({ slug }));
}

async function getPostContent(
  slug: string,
): Promise<{ content: BlogPostContent; filename: string } | null> {
  const filename = `${slug}.yaml`;
  const filePath = path.join(BLOG_CONTENT_DIR, filename);
  try {
    const content = (await getYamlContent(filePath)) as BlogPostContent;
    return { content, filename: filePath };
  } catch (error) {
    console.error(`Error loading content for slug "${slug}":`, error);
  }
  return null;
}

export default async function BlogPostPage(props: BlogPageProps) {
  const params = await props.params;
  const { slug } = params;
  const postData = await getPostContent(slug);

  if (!postData) {
    notFound();
  }

  const { content, filename } = postData;

  return (
    <>
      <Header pageContentFilename={filename} />
      <article>
        <h1>{content.title}</h1>
        <p>
          <em>Published on: {content.date}</em>
        </p>
        <div style={{ whiteSpace: "pre-wrap" }}>{content.content}</div>
      </article>
    </>
  );
}
