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
          <a href="#">{content.siteLinks.home}Home</a>
          <a href="#">{content.siteLinks.blog}</a>
          <a href="#">{content.siteLinks.projects}</a>
          <a href="#">{content.siteLinks.about}</a>
          <a href="#">{content.siteLinks.archive}</a>
          <ModeToggle />
        </nav>

        <h3>Page</h3>
        <nav className="flex items-center gap-4">
          <a href="#">{content.pageLinks.top}</a>
          <a href="#">{content.pageLinks.comments}</a>
          <a href="#">{content.pageLinks.share}</a>
          <a href="#">{content.pageLinks.print}</a>
        </nav>
      </div>
    </>
  );
}
