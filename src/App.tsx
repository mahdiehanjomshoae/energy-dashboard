import { useState } from "react";
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

const formSchema = z.object({
  watts: z.number().min(1),
  hours: z.number().min(0.1),
  price: z.number().min(0),
});

export default function App() {
  const [watts, setWatts] = useState(100);
  const [hours, setHours] = useState(5);
  const [price, setPrice] = useState(0.3);

  const parsed = formSchema.safeParse({ watts, hours, price });

  let dailyCost = 0;
  let chartData: { day: number; cost: number }[] = [];

  if (parsed.success) {
    const { watts, hours, price } = parsed.data;
    const kwh = (watts * hours) / 1000;
    dailyCost = kwh * price;

    // 30-day cumulative cost chart
    chartData = Array.from({ length: 30 }).map((_, i) => ({
      day: i + 1,
      cost: dailyCost * (i + 1),
    }));
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
            onChange={(e) => setWatts(Number(e.target.value))}
          />
        </label>

        <label>
          Hours per day:
          <input
            type="number"
            step="0.1"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
          />
        </label>

        <label>
          Price per kWh (€):
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </label>
      </div>

      {!parsed.success ? (
        <h2 style={{ color: "red", marginTop: 20 }}>Invalid input values</h2>
      ) : (
        <>
          <h2 style={{ marginTop: 20 }}>Daily Cost: €{dailyCost.toFixed(2)}</h2>

          <h3>Cumulative Cost (30 days)</h3>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={chartData}>
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
