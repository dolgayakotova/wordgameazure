# Azure Terminology Trainer

Professional Azure terminology learning platform built with:

- React 19
- TypeScript
- Node.js 22
- Express
- Docker
- Nginx

## Features

- Azure terminology
- Flashcards
- Exam mode
- Search
- Categories
- Difficulty levels
- Statistics
- Timer
- Progress tracking

## Run
azure-terminology-trainer/
│
├── docker-compose.yml
├── .gitignore
├── LICENSE
├── README.md
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   ├── .dockerignore
│   └── src/
│       └── server.ts
│
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── .dockerignore
│   ├── nginx.conf
│   └── src/
│
└── .github/
    └── workflows/

docker compose up --build

Frontend

http://localhost:8080

Backend

http://localhost:3001/health
Первая часть будет содержать:

Полностью готовую структуру проекта
Docker Compose
Backend (Node.js + Express + TypeScript)
Frontend (React + Vite + TypeScript)
Nginx
ESLint
Prettier
GitHub Actions
README
Все конфигурационные файлы
Первый REST API

Этап 1.2 — Backend Architecture
backend/
│
├── src/
│   │
│   ├── server.ts
│   ├── app.ts
│   │
│   ├── config/
│   │      env.ts
│   │
│   ├── controllers/
│   │      TermController.ts
│   │
│   ├── routes/
│   │      termRoutes.ts
│   │
│   ├── services/
│   │      TermService.ts
│   │
│   ├── models/
│   │      Term.ts
│   │
│   ├── data/
│   │      terms.json
│   │
│   ├── middleware/
│   │      errorHandler.ts
│   │
│   └── utils/
│          search.ts
