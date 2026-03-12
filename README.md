# me.

Portfolio pessoal de textos autorais feito em Astro, com visual editorial minimalista e tema preto.

## Rodando localmente

```sh
npm install
npm run dev
```

## Estrutura principal

- `src/content/textos`: arquivos Markdown com os textos publicados.
- `src/content.config.ts`: schema e loader da collection `textos`.
- `src/pages/index.astro`: landing page com a listagem de textos.
- `src/pages/textos/[slug].astro`: pagina individual de leitura.
- `src/styles/global.css`: identidade visual, tipografia e estilos globais.

## Frontmatter dos textos

Cada texto deve seguir este formato:

```md
---
title: Titulo do texto
subtitle: Linha de apoio opcionalmente mais literaria
publishedAt: 2026-03-11
tags:
	- escrita
	- diario
description: Resumo curto para SEO e compartilhamento
slug: meu-slug-opcional
draft: false
---
```

Se `slug` nao for informado, o Astro usa o nome do arquivo como identificador da rota.
