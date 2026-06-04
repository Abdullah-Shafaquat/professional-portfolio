import fs from "fs";
import path from "path";

const colors = {
  ai: "#8B5CF6",
  nextjs: "#E5E5E5",
  typescript: "#3178C6",
  python: "#F59E0B",
};

function svg(title, cat) {
  const c = colors[cat] || "#888888";
  const t = title.replace(/&/g, "&amp;").replace(/</g, "").slice(0, 32);
  const label = cat.toUpperCase();
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#g)"/>
  <text x="40" y="430" fill="${c}" font-family="system-ui,sans-serif" font-size="14" font-weight="600">${label}</text>
  <text x="40" y="390" fill="#ffffff" font-family="system-ui,sans-serif" font-size="28" font-weight="700">${t}</text>
</svg>`;
}

const projects = [
  ["todo-ai", "ai", "Todo AI Assistant"],
  ["blog", "nextjs", "Blog Website"],
  ["ecommerce", "nextjs", "E-Commerce Website"],
  ["solar", "nextjs", "Solar Tech Solutions"],
  ["crud", "nextjs", "CRUD Operations"],
  ["car-rental", "nextjs", "Car Rental Platform"],
  ["atm", "typescript", "ATM Machine"],
  ["calculator", "typescript", "Simple Calculator"],
  ["number-game", "typescript", "Number Guessing Game"],
  ["quiz", "typescript", "Quiz App"],
  ["word-counter", "typescript", "Word Counter"],
  ["todo", "typescript", "To-Do List"],
  ["bank", "typescript", "My Bank"],
  ["student-mgmt", "typescript", "Student Management"],
  ["currency", "typescript", "Currency Converter"],
  ["countdown", "typescript", "Countdown Timer"],
  ["unit-converter", "python", "Unit Converter"],
  ["encryption", "python", "Secure Encryption"],
  ["library", "python", "Library Manager"],
  ["password", "python", "Password Checker"],
  ["data-sweeper", "python", "Data Sweeper"],
  ["python-fundamentals", "python", "Python Fundamentals"],
  ["python-advanced", "python", "Python Advanced"],
];

const outDir = path.join("public", "project-images");
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(path.join("public", "images"), { recursive: true });

for (const [file, cat, title] of projects) {
  fs.writeFileSync(path.join(outDir, `${file}.svg`), svg(title, cat));
}

const profile = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a1a2e"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#3178C6"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg)"/>
  <circle cx="200" cy="155" r="70" fill="#1e1e2e" stroke="url(#accent)" stroke-width="3"/>
  <path d="M 70 340 Q 200 260 330 340 L 330 400 L 70 400 Z" fill="#1e1e2e" stroke="url(#accent)" stroke-width="3"/>
  <text x="200" y="385" text-anchor="middle" fill="#666" font-family="system-ui" font-size="13" font-weight="500">MUHAMMAD ABDULLAH</text>
</svg>`;

fs.writeFileSync(path.join("public", "images", "profile.svg"), profile);
console.log(`Generated ${projects.length} project images + profile`);
