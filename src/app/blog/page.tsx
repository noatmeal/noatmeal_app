import { Header } from "@/components/header";
import { getAllPostsMetadata, BlogPostMetadata } from "@/lib/yaml-loader";
import Link from "next/link";

const PAGE_CONTENT_FILENAME = "src/content/blog.yaml";
const BLOG_CONTENT_DIR = "src/content/blog";

export default async function BlogFeed() {
  const posts: BlogPostMetadata[] = await getAllPostsMetadata(BLOG_CONTENT_DIR);
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
                <span>{post.date} - </span>
                <div className="inline-block">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </div>
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
