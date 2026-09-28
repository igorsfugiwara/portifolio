// Depois do `vite build`: escreve o HTML de cada página dentro do seu
// <div id="root"> em dist/. Ver src/entry-server.tsx.
//
// A home em português (/pt/) não existe no Vite: nasce aqui, do mesmo
// index.html, com o <head> em português e o canonical próprio. Os links
// hreflang das duas já vêm do index.html.
import { readFileSync, writeFileSync, rmSync, mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const SITE = 'https://igorfugiwara.netlify.app';
const ssr = await import(pathToFileURL('dist-ssr/entry-server.js').href);

const homeTemplate = readFileSync('dist/index.html', 'utf8');

function replaceOrFail(html, from, to, file) {
  if (!html.includes(from)) throw new Error(`${file}: não achei ${from.slice(0, 60)}`);
  return html.replace(from, to);
}

function portugueseHead(html) {
  const file = 'pt/index.html';
  const title = 'Igor Fugiwara — Engenheiro de Software e IA · São Paulo';
  const description =
    'Igor Fugiwara (Igor Simões Fugiwara) — engenheiro de software na UOL, em São Paulo. Produtos web com IA: chatbots com RAG, integração de LLMs e apps em tempo real. Portfólio, estudos de caso e contato.';
  const og =
    'Engenheiro de software na UOL com 4+ anos de experiência, especializado em integrar LLMs, sistemas RAG e bancos em tempo real em aplicações web de produção.';
  html = html.replace('<html lang="en">', '<html lang="pt-BR">');
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = html.replace(/(<meta name="description" content=")[^"]*"/, `$1${description}"`);
  html = replaceOrFail(html, `<link rel="canonical" href="${SITE}/" />`, `<link rel="canonical" href="${SITE}/pt/" />`, file);
  html = replaceOrFail(html, `<meta property="og:url" content="${SITE}/" />`, `<meta property="og:url" content="${SITE}/pt/" />`, file);
  html = replaceOrFail(html, '<meta property="og:locale" content="en_US" />', '<meta property="og:locale" content="pt_BR" />', file);
  html = replaceOrFail(html, '<meta property="og:locale:alternate" content="pt_BR" />', '<meta property="og:locale:alternate" content="en_US" />', file);
  html = html.replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`);
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${title}"`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*"/, `$1${og}"`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${og}"`);
  html = html.replace('"url":"' + SITE + '/"', '"url":"' + SITE + '/pt/"');
  return html;
}

for (const [file, render] of Object.entries(ssr.pages)) {
  const path = `dist/${file}`;
  let html = file === 'pt/index.html' ? portugueseHead(homeTemplate) : readFileSync(path, 'utf8');
  if (!html.includes('<div id="root"></div>')) throw new Error(`${file}: <div id="root"></div> não encontrado`);
  const body = render();
  if (body.length < 500) throw new Error(`${file}: renderizou só ${body.length} caracteres`);
  mkdirSync(path.replace(/\/[^/]+$/, ''), { recursive: true });
  writeFileSync(path, html.replace('<div id="root"></div>', `<div id="root">${body}</div>`));
  console.log(`prerender ${file}: ${(body.length / 1024).toFixed(1)} kB de HTML`);
}

rmSync('dist-ssr', { recursive: true, force: true });
