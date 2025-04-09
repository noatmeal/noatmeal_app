import { ModeToggle } from "./light-dark-toggle";
import { getYamlContent } from "@/lib/yaml-loader";

// Define the expected structure of the YAML content for type safety
interface LinkItem {
  text: string;
  href?: string; // href might be optional if constructed dynamically
}

interface HeaderContent {
  title: string;
  githubRepoUrl: string;
  headerContentFilename: string;
  siteLinks: {
    navAreaName: string;
    home: LinkItem;
    blog: LinkItem;
    rss: LinkItem;
    source: LinkItem; // href constructed dynamically
  };
  pageLinks: {
    navAreaName: string;
    source: LinkItem; // href constructed dynamically
  };
}

interface HeaderProps {
  pageContentFilename: string; // Filename for the current page's content
}

export async function Header({ pageContentFilename }: HeaderProps) {
  const content = (await getYamlContent(
    "src/content/header.yaml",
  )) as HeaderContent;

  const headerSourceUrl = content.githubRepoUrl + content.headerContentFilename;
  const pageSourceUrl = content.githubRepoUrl + pageContentFilename;

  return (
    <>
      <h1>{content.title}</h1>
      <div className="mb-8">
        <h3>{content.siteLinks.navAreaName}</h3>
        <nav className="flex items-center gap-4 mb-4">
          <a href={content.siteLinks.home.href}>
            {content.siteLinks.home.text}
          </a>
          <a href={content.siteLinks.blog.href}>
            {content.siteLinks.blog.text}
          </a>
          <a href={content.siteLinks.rss.href} target="_blank">
            {content.siteLinks.rss.text}
          </a>
          <a href={headerSourceUrl} target="_blank" rel="noopener noreferrer">
            {content.siteLinks.source.text}
          </a>
          <ModeToggle />
        </nav>

        <h3>{content.pageLinks.navAreaName}</h3>
        <nav className="flex items-center gap-4">
          <a href={pageSourceUrl} target="_blank" rel="noopener noreferrer">
            {content.pageLinks.source.text}
          </a>
        </nav>
      </div>
    </>
  );
}
