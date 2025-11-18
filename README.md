# Guardz Assignment

A simple full-stack application built as part of the Guardz technical assignment.
Users can submit basic details through a form and view all submitted entities in a clean table.

The system includes a NestJS backend, a React frontend, Dockerized deployment, and tests.

---

## 🧱 Tech Stack

**Backend:** NestJS, TypeScript, class-validator, Jest
**Frontend:** React (Vite + TypeScript)
**Deployment:** Docker, Docker Compose, Nginx, GCP Compute Engine VM

---

## ▶️ Running Locally (Docker)

```bash
git clone https://github.com/morsharfi/guardz-assignment.git
cd guardz-assignment
docker compose build
docker compose up
```

* Frontend → [http://localhost](http://localhost)
* Backend → [http://localhost:8080/api/entities](http://localhost:8080/api/entities)

---

## ▶️ Running Locally (without Docker)

### Backend

```bash
cd backend
npm install
npm run start:dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Tests (Backend)

### Unit tests

```bash
npm test
```

### E2E tests

```bash
npm run test:e2e
```

---

## 🌐 Deployment on GCP

The application is deployed on a Google Cloud Compute Engine VM using Docker Compose.

To redeploy after pushing new changes:

```bash
ssh -i <private_key> candidate@<IP>
cd ~/app/guardz-assignment
git pull origin main
docker compose down
docker compose build
docker compose up -d
```

---

## 📡 API Endpoints

### POST /api/entities

```bash
curl -X POST -H "Content-Type: application/json" \
-d '{"name":"Mor","email":"mor@test.com","age":27}' \
http://<server>/api/entities
```

### GET /api/entities

```bash
curl http://<server>/api/entities
```

---

## 📁 Project Structure

```
backend/   NestJS API
frontend/  React + Vite client
docker-compose.yml
```

---

## ✔️ Completed Requirements

* Fully working form + table UI
* Backend implemented with NestJS
* Frontend implemented with React
* Dockerized (frontend + backend)
* Tests included (unit + e2e)
* Deployed on GCP VM
* Public GitHub repository
* Clean, simple user experience

## 💬 אם תרצי —

אני יכולה לכתוב גם גרסת README **קצרה מאוד** (10 שורות), או גרסה **מעוצבת יותר**, או לגרום לזה להיראות אפילו “יותר בכיר”.
