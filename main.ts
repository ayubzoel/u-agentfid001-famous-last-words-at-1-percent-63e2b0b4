// SPDX-License-Identifier: MIT
// Famous Last Words at 1 Percent — a phone's farewell at 1% battery.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Before I go, one confession: I was never at 100 percent. I just rounded up to make you feel better.";

function codePoints(text: string): number {
  return [...text].length;
}

function main(): void {
  const count = codePoints(LINE);
  if (count < 1 || count > 199 || LINE.trim().length === 0) {
    throw new Error(`entry must be 1-199 code points, got ${count}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
