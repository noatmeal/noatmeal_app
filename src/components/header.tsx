import { ModeToggle } from "./light-dark-toggle";
import { getYamlContent } from "@/lib/yaml-loader";

// TODO: Replace with your actual repo URL
const GITHUB_REPO_URL = "https://github.com/username/repo/blob/main/";
const HEADER_CONTENT_FILENAME = "src/content/header.yaml";

interface HeaderProps {
  pageContentFilename: string;
}

export async function Header({ pageContentFilename }: HeaderProps) {
  const content = await getYamlContent(HEADER_CONTENT_FILENAME);
  return (
    <>
      <h1>{content.title}</h1>
      <div className="mb-8">
        <h3>{content.siteLinks.navAreaName}</h3>
        <nav className="flex items-center gap-4 mb-4">
          <a href="#">{content.siteLinks.home}</a>
          <a href="#">{content.siteLinks.blog}</a>
          <a href="#">{content.siteLinks.projects}</a>
          <a href="#">{content.siteLinks.about}</a>
          <a href="#">{content.siteLinks.archive}</a>
          <a href={GITHUB_REPO_URL + HEADER_CONTENT_FILENAME} target="_blank" rel="noopener noreferrer">
            {content.siteLinks.editOnGithub}
          </a>
          <ModeToggle />
        </nav>

        <h3>{content.pageLinks.navAreaName}</h3>
        <nav className="flex items-center gap-4">
          <a href="#">{content.pageLinks.top}</a>
          <a href="#">{content.pageLinks.comments}</a>
          <a href="#">{content.pageLinks.share}</a>
          <a href="#">{content.pageLinks.print}</a>
          <a href={GITHUB_REPO_URL + pageContentFilename} target="_blank" rel="noopener noreferrer">
            {content.pageLinks.editOnGithub}
          </a>
        </nav>
      </div>
    </>
  );
}
