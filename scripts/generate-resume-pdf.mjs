import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const content = JSON.parse(readFileSync(join(root, "content", "managed-content.json"), "utf8"));

const outputPath = join(root, "public", "resume", "hassan-abdulrahman-resume.pdf");
const site = content.site;
const resume = content.resume;

function sanitize(value) {
  return String(value)
    .replace(/[–—]/g, "-")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "");
}

function escapePdfText(value) {
  return sanitize(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapText(value, maxChars) {
  const words = sanitize(value).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) {
    lines.push(current);
  }

  return lines;
}

const pageWidth = 612;
const pageHeight = 792;
const marginX = 54;
const marginBottom = 58;
let y = 728;
let pages = [[]];

function currentPage() {
  return pages[pages.length - 1];
}

function newPage() {
  pages.push([]);
  y = 728;
}

function ensureSpace(height) {
  if (y - height < marginBottom) {
    newPage();
  }
}

function addLine(text, { size = 10, font = "F1", x = marginX, leading = 15 } = {}) {
  ensureSpace(leading);
  currentPage().push(`BT /${font} ${size} Tf ${x} ${y} Td (${escapePdfText(text)}) Tj ET`);
  y -= leading;
}

function addWrapped(text, options = {}) {
  const { maxChars = 88, size = 10, font = "F1", x = marginX, leading = 15 } = options;
  for (const line of wrapText(text, maxChars)) {
    addLine(line, { size, font, x, leading });
  }
}

function addGap(amount = 10) {
  y -= amount;
}

function addSection(title) {
  addGap(8);
  addLine(title.toUpperCase(), { size: 12, font: "F2", leading: 18 });
}

addLine(site.name, { size: 22, font: "F2", leading: 26 });
addLine(resume.sidebarRole, { size: 12, font: "F1", leading: 18 });
addWrapped(`${site.email} | ${site.phone} | github.com/Hoadeveloper | linkedin.com/in/olanrewaju-hassan-919405259 | t.me/hoadeveloper`, {
  size: 9,
  maxChars: 96,
  leading: 13,
});
addGap(8);

addSection("Profile");
addWrapped(site.description, { maxChars: 86, leading: 14 });

addSection("Core Skills");
addWrapped(
  "Frontend: HTML, CSS, JavaScript, TypeScript, Next.js. Backend: PHP, Python, Flask, FastAPI, MySQL. Automation: Telegram bots, Discord bots, API development, automation workflows. Security: penetration testing and ethical hacking fundamentals.",
  { maxChars: 86, leading: 14 },
);

addSection("Education");
for (const item of resume.education) {
  addLine(`${item.title} | ${item.period}`, { size: 10, font: "F2", leading: 14 });
  addWrapped(item.subtitle, { maxChars: 86, leading: 13 });
  for (const bullet of item.bullets) {
    addWrapped(`- ${bullet}`, { maxChars: 84, x: marginX + 12, leading: 13 });
  }
  addGap(5);
}

addSection("Experience");
for (const item of resume.experience) {
  addLine(`${item.title} | ${item.period}`, { size: 10, font: "F2", leading: 14 });
  addWrapped(`${item.subtitle} - ${item.meta}`, { maxChars: 86, leading: 13 });
  for (const bullet of item.bullets) {
    addWrapped(`- ${bullet}`, { maxChars: 84, x: marginX + 12, leading: 13 });
  }
  addGap(5);
}

const objects = ["", ""];
function addObject(value) {
  objects.push(value);
  return objects.length;
}

const fontRegularId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
const fontBoldId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
const pageIds = [];

for (const commands of pages) {
  const stream = `${commands.join("\n")}\n`;
  const contentId = addObject(`<< /Length ${Buffer.byteLength(stream, "latin1")} >>\nstream\n${stream}endstream`);
  const pageId = addObject(
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRegularId} 0 R /F2 ${fontBoldId} 0 R >> >> /Contents ${contentId} 0 R >>`,
  );
  pageIds.push(pageId);
}

objects[0] = "<< /Type /Catalog /Pages 2 0 R >>";
objects[1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

let pdf = "%PDF-1.4\n";
const offsets = [0];
for (let index = 0; index < objects.length; index += 1) {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${index + 1} 0 obj\n${objects[index]}\nendobj\n`;
}

const xrefOffset = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let index = 1; index < offsets.length; index += 1) {
  pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

writeFileSync(outputPath, Buffer.from(pdf, "latin1"));
console.log(`Generated ${outputPath}`);
