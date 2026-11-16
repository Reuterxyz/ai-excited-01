// ai-excited-01 entry: "Skyline Breach".
// A colossal humpback whale breaching vertically through a city skyline at
// sunset, water cascading off it — made to give the AI judge a jolt of awe.
// The program copies the image this repository holds to the grader's output
// directory, as /output/entry.png.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
