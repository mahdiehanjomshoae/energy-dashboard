/**
 * Main React component for the Energy Dashboard.
 * Handles user input, validation, logging, chart rendering,
 * and displays computed energy cost information.
 */

import { useState, useEffect } from "react";
import { z } from "zod";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { appLogger } from "./logger";
import { computeEnergy } from "./energy";

const formSchema = z.object({
  watts: z.number().min(1),
  hours: z.number().min(0.1),
  price: z.number().min(0),
});

export default function App() {
  const [watts, setWatts] = useState(100);
  const [hours, setHours] = useState(5);
  const [price, setPrice] = useState(0.3);

  useEffect(() => {
    appLogger.info("App mounted");
    return () => appLogger.info("App unmounted");
  }, []);
  const parsed = formSchema.safeParse({ watts, hours, price });

  if (!parsed.success) {
    appLogger.warn("Validation failed", {
      issues: parsed.error.issues,
    });
  } else {
    appLogger.debug("Input values are valid", { watts, hours, price });
  }

  let result = null;

  try {
    if (parsed.success) {
      result = computeEnergy(parsed.data);

      appLogger.info("Energy cost computed", {
        kwhPerDay: result.kwhPerDay,
        dailyCost: result.dailyCost,
      });
    }
  } catch (err) {
    appLogger.error("Unexpected error during computation", err);
  }
  return (
    <div style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h1>Energy Cost Dashboard</h1>

      <div style={{ display: "grid", gap: "1rem", maxWidth: 400 }}>
        <label>
          Power (Watts):
          <input
            type="number"
            value={watts}
            onChange={(e) => {
              const v = Number(e.target.value);
              setWatts(v);
              appLogger.debug("User changed watts", { value: v });
            }}
          />
        </label>

        <label>
          Hours per day:
          <input
            type="number"
            step="0.1"
            value={hours}
            onChange={(e) => {
              const v = Number(e.target.value);
              setHours(v);
              appLogger.debug("User changed hours", { value: v });
            }}
          />
        </label>

        <label>
          Price per kWh (€):
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => {
              const v = Number(e.target.value);
              setPrice(v);
              appLogger.debug("User changed price", { value: v });
            }}
          />
        </label>
      </div>

      {!parsed.success || result === null ? (
        <h2 style={{ color: "red", marginTop: 20 }}>Invalid input values</h2>
      ) : (
        <>
          <h2 style={{ marginTop: 20 }}>
            Daily Cost: €{result.dailyCost.toFixed(2)}
          </h2>

          <h3>Cumulative Cost (30 days)</h3>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={result.chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cost" stroke="#000" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}
