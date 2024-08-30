import path from "node:path";
import { readFileSync } from "node:fs";

const __document_dirname = "./src/components/managersPage/docs";

export default function getIntroduction(filename: string): string {
  const resolvedPath = path.resolve(__document_dirname, filename);
  const text = readFileSync(resolvedPath, 'utf-8');
  return text.trim();
}