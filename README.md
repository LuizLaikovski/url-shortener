# URL Shortener

![LICENSE](https://img.shields.io/github/license/LuizLaikovski/url-shortener?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![EXPRESS](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![REACT](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![PRISMA](https://img.shields.io/badge/prisma-%2300A4EF?style=for-the-badge&logo=prisma)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

📌 Sobre

Este repositório contém um encurtador de URLs simples composto por uma API (backend) em TypeScript com Express e Prisma, e uma interface frontend em React + Vite. O objetivo é oferecer uma aplicação prática para criar links curtos, listar URLs encurtadas e redirecionar a partir do short code.

🔧 Tecnologias

- Node.js + TypeScript
- Express
- Prisma (Postgres)
- React + Vite
- Tailwind CSS (frontend)

🚀 Como usar

Siga os passos abaixo para executar o projeto localmente. O repositório está dividido em duas pastas principais: `api/` (backend) e `front/` (frontend).

Pré-requisitos

- Node.js (recomendado v18+)
- Git
- Banco de dados PostgreSQL (local ou remoto)

Clonando

```bash
git clone https://github.com/LuizLaikovski/url-shortener.git
cd url-shortener
```

Configuração (variáveis de ambiente)

Crie um arquivo `.env` na pasta `api/` com as variáveis abaixo (ajuste conforme sua configuração):

```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
API_KEY="sua_chave_secreta"
```

No frontend (`front/`) crie um arquivo `.env` (ou use `VITE_` variables) com:

```
VITE_API_KEY="sua_chave_secreta"
```

Observação: a chave do frontend (`VITE_API_KEY`) deve ser a mesma configurada em `API_KEY` no backend para que as rotas protegidas funcionem.

Como executar (desenvolvimento)

Backend (API)

```bash
cd api
npm install
# Gere client do Prisma
npx prisma generate
# Rode migrações (ou use migrate dev)
npx prisma migrate dev --name init
# Inicie em modo dev
npm run dev
```

Frontend

```bash
cd front
npm install
npm run dev
```

Exemplo de URL base (local)

```
Backend: http://localhost:8080
Frontend (Vite): http://localhost:5173
```

📍 Rotas da Aplicação (API)

As rotas estão em `api/src/urlRoutes.ts`. Resumo:

- `GET /:short` — redireciona para a URL original com base no código curto (`short`). (Público)
- `POST /shorten` — cria uma URL curta. Requer header `x-api-key` com a chave configurada. Body: `{ "url": "https://exemplo.com" }` — Retorna `{ "shortUrl": "abc123" }`.
- `GET /` — lista todas as URLs encurtadas. Requer `x-api-key`.

Exemplos curl

Criar URL curta:

```bash
curl -X POST http://localhost:8080/shorten \
  -H "Content-Type: application/json" \
  -H "x-api-key: SUA_CHAVE_AQUI" \
  -d '{"url":"https://example.com"}'
```

Redirecionar (acessar no navegador):

```
http://localhost:8080/abc123
```

Listar URLs (requer api key):

```bash
curl -H "x-api-key: SUA_CHAVE_AQUI" http://localhost:8080/
```

📁 Estrutura do Projeto

- `api/` — backend (Express, Prisma, TypeScript)
  - `src/` — código-fonte
    - `controller/` — lógica de negócio (ex: `urlShortener.ts`)
    - `middlewares/` — middlewares (ex: `apiKey.middleware.ts`)
    - `lib/` — client Prisma
    - `index.ts` — ponto de entrada
  - `prisma/` — schema e migrations
- `front/` — frontend (React + Vite)
  - `src/` — componentes e lógica da interface (ex: `App.tsx`)

🤝 Colaboradores

Contribuições são bem-vindas. Se quiser contribuir:

1. Faça um fork
2. Crie uma branch com sua feature: `git checkout -b feat/minha-feature`
3. Faça commits e abra um pull request

Licença

Este projeto utiliza a licença presente no repositório (ver `LICENSE`).