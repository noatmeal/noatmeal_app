import { Header } from "@/components/header";
import { getYamlContent, getSlugsFromDirectory } from "@/lib/yaml-loader";
import path from "path";
import { notFound } from "next/navigation";
import React from "react"; // Add React import for dynamic loading
import { toPascalCase } from "@/lib/utils"; // Assuming a utility function exists

const BLOG_CONTENT_DIR = "src/content/blog";
const BLOG_COMPONENTS_DIR = "src/components/blog-posts";

// Remove the specific interface, we'll handle arbitrary content
// interface BlogPostContent {
//   title: string;
//   date: string;
//   content: string;
// }

interface BlogPageProps {
  params: Promise<{
    // params is not a Promise here, Next.js resolves it
    slug: string;
  }>;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const slugs = await getSlugsFromDirectory(BLOG_CONTENT_DIR);
  return slugs.map((slug) => ({ slug }));
}

// Return raw content and filename
async function getPostContent(
  slug: string,
): Promise<{ content: Record<string, unknown>; filename: string } | null> {
  const filename = `${slug}.yaml`;
  const filePath = path.join(BLOG_CONTENT_DIR, filename);
  try {
    // Load content without specific typing
    const content = await getYamlContent(filePath);
    return { content, filename: filePath };
  } catch (error) {
    // Log error but don't expose details potentially
    console.error(`Error loading content for slug "${slug}"`);
    // Optionally check error type, e.g., file not found vs parse error
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      console.error(`File not found: ${filePath}`);
    } else {
      console.error(`Failed to load or parse ${filePath}:`, error);
    }
  }
  return null;
}

// Helper function to dynamically load the component based on slug
async function loadBlogPostComponent(
  slug: string,
): Promise<React.ComponentType<{ content: Record<string, unknown> }> | null> {
  const componentName = toPascalCase(slug); // e.g., placeholder-post -> PlaceholderPost
  const componentPath = `${BLOG_COMPONENTS_DIR}/${slug}`; // Path relative to root for dynamic import

  try {
    // Dynamic import expects path relative to project root or using aliases
    // Adjust the path based on your project structure and aliases if needed.
    // Here, assuming dynamic import works with path from root.
    // NOTE: Dynamic imports need the path string literal directly, not a variable usually.
    // Let's try constructing it carefully. If this fails, we might need a map or switch.
    // A common pattern is `import(\`@/components/blog-posts/\${slug}\`)`
    const componentModule = await import(`@/components/blog-posts/${slug}`);

    // Check if the expected component exists in the module (using the PascalCase name)
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
    // Check if the error is specifically module not found
    if (
      error instanceof Error &&
      "code" in error &&
      error.code === "MODULE_NOT_FOUND"
    ) {
      console.error(
        `Ensure component file exists at src/components/blog-posts/${slug}.tsx and exports ${componentName}`,
      );
    }
    return null;
  }
}

export default async function BlogPostPage(props: BlogPageProps) {
  const params = await props.params;
  // Destructure params directly
  const { slug } = params;
  const postData = await getPostContent(slug);

  if (!postData) {
    notFound(); // Trigger 404 if content loading failed
  }

  const { content, filename } = postData;

  // Load the specific component for this slug
  const PostComponent = await loadBlogPostComponent(slug);

  if (!PostComponent) {
    // Handle case where component loading fails - maybe show a generic error page or 404
    console.error(`No matching component found for slug: ${slug}`);
    // Depending on requirements, you might want a different behavior than 404
    // For now, let's treat it as not found.
    notFound();
  }

  return (
    <>
      <Header pageContentFilename={filename} />
      <PostComponent content={content} />
    </>
  );
}
