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
