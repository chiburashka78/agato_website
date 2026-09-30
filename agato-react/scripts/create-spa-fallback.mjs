/**
 * Creates a GitHub Pages SPA fallback.
 *
 * GitHub Pages serves 404.html when a physical file is not found. By copying
 * the Vite entry document to 404.html, direct requests such as /services,
 * /about, and /signup still boot React Router, which then renders the route
 * based on window.location.pathname.
 */
import { copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve } from "node:path";

const distDirectory = resolve("dist");
const indexFile = resolve(distDirectory, "index.html");
const fallbackFile = resolve(distDirectory, "404.html");

await access(indexFile, constants.R_OK);
await copyFile(indexFile, fallbackFile);

console.log("Created dist/404.html SPA fallback for GitHub Pages.");
