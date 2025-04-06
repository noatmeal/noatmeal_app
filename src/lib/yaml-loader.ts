import fs from "fs/promises";
import path from "path";
import yaml from "yaml";

export async function getYamlContent(filename: string) {
  const filePath = path.join(process.cwd(), filename);
  const fileContents = await fs.readFile(filePath, "utf8");
  return yaml.parse(fileContents);
}

export async function getSlugsFromDirectory(
  directoryPath: string,
): Promise<string[]> {
  const absolutePath = path.join(process.cwd(), directoryPath);
  try {
    const filenames = await fs.readdir(absolutePath);
    const yamlFilenames = filenames.filter((fn) => fn.endsWith(".yaml"));
    return yamlFilenames.map((filename) => path.basename(filename, ".yaml"));
  } catch (error) {
    console.error(
      `Error reading directory for slugs at ${directoryPath}:`,
      error,
    );
    return [];
  }
}

export interface BlogPostMetadata {
  title: string;
  date: string;
  slug: string;
}

export async function getAllPostsMetadata(
  directoryPath: string,
): Promise<BlogPostMetadata[]> {
  console.log(directoryPath);
  const absolutePath = path.join(process.cwd(), directoryPath);
  let filenames: string[];

  try {
    filenames = await fs.readdir(absolutePath);
  } catch (error) {
    console.error(
      `Error reading directory for posts at ${directoryPath}:`,
      error,
    );
    return [];
  }

  const yamlFilenames = filenames.filter((fn) => fn.endsWith(".yaml"));
  const postsMetadata: BlogPostMetadata[] = [];

  for (const filename of yamlFilenames) {
    const slug = path.basename(filename, ".yaml");
    const relativeFilePath = path.join(directoryPath, filename);
    const content = await getYamlContent(relativeFilePath);

    postsMetadata.push({
      title: content.title,
      date: content.date,
      slug,
    });
  }

  return postsMetadata;
}
