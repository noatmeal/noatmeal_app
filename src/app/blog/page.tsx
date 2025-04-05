import { Header } from "@/components/header";
// Import the new function and the interface
import { getAllPostsMetadata, BlogPostMetadata } from "@/lib/yaml-loader";
import Link from "next/link";
// fs and path are no longer needed here

const PAGE_CONTENT_FILENAME = "src/content/blog.yaml"; // Placeholder, might not exist yet
const BLOG_CONTENT_DIR = "src/content/blog";

// BlogPostMetadata interface is now imported from yaml-loader
// getPostMetadata helper function is removed

export default async function BlogFeed() {
  // Fetch all posts metadata using the new utility function
  const posts: BlogPostMetadata[] = await getAllPostsMetadata(BLOG_CONTENT_DIR);

  // Sort posts by date, newest first
  // Error handling for directory reading is now inside getAllPostsMetadata
  posts.sort((a, b) => b.date.localeCompare(a.date));

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
