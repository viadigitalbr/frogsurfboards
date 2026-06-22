# CLAUDE.md — Frog Surfboards (regras do repositório)

> Este arquivo fica na **raiz de `/Site/www`** e reforça as regras de ambiente para qualquer sessão do Claude Code. **Ler antes de qualquer ação.**

## Diretório e escopo do repositório
- **Diretório de trabalho = raiz do repositório:** `/Users/vivianadelbianco/Clientes/FrogSurfboards/Site/www`.
- **O `git init` é feito DENTRO de `www`.** A raiz do repositório é o próprio app Next.js. **Só o conteúdo de `www/` vai para o Git e para a Vercel.**
- **Os insumos e docs ficam um nível acima, em `Site/`** (`01-marca`, `02-projeto`, `Logos`, `Midias`, `Pranchas`, `Sobre a Frog`, `Depoimentos`, `Prints-Site-Antigo`) — **fonte da verdade de conteúdo, NÃO versionada.** Nunca commitar esse material.
- **NUNCA usar worktrees ou diretórios alternativos.** Se abrir worktree em `.claude/worktrees/`, fechar e voltar para `www`. (Aprendizado da Sala.)
- **Modo auto-accept ativado:** editar, rodar `npm` e alterar sem pedir confirmação a cada passo.
- **Nunca inventar FATOS** (specs, preços, bios, depoimentos) — usar os insumos reais.
- **Storytelling: pode inovar.** A cliente autorizou criar uma narrativa institucional mais atual; o site antigo é **referência**, não molde. Copy nova de marketing é permitida, marcada como `[PROPOSTA]` e aprovada antes de publicar. (Isso flexibiliza o "seguir o site atual" do prompt original — vale para a narrativa, não para os fatos.)

## Fases
- **Foco: Fase 1** (site institucional, conteúdo hardcoded, sem checkout/CMS/banco).
- **NÃO iniciar a Fase 2** (Sanity + venda online) sem instrução explícita. Arquitetura só precisa ser **compatível**.

## Stack (resumo — detalhe em STACK.md)
Next.js 14 (App Router) · TypeScript · Tailwind · Framer Motion · API Routes · Resend (contato) · Vercel · GA4. SSG em todas as páginas.

## Navegação e páginas (Fase 1)
Header: `PRANCHAS · SOBRE A FROG · DÚVIDAS · CONTATO` + redes (Instagram, YouTube). WhatsApp flutuante em todas as páginas. (Drop In e Facebook foram descartados.)
Rotas em `www/app/`: `/`, `/sobre`, `/pranchas`, `/pranchas/[modelo]`, `/duvidas`, `/contato`, páginas de apoio (`/politica-de-privacidade`, `/politica-de-cookies`, `/como-comprar`) e `/api/contato`.

## Regras técnicas inegociáveis (Fase 1)
- SSG em todas as páginas; `next/image` para fotos (imagens de produto são pesadas).
- `next/metadata` por página (title, description, Open Graph); `app/sitemap.ts`; `public/robots.txt`.
- `lang` correto por idioma; **um único `<h1>` por página**.
- **Fontes:**
  - **Títulos = Oswald** (provisória) via **`next/font/google`**. A Bebas Neue Pro (Adobe) fica como definitiva para uma etapa futura.
  - **Corpo = Open Sans** via **`next/font/google`**. **Não usar Roboto.**
  - Ambas auto-hospedadas pelo Next; `font-display: swap`.
- i18n previsto desde já: **PT (principal)**, depois EN/ES (tradução/revisão pelo Claude). Isolar as chaves de tradução.
- Catálogo dos modelos como **array tipado no frontend** (sem Sanity na Fase 1). Schema em `Pranchas/Pranchas.md`. 6 modelos com dados reais (Hell Fish, Wild Twin, MSV, Krypto, Liberty Flow, Savage); King Frog com copy proposta, specs pendentes.
- CTA de produto (Fase 1) → **encomenda/contato** (formulário ou WhatsApp). Botão "comprar" real só na Fase 2.
- `/api/contato` → Resend. Campos: nome, e-mail, telefone/WhatsApp, modelo de interesse, mensagem (+ consentimento).
- **Cookie banner (LGPD)** — GA4/Google Tag só disparam após consentimento (Consent Mode).

## Logos (em `Logos/` → copiar p/ `www/public/`)
- Header: `Logo-Letter-Branco.png` · Footer: `Logo-Principal-Branco.png` · Favicon/ícone/OG: `Favico.png`. São versões brancas (fundo escuro).

## Analytics
- GA4 Measurement ID: `G-39F3S4Q9VY` · Google Tag: `GT-MQBS3DWP`. Carregar **após consentimento**.

## Cores e tipografia
Ver `design-system.md`. Fundo base `#262626`, acento verde `#39F604`, títulos Oswald (provisória), corpo Open Sans. Cada modelo tem logo e cor de acento próprios.

## Hero da Home
Vídeo de fundo (`Midias/Videos/*.mp4`, ~7MB): `muted`/`autoPlay`/`loop`/`playsInline` + `poster` + overlay escuro; fallback de imagem em conexão lenta / `prefers-reduced-motion`.

## Deploy
Mac (`/Site/www`) → GitHub Desktop (commit + push em `main`) → Vercel (deploy automático). **Vercel Root Directory = padrão (`./`)**, pois o repo já é o app. Detalhes em `DEPLOY-RUNBOOK.md`.

## Quando em dúvida
Consultar `ARQUITETURA.md`, `STACK.md`, `PENDENCIAS.md`, `SEO-PERFORMANCE.md`, `DEPLOY-RUNBOOK.md` (em `02-projeto/`) e os insumos de marca (`01-marca/`) e de modelos (`Pranchas/`). Se faltar conteúdo real, **parar e sinalizar** em vez de inventar.
