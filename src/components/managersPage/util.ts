import * as path from "node:path";
import { readFileSync } from "node:fs";

const __document_dirname = "./src/components/managersPage/docs";

export function getIntroduction(filename: string): string {
  const resolvedPath = path.resolve(__document_dirname, filename);
  const text = readFileSync(resolvedPath, 'utf-8');
  return text.trim();
}

export function separateImageFormats<T extends { format: string }>(images: T[]) {
  function filter(formatType: string) {
    return images.filter(img => img.format === formatType)[0];
  }

  return {
    avif: filter("avif"),
    webp: filter("webp"),
    jpeg: filter("jpeg"),
  }
}