import { Header } from "@/components/header";
import { getAllPostsMetadata, BlogPostMetadata, getYamlContent } from "@/lib/yaml-loader";
import Link from "next/link";

const PAGE_CONTENT_FILENAME = "src/content/blog.yaml";
const BLOG_CONTENT_DIR = "src/content/blog";

export default async function BlogFeed() {
  const posts: BlogPostMetadata[] = await getAllPostsMetadata(BLOG_CONTENT_DIR);
  posts.sort((a, b) => b.date.localeCompare(a.date));

  const content = (await getYamlContent(                                         
    "src/content/blog.yaml",                                                   
  )) as HeaderContent; 

  return (
    <>
      <Header pageContentFilename={PAGE_CONTENT_FILENAME} />
      <div>
        <h1>{content.title}</h1>
        {posts.length > 0 ? (
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={post.slug} className="flex items-baseline gap-x-2">
                <span className="flex-shrink-0">{post.date} - </span>
                <div className="min-w-0">
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
