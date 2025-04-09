import { ModeToggle } from "./light-dark-toggle";
import { getYamlContent } from "@/lib/yaml-loader";

interface LinkItem {
  text: string;
  href?: string; 
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
    source: LinkItem; 
  };
  pageLinks: {
    navAreaName: string;
    source: LinkItem; 
  };
}

interface HeaderProps {
  pageContentFilename: string; 
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
        <h2>{content.siteLinks.navAreaName}</h2>
        <nav className="flex flex-wrap items-center gap-4 mb-4">
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

        <h2>{content.pageLinks.navAreaName}</h2>
        <nav className="flex flex-wrap items-center gap-4">
          <a href={pageSourceUrl} target="_blank" rel="noopener noreferrer">
            {content.pageLinks.source.text}
          </a>
        </nav>
      </div>
    </>
  );
}
