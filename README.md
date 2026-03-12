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

## GitHub Pages

O projeto ja esta preparado para deploy no GitHub Pages com GitHub Actions.

1. Suba o repositorio para o GitHub.
2. Em `Settings > Pages`, escolha `GitHub Actions` como source.
3. Faça push para a branch `main`.

O workflow em `.github/workflows/deploy.yml` faz o build e publica automaticamente.

Essa ativacao em `Settings > Pages` precisa ser feita ao menos uma vez. Sem isso, o GitHub nao cria o site de Pages para o repositorio e o deploy falha.

Para repositorios do tipo `usuario.github.io`, o site sera publicado na raiz.
Para repositorios comuns, como `usuario/me`, o Astro ajusta automaticamente o `base` para `/<nome-do-repo>` durante o deploy.
