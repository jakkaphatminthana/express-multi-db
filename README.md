# express-multi-db

A sample Express.js application that connects to both **MongoDB Atlas** and **PostgreSQL (Supabase)** using Docker and Docker Compose.

## 🧰 Tech Stack

- Node.js + Express
- MongoDB (via Mongoose)
- PostgreSQL (via pg)
- Docker + Docker Compose
- Cloud Run / Artifact Registry (for deployment)

---

## 🚀 Getting Started (Local Dev)

### Start all services

```bash
docker-compose up -d --build
```
This will start:
* app (Express server on port 3000)
* mongo (MongoDB on port 27017)
* postgres (PostgreSQL on port 6543)

## 🌐 Environment Variables
These can be configured in the docker-compose.yml file.
```bash
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/?retryWrites=true&w=majority
POSTGRES_URI=postgresql://<user>:<pass>@<host>:<port>/<dbname>
```

## ☁️ Deploy to Cloud Run
#### 1. Build & push image to Artifact Registry
```bash
docker build -t asia-southeast1-docker.pkg.dev/<project-id>/<repo-name>/<image-name> .
docker push asia-southeast1-docker.pkg.dev/<project-id>/<repo-name>/<image-name>
```

> If you're on **Mac M1/M2** or encounter architecture issues, consider adding `--platform=linux/amd64`

#### 2. Deploy to Cloud Run
```bash
gcloud run deploy <service-name> \
  --image=asia-southeast1-docker.pkg.dev/<project-id>/<repo-name>/<image-name> \
  --region=asia-southeast1 \
  --platform=managed \
  --allow-unauthenticated \
  --set-env-vars=MONGODB_URI=...,POSTGRES_URI=...
```
