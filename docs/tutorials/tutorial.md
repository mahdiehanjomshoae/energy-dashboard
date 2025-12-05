# Energy Dashboard – Tutorial

This tutorial will guide you through installing, running, and using the **Energy Dashboard**, a React + TypeScript project that calculates and visualizes energy consumption and cost.

---

1. What the Application Does

The Energy Dashboard allows you to:

- Enter device power (Watts)
- Enter daily usage (Hours)
- Enter electricity price per kWh (€)
- Get daily, monthly, and yearly energy costs
- Visualize a 30-day cumulative cost chart
- Receive validation feedback (powered by Zod)
- See meaningful logs for debugging (custom logger)
- Run unit-tested computation logic (Jest + ts-jest)

---

2. Project Installation

Step 1 — Clone the repository

```bash
git clone https://github.com/mahdiehanjomshoae/energy-dashboard.git
cd energy-dashboard
```

Step 2 — Install dependencies

npm install

3. Running the Application

Development mode : npm run dev
Then open: http://localhost:3000

4. Using the Dashboard

Enter the device power in Watts
Enter hours of use per day
Enter electricity price per kWh
The dashboard automatically:
Validates inputs
Computes cost
Displays results
Shows a cumulative 30-day chart

Example:
Watts Hours Price Daily cost
1000 2 0.50 €1.00

5. Computing Energy Cost (Behind the Scenes)

Internally the app uses:
kWh per day = (watts × hours) / 1000
dailyCost = kWh × price

This logic is implemented in:
src/energy.ts

And tested using Jest:
npm test

6. Logging (Debugging Support)

The dashboard includes a structured logger that prints:
debug logs → when user changes input
info logs → when computation succeeds
warn logs → on validation failure
error logs → unexpected runtime errors
Open browser DevTools → Console to see logs.

7. Building for Production

npm run build
Bundled output goes to:
dist/

8. Summary

You have now:
Installed the project
Run the dashboard
Understood how cost is computed
Viewed the real-time chart
Verified testing & logging features
