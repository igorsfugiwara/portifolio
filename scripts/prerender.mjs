// Depois do `vite build`: escreve o HTML de cada página dentro do seu
// <div id="root"> em dist/. Ver src/entry-server.tsx.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const ssr = await import(pathToFileURL('dist-ssr/entry-server.js').href);

for (const [file, render] of Object.entries(ssr.pages)) {
  const path = `dist/${file}`;
  const html = readFileSync(path, 'utf8');
  if (!html.includes('<div id="root"></div>')) throw new Error(`${file}: <div id="root"></div> não encontrado`);
  const body = render();
  if (body.length < 500) throw new Error(`${file}: renderizou só ${body.length} caracteres`);
  writeFileSync(path, html.replace('<div id="root"></div>', `<div id="root">${body}</div>`));
  console.log(`prerender ${file}: ${(body.length / 1024).toFixed(1)} kB de HTML`);
}

rmSync('dist-ssr', { recursive: true, force: true });
