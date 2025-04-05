import fs from "fs/promises";
import path from "path";
import yaml from "yaml";

export async function getYamlContent(filename: string) {
  const filePath = path.join(process.cwd(), filename);
  const fileContents = await fs.readFile(filePath, "utf8");
  return yaml.parse(fileContents);
}
