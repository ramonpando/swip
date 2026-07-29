import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { spawnSync } from "node:child_process";
import { tmpdir } from "node:os";

const root = new URL("../", import.meta.url);
const contentDir = new URL("src/content/blog/", root);
const outputDir = new URL("public/assets/blog/", root);
const tempDir = join(tmpdir(), "swip-blog-og");

mkdirSync(outputDir, { recursive: true });
mkdirSync(tempDir, { recursive: true });

const escapeXml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const frontmatterValue = (source, key) => {
  const match = source.match(new RegExp(`^${key}:\\s*[\"']?(.+?)[\"']?\\s*$`, "m"));
  return match?.[1]?.replace(/^["']|["']$/g, "") ?? "";
};

const wrapTitle = (title, maxLength = 31, maxLines = 3) => {
  const words = title.split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxLength || current === "") {
      current = candidate;
    } else {
      lines.push(current);
      current = word;
    }
  }

  if (current) lines.push(current);
  if (lines.length > maxLines) {
    lines[maxLines - 1] = `${lines.slice(maxLines - 1).join(" ").slice(0, maxLength - 1).trim()}…`;
  }
  return lines.slice(0, maxLines);
};

const files = readdirSync(contentDir).filter((name) => /\.(md|mdx)$/.test(name));

for (const filename of files) {
  const source = readFileSync(new URL(filename, contentDir), "utf8");
  const title = frontmatterValue(source, "title");
  const category = frontmatterValue(source, "category") || "Guía SWIP";
  const slug = frontmatterValue(source, "slug") || basename(filename).replace(/\.(md|mdx)$/, "");
  const lines = wrapTitle(title);
  const titleSvg = lines
    .map((line, index) => `<tspan x="76" dy="${index === 0 ? 0 : 67}">${escapeXml(line)}</tspan>`)
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#071711"/>
      <stop offset="1" stop-color="#0e2b20"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="20%" r="62%">
      <stop offset="0" stop-color="#39ff88" stop-opacity=".26"/>
      <stop offset="1" stop-color="#39ff88" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <path d="M760 630 1200 190M900 630l300-300M1040 630l160-160" stroke="#39ff88" stroke-opacity=".12" stroke-width="2"/>
  <rect x="76" y="64" width="1048" height="502" rx="22" fill="none" stroke="#a8ffca" stroke-opacity=".18"/>
  <text x="76" y="130" fill="#39ff88" font-family="DejaVu Sans,Arial,sans-serif" font-size="30" font-weight="700" letter-spacing="7">SWIP</text>
  <text x="76" y="190" fill="#a8bdb1" font-family="DejaVu Sans,Arial,sans-serif" font-size="22" font-weight="600">${escapeXml(category.toUpperCase())}</text>
  <text x="76" y="285" fill="#f4fff8" font-family="DejaVu Sans,Arial,sans-serif" font-size="53" font-weight="700">${titleSvg}</text>
  <text x="76" y="535" fill="#a8bdb1" font-family="DejaVu Sans,Arial,sans-serif" font-size="22">Guías sobre liquidez con activos de alto valor · swip.mx</text>
</svg>`;

  const svgPath = join(tempDir, `${slug}.svg`);
  const outputPath = new URL(`${slug}.jpg`, outputDir);
  writeFileSync(svgPath, svg);

  const result = spawnSync(
    "convert",
    [svgPath, "-strip", "-interlace", "Plane", "-quality", "84", outputPath.pathname],
    { encoding: "utf8" },
  );

  if (result.status !== 0) {
    throw new Error(`No se pudo generar ${slug}.jpg: ${result.stderr}`);
  }
}

rmSync(tempDir, { recursive: true, force: true });
console.log(`Generated ${files.length} blog OG images in public/assets/blog/`);
