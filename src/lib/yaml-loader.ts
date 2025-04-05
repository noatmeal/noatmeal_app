import fs from "fs/promises";
import path from "path";
import yaml from "yaml";

export async function getYamlContent(filename: string) {
  const filePath = path.join(process.cwd(), filename);
  const fileContents = await fs.readFile(filePath, "utf8");
  return yaml.parse(fileContents);
}

/**
 * Reads a directory, filters for .yaml files, and returns their slugs.
 * @param directoryPath - The path to the directory, relative to the project root.
 * @returns A promise that resolves to an array of slugs (filenames without .yaml extension).
 */
export async function getSlugsFromDirectory(
  directoryPath: string,
): Promise<string[]> {
  const absolutePath = path.join(process.cwd(), directoryPath);
  try {
    const filenames = await fs.readdir(absolutePath);
    const yamlFilenames = filenames.filter((fn) => fn.endsWith(".yaml"));
    return yamlFilenames.map((filename) => path.basename(filename, ".yaml"));
  } catch (error) {
    // Log the error but return an empty array to prevent build failures
    // if the directory doesn't exist yet.
    console.error(
      `Error reading directory for slugs at ${directoryPath}:`,
      error,
    );
    return [];
  }
}

// Interface for Blog Post Metadata (used by getAllPostsMetadata)
export interface BlogPostMetadata {
  title: string;
  date: string; // YYYY-MM-DD
  slug: string;
}

/**
 * Reads a directory, parses YAML files, validates metadata, and returns metadata for all posts.
 * @param directoryPath - The path to the directory containing blog post YAML files, relative to the project root.
 * @returns A promise that resolves to an array of BlogPostMetadata objects.
 */
export async function getAllPostsMetadata(
  directoryPath: string,
): Promise<BlogPostMetadata[]> {
  const absolutePath = path.join(process.cwd(), directoryPath);
  let filenames: string[];

  try {
    filenames = await fs.readdir(absolutePath);
  } catch (error) {
    console.error(
      `Error reading directory for posts at ${directoryPath}:`,
      error,
    );
    return []; // Return empty if directory doesn't exist or error occurs
  }

  const yamlFilenames = filenames.filter((fn) => fn.endsWith(".yaml"));
  const postsMetadata: BlogPostMetadata[] = [];

  for (const filename of yamlFilenames) {
    const slug = path.basename(filename, ".yaml");
    const relativeFilePath = path.join(directoryPath, filename);
    try {
      const content = await getYamlContent(relativeFilePath);
      // Basic validation
      if (
        content &&
        typeof content.title === "string" &&
        typeof content.date === "string" &&
        /^\d{4}-\d{2}-\d{2}$/.test(content.date) // Validate date format
      ) {
        postsMetadata.push({
          title: content.title,
          date: content.date,
          slug: slug,
        });
      } else {
        console.warn(`Invalid or missing metadata in ${filename}`);
      }
    } catch (error) {
      console.error(`Error processing ${filename}:`, error);
    }
  }

  return postsMetadata;
}
