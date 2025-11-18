# Guardz Assignment – NestJS + React + TypeScript

This repo contains a full-stack solution for the Guardz home assignment:

- Backend: NestJS (TypeScript)
- Frontend: React + Vite (TypeScript)
- Clear separation of components, types, and styles
- Dockerfiles for both services
- docker-compose for easy run

## 1. Backend – NestJS (TypeScript)

### Install & run locally

```bash
cd backend
npm install
npm run build
npm start        # runs dist/main.js on port 8080
# or for dev with reload
npm run start:dev
```

The backend exposes:

- `POST http://localhost:8080/api/entities`
- `GET  http://localhost:8080/api/entities`

### Test

```bash
cd backend
npm test
```

## 2. Frontend – React + Vite (TypeScript)

### Install & run locally

```bash
cd frontend
npm install
npm run dev
```

Vite runs on `http://localhost:5173` by default.

The frontend uses:

```ts
const API_BASE = `${window.location.protocol}//${window.location.hostname}:8080/api`;
```

So locally it will call the backend on `http://localhost:8080/api/...`.

### Build

```bash
cd frontend
npm run build
```

## 3. Run with Docker

From the project root (`guardz-assignment`):

```bash
docker-compose build
docker-compose up
```

- Frontend: `http://localhost/` (port 80)
- Backend: `http://localhost:8080/api/entities`

On the Guardz GCP VM, you will access:

- Frontend: `http://<VM_IP>/`
- Backend: `http://<VM_IP>:8080/api/entities`

## 4. Structure

```text
guardz-assignment/
  backend/
    src/
      main.ts
      app.module.ts
      entities/
        entities.module.ts
        entities.controller.ts
        entities.service.ts
        dto/create-entity.dto.ts
    tsconfig.json
    tsconfig.build.json
    jest.config.js
    package.json
    Dockerfile
  frontend/
    src/
      main.tsx
      App.tsx
      types.ts
      components/
        EntityForm.tsx
        EntitiesTable.tsx
      styles.css
    tsconfig.json
    vite.config.ts
    package.json
    index.html
    Dockerfile
  docker-compose.yml
  README.md
```

This should match the assignment requirements while using NestJS + React + TypeScript and a clean component separation.
