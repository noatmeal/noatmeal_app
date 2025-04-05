import { Header } from "@/components/header";
import { getYamlContent } from "@/lib/yaml-loader";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";

const PAGE_CONTENT_FILENAME = "src/content/blog.yaml"; // Placeholder, might not exist yet
const BLOG_CONTENT_DIR = "src/content/blog";

interface BlogPostMetadata {
  title: string;
  date: string; // YYYY-MM-DD
  slug: string;
}

// Helper function to extract metadata and slug from a file path
async function getPostMetadata(
  filename: string,
): Promise<BlogPostMetadata | null> {
  const slug = path.basename(filename, ".yaml");
  const relativeFilePath = path.join(BLOG_CONTENT_DIR, filename); // Use relative path
  try {
    const content = await getYamlContent(relativeFilePath); // Pass relative path
    // Basic validation
    if (
      typeof content.title === "string" &&
      typeof content.date === "string" &&
      /^\d{4}-\d{2}-\d{2}$/.test(content.date) // Validate date format
    ) {
      return {
        title: content.title,
        date: content.date,
        slug: slug,
      };
    }
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
  }
  return null;
}

export default async function BlogFeed() {
  let posts: BlogPostMetadata[] = [];
  try {
    const filenames = await fs.readdir(
      path.join(process.cwd(), BLOG_CONTENT_DIR),
    );
    const yamlFilenames = filenames.filter((fn) => fn.endsWith(".yaml"));

    const metadataPromises = yamlFilenames.map(getPostMetadata);
    const results = await Promise.all(metadataPromises);
    posts = results.filter((meta): meta is BlogPostMetadata => meta !== null); // Filter out nulls

    // Sort posts by date, newest first
    posts.sort((a, b) => b.date.localeCompare(a.date));
  } catch (error) {
    // Handle case where directory might not exist or other FS errors
    console.error("Error reading blog content directory:", error);
    // Optionally render an error message or empty state
  }

  return (
    <>
      <Header pageContentFilename={PAGE_CONTENT_FILENAME} />
      <div>
        <h1>Chronological Feed</h1>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  {post.date} - {post.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
    </>
  );
}
