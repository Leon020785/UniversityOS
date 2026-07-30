const fs = require('fs');
const path = require('path');

const logsDir = __dirname;
const imagesDir = path.join(logsDir, 'billeder');
const templatePath = path.join(logsDir, 'daily-log-template.md');

if (!fs.existsSync(templatePath)) {
  console.error('Template file not found:', templatePath);
  process.exit(1);
}

fs.mkdirSync(imagesDir, { recursive: true });

const template = fs.readFileSync(templatePath, 'utf8');
const now = new Date();
const dateStr = now.toISOString().slice(0, 10);

const files = fs.readdirSync(logsDir)
  .filter((name) => /^\d{4}-\d{2}-\d{2}-dag-\d+\.md$/i.test(name))
  .sort();

let dayNumber = 1;
if (files.length > 0) {
  const lastFile = files[files.length - 1];
  const match = lastFile.match(/dag-(\d+)\.md$/i);
  if (match) {
    dayNumber = parseInt(match[1], 10) + 1;
  }
}

const fileName = `${dateStr}-dag-${dayNumber}.md`;
const filePath = path.join(logsDir, fileName);

if (fs.existsSync(filePath)) {
  console.log(`Log file already exists: ${fileName}`);
  process.exit(0);
}

const content = template
  .replace(/\{\{DAY\}\}/g, String(dayNumber))
  .replace(/\{\{DATE\}\}/g, dateStr);

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Created ${fileName}`);
console.log(`Images folder: ${imagesDir}`);
