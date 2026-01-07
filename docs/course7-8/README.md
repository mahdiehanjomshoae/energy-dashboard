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

# TFSD Course 8

This project uses GitHub Actions to implement a complete CI/CD pipeline.

## Continuous Integration (CI)

On every push and pull request:
.The project is built and tested automatically
.A matrix of Node.js versions is used (Node 18 and 20)
.ESLint is executed to detect code style issues and code smells

Workflow file:
.github/workflows/ci.yml

## Automated Release

When a Git tag is pushed:
.A GitHub Release is created automatically
.A changelog is generated from the git history since the previous tag

Workflow file:
.github/workflows/release.yml

## Documentation Deployment

On every push to the main branch:
.Reference documentation is generated using TypeDoc
.Documentation is automatically published using GitHub Pages

Workflow file:
.github/workflows/pages.yml

## Proof

.GitHub Actions tab shows successful CI runs
.GitHub Releases page shows automatically generated releases
.GitHub Pages hosts the reference documentation
