# **Energy Dashboard -- TFSD Lecture 4 Assignment**

**Author:** _Mahdiyeh Anjomshoae_\
**Repository:**
https://github.com/mahdiehanjomshoae/energy-dashboard.git\
**Build Tool:** **Webpack** (with TypeScript + React)

---

## **1. Project Description**

This project demonstrates the use of a **modern build automation tool**
(Webpack)\
to build, bundle, run, and package a **non-trivial TypeScript + React
application**.

### The application is an **Energy Dashboard**:

- User enters:
  - Device power (Watts)
  - Daily usage time (Hours)
  - Electricity price per kWh (€)
- App calculates:
  - Daily energy consumption (kWh)
  - Daily cost (€)
  - A **30-day cumulative cost chart**
- Validates inputs using **Zod**
- Displays results with **Recharts** visualization

### Why this meets the course requirements:

✔ Non-trivial codebase\
✔ External dependencies (`react`, `recharts`, `zod`)\
✔ Build automation using **Webpack**\
✔ Supports compilation, bundling, packaging\
✔ Version management using `npm version`

---

## **2. Build Tool -- Webpack**

Webpack handles:

### ✔ Dependency management

Through `package.json`

### ✔ Compilation

- TypeScript → JavaScript (`ts-loader`)\
- React JSX → JS

### ✔ Bundling

Entry: `src/index.tsx`\
Output: `/dist/bundle.js`

### ✔ Development server

Using `webpack-dev-server` (port 3000)

### ✔ Production build

Minified and optimized output via:

```bash
npm run build
```

---

## **3. Project Structure**

    energy-dashboard/
    │
    ├── src/
    │   ├── App.tsx
    │   ├── index.tsx
    │
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── webpack.config.js
    │
    └── README.md

---

## **4. Prerequisites**

- Node.js ≥ 18\
- npm ≥ 8\
- Git

---

# **5. How to Install, Build, and Run**

### Clone the repository

```bash
git clone https://github.com/mahdiehanjomshoae/energy-dashboard.git
cd energy-dashboard
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The app will open automatically at:

    http://localhost:3000

### Create production build

```bash
npm run build
```

This generates `dist/` containing optimized bundled files.

---

# **6. Version Management**

The project uses npm's built-in versioning:

```bash
npm version patch -m "release: bump patch version to %s"
git push --follow-tags
```

This performs:

- Updating the `"version"` in package.json\
- Creating a Git tag\
- Pushing tag + commits

---

# **7. Packaging**

Production packaging is handled fully via Webpack:

```bash
npm run build
```

This creates an optimized deployable bundle in:

    dist/

Optional npm packaging:

```bash
npm pack
```

Creates a `.tgz` tarball.

---

# **8. External Dependencies**

The project uses several external libraries:

Library Purpose

---

**react** / react-dom UI framework
**recharts** Charting & visualization
**zod** Input validation
**webpack** Build automation & bundling
**ts-loader** TypeScript → JS
**html-webpack-plugin** HTML template mgmt
