# Guardz Full-Stack Assignment

This repository contains my implementation of the Guardz full-stack assignment.
The goal of the project is to build a simple, user-friendly system that allows users to submit their information and view all submitted entities.
The project includes a **NestJS backend**, a **React frontend**, Docker support, tests, and deployment instructions for running the service on a GCP Compute Engine instance.

---

## 🚀 Features

### **Frontend (React + Vite)**

* Clean and simple UI
* Form for submitting a new entity (name, email, age)
* Responsive table showing all submitted entities
* Automatic refresh after submitting an entry

### **Backend (NestJS)**

* REST API to manage user entities
* Endpoints:

  * `POST /api/entities` – create new entity
  * `GET /api/entities` – list all entities
* In-memory storage (as required for the assignment)
* DTO validation
* CORS enabled

### **Tests**

* Unit tests for the service layer
* E2E test that verifies:

  * Creating an entity via `POST`
  * Retrieving it via `GET`
  * Ensuring the API behaves exactly as required

### **Docker support**

* Separate `Dockerfile` for backend and frontend
* Production-ready multi-stage builds
* NGINX serving the built frontend
* Fully automated `docker-compose.yml` setup

---

## 📦 Tech Stack

* **Backend:** NestJS (TypeScript)
* **Frontend:** React + Vite
* **Runtime:** Node.js
* **Deployment:** Docker, NGINX, Docker Compose
* **Cloud:** GCP Compute Engine
* **Testing:** Jest + Supertest

---

## 📁 Project Structure

guardz-assignment/
│
├── backend/
│   ├── src/
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   └── entities/
│   │       ├── entities.controller.ts
│   │       ├── entities.service.ts
│   │       └── dto/
│   ├── test/
│   │   └── app.e2e-spec.ts
│   ├── Dockerfile
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── Dockerfile
│   └── package.json
│
└── docker-compose.yml

---

## 🛠️ Running Locally (Development)

### Backend

```bash
cd backend
npm install
npm run start:dev
```

Server runs by default on:

```
http://localhost:8080
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs by default on:

```
http://localhost:5173
```

---

## 🐳 Running with Docker (Production Mode)

Everything is containerized through Docker Compose.

### Build

```bash
docker-compose build
```

### Run

```bash
docker-compose up
```

The services will be available on:

* **Frontend:** [http://localhost](http://localhost)
* **Backend:** [http://localhost:8080](http://localhost:8080)

---

## 🌐 API Reference

### **POST /api/entities**

Create a new entity.

#### Example:

```bash
curl -X POST http://localhost:8080/api/entities \
  -H "Content-Type: application/json" \
  -d '{"name":"Mor","email":"mor@example.com","age":27}'
```

---

### **GET /api/entities**

Retrieve all submitted entities.

#### Example:

```bash
curl http://localhost:8080/api/entities
```

Response:

```json
[
  {
    "id": 1,
    "name": "Mor",
    "email": "mor@example.com",
    "age": 27,
    "createdAt": "2025-11-18T10:21:00.000Z"
  }
]
```

---

## 🧪 Running Tests

### Unit tests

```bash
cd backend
npm test
```

### E2E tests

```bash
npm run test:e2e
```

These tests verify that the application behaves correctly through HTTP calls (POST → GET).

---

## ☁️ Deployment on GCP Compute Engine

### 1. Connect to the VM

Use the private key and IP provided in the assignment:

```bash
ssh -i id_ed25519 candidate@<YOUR_IP>
```

### 2. Clone your repository

```bash
git clone https://github.com/<your-username>/guardz-assignment.git
cd guardz-assignment
```

### 3. Build and run with Docker

```bash
docker-compose build
docker-compose up -d
```

### 4. Access the application

Ports 80 and 8080 should already be open according to the assignment:

* Frontend: `http://<YOUR_IP>`
* Backend: `http://<YOUR_IP>:8080/api/entities`

---

## ✔️ Assignment Coverage

This implementation fully covers all required points:

* ✓ Backend in NestJS
* ✓ Frontend in React
* ✓ Working POST/GET API
* ✓ Data displayed in a table
* ✓ Dockerized
* ✓ E2E + unit tests
* ✓ README with instructions
* ✓ Ready for GCP deployment

---

## 📬 Notes

The application uses an in-memory store, meaning data resets when the backend restarts — which is fully aligned with the requirements.️
