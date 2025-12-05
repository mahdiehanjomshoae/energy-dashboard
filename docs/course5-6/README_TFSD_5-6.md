1. Static Code Analysis – ESLint
   I configured ESLint for my TypeScript + React project to detect issues early and enforce code quality.

-Installation
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks

-Configuration
File: eslint.config.js
Configured rules include:TypeScript rules (@typescript-eslint/\*)
React rules
React Hooks rules
Unused variables (no-unused-vars)
General JS best practices

-Run Analysis
npm run lint

-Proof
ESLint correctly detected issues (e.g., no-undef in src/index.tsx)
Commit proof: feat: add ESLint static code analysis for TFSD course 5
ESLint configuration file is stored in the repository.

2. Pre-commit Hooks – Husky
   I added Husky to automate static analysis before every commit.

-Installation
npx husky-init
npm install

-Pre-commit Hook
File: .husky/pre-commit

#!/bin/sh
. "$(dirname "$0")/\_/husky.sh"

npm run lint

Commit proof:test husky

3. Relevant Logging – Custom Logger
   I implemented a custom structured logger (src/logger.ts) instead of trivial console.log messages.
   This meets the requirement of “relevant logging” because logs are tied to the actual business logic:

-Implemented Log Levels
debug → when the user updates form values
info → when energy cost is successfully computed
warn → when Zod validation fails
error → for unexpected runtime errors inside try/catch

-Implemented Features
Context-based logging ([EnergyDashboard])
Automatic log formatting (LEVEL + Context + Message)
Metadata support for debugging (e.g., { value: x })

-Example Log Output (visible in DevTools)
[DEBUG][EnergyDashboard] User changed watts { value: 150 }
[INFO][EnergyDashboard] Energy cost computed { kwhPerDay: 2, dailyCost: 0.8 }
[WARN][EnergyDashboard] Validation failed { issues: [...] }

-Proof
Logger implemented in: src/logger.ts
Logging calls inside: src/App.tsx
Commit proof: feat: add structured logger with debug/info/warn/error levels

4. Unit Testing – Jest + ts-jest
   I implemented unit tests for core business logic using Jest + ts-jest.

-Installation
npm install --save-dev jest ts-jest @types/jest jest-environment-jsdom

-Configuration File
jest.config.cjs
Contains:
module.exports = {
preset: "ts-jest",
testEnvironment: "jsdom",
roots: ["<rootDir>/src"],
moduleFileExtensions: ["ts", "tsx", "js"]
};

-Business Logic File
src/energy.ts
Contains:kWh/day calculation
Daily, monthly, yearly cost formulas

-Run Tests
npm test

-Proof
Tests run and show passed/failed results
Debugging possible via VSCode’s Jest test runner
Commit proof: test: add Jest unit tests for energy computation

**\*\***course 6 **\***

1. License
   I chose the MIT License for this project.
   License file: LICENSE at the root of the repository.
   Commit proof: chore: add MIT license for energy dashboard project.

2. add README.md in root

3. Code Documentation + Reference Documentation

I added JSDoc-style documentation to the core business logic:

src/energy.ts

src/logger.ts

Then I generated full reference documentation using TypeDoc.

- Installation
  npm install --save-dev typedoc typedoc-plugin-markdown

- Configuration

typedoc.json:

{
"entryPoints": ["src/energy.ts", "src/logger.ts"],
"out": "docs/reference",
"plugin": ["typedoc-plugin-markdown"],
"tsconfig": "./tsconfig.json"
}

- Generate documentation
  npm run docs
  Generated output is located in:
  docs/reference/

4. Tutorial – User Guide for the Energy Dashboard
   I created a step-by-step tutorial.
   The tutorial helps new users understand how to run the app, enter values, validate inputs,
   and interpret the chart.

- File location:
  docs/tutorials/tutorial.md

  - Contents:
    Overview of the dashboard
    How to run the application
    How to use input fields
    Explanation of validation (Zod)
    How energy cost is computed (kWh, daily, monthly)
    Explanation of the 30-day cumulative chart
    Screenshots of the application UI
    Notes on logs and debugging

- Proof:
  Commit: docs: add user tutorial for TFSD course 6

5. Manual GitHub Release
   A manual release was created for the project on GitHub.

Release includes:

- Static code analysis setup
- Pre-commit hooks
- Structured logging
- Unit tests
- Documentation files
- MIT License

Proof:
https://github.com/mahdiehanjomshoae/energy-dashboard/releases/tag/v0.1.0
