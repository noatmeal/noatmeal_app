import { ModeToggle } from "./light-dark-toggle";
import { getYamlContent } from '@/lib/yaml-loader'

export async function Header() {
  const content = await getYamlContent("src/content/header.yaml"); 
  return (
    <>
      <h1>{content.title}</h1>
      <div className="mb-8">
        <h3>Site</h3>
        <nav className="flex items-center gap-4 mb-4">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Archive</a>
          <ModeToggle />
        </nav>

        <h3>Page</h3>
        <nav className="flex items-center gap-4">
          <a href="#">Top</a>
          <a href="#">Comments</a>
          <a href="#">Share</a>
          <a href="#">Print</a>
        </nav>
      </div>
    </>
  );
}
