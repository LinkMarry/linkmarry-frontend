const fs = require("fs");
const path = require("path");

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f));
        }
    });
}

function refactorFile(filePath) {
    if (!filePath.endsWith(".tsx") && !filePath.endsWith(".jsx")) return;
    let content = fs.readFileSync(filePath, "utf8");
    let original = content;

    // Pattern 1: export default function ComponentName(args) { ... }
    // Note: this assumes simple arguments.
    content = content.replace(
        /^export\s+default\s+function\s+([A-Z][A-Za-z0-9_]*)\s*\(([^)]*)\)\s*\{/gm,
        "const $1 = ($2) => {\n/*REPLACE_DEFAULT_EXPORT_$1*/",
    );

    // Pattern 2: export function ComponentName(args) { ... }
    content = content.replace(
        /^export\s+function\s+([A-Z][A-Za-z0-9_]*)\s*\(([^)]*)\)\s*\{/gm,
        "export const $1 = ($2) => {",
    );

    // Pattern 3: function ComponentName(args) { ... }
    content = content.replace(/^function\s+([A-Z][A-Za-z0-9_]*)\s*\(([^)]*)\)\s*\{/gm, "const $1 = ($2) => {");

    // Add export default to the end of the file if needed
    const defaultExports = [...content.matchAll(/\/\*REPLACE_DEFAULT_EXPORT_([A-Z][A-Za-z0-9_]*)\*\//g)];
    for (const match of defaultExports) {
        content = content.replace(match[0], "");
        content += `\nexport default ${match[1]};\n`;
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`Refactored ${filePath}`);
    }
}

walkDir("./app", refactorFile);
