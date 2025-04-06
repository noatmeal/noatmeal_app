import { Header } from "@/components/header";
import { getYamlContent, getSlugsFromDirectory } from "@/lib/yaml-loader";
import path from "path";
import { notFound } from "next/navigation";
import React from "react";
import { toPascalCase } from "@/lib/utils"; 

const BLOG_CONTENT_DIR = "src/content/blog";
const BLOG_COMPONENTS_DIR = "src/components/blog-posts";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const slugs = await getSlugsFromDirectory(BLOG_CONTENT_DIR);
  return slugs.map((slug) => ({ slug }));
}

async function getPostContent(
  slug: string,
): Promise<{ content: Record<string, unknown>; filename: string } | null> {
  const filename = `${slug}.yaml`;
  const filePath = path.join(BLOG_CONTENT_DIR, filename);
  try {
    const content = await getYamlContent(filePath);
    return { content, filename: filePath };
  } catch (error) {
    console.error(`Error loading content for slug "${slug}"`);
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      console.error(`File not found: ${filePath}`);
    } else {
      console.error(`Failed to load or parse ${filePath}:`, error);
    }
  }
  return null;
}

async function loadBlogPostComponent(
  slug: string,
): Promise<React.ComponentType<{ content: Record<string, unknown> }> | null> {
  const componentName = toPascalCase(slug); 
  const componentPath = `${BLOG_COMPONENTS_DIR}/${slug}`; 

  try {

    const componentModule = await import(`@/components/blog-posts/${slug}`);

    if (componentModule && componentModule[componentName]) {
      return componentModule[componentName];
    } else {
      console.error(
        `Component ${componentName} not found in module ${componentPath}.tsx`,
      );
      return null;
    }
  } catch (error) {
    console.error(
      `Failed to load component for slug "${slug}" at ${componentPath}:`,
      error,
    );
    if (
      error instanceof Error &&
      "code" in error &&
      error.code === "MODULE_NOT_FOUND"
    ) {
      console.error(
        `Ensure component file exists at 
         src/components/blog-posts/${slug}.tsx and exports ${componentName}`,
      );
    }
    return null;
  }
}

export default async function BlogPostPage(props: BlogPageProps) {
  const params = await props.params;
  const { slug } = params;
  const postData = await getPostContent(slug);

  if (!postData) {
    notFound(); 
  }

  const { content, filename } = postData;

  const PostComponent = await loadBlogPostComponent(slug);

  if (!PostComponent) {
    console.error(`No matching component found for slug: ${slug}`);
    notFound();
  }

  return (
    <>
      <Header pageContentFilename={filename} />
      <PostComponent content={content} />
    </>
  );
}
