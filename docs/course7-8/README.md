# TFSD Course 7

## Multi-container Docker Application

This project is deployed as a multi-container Docker application using Docker Compose.

### Containers

.Frontend: React + TypeScript (built with Webpack)
.Nginx: Serves the production build

### How to Run

```bash
docker compose up --build
```

Then open:
http://localhost:8080

#### Proof:

Dockerfile
docker-compose.yml
Demo video showing containers running and application accessible in browser
