import { computeEnergy } from "./energy";

describe("computeEnergy", () => {
  it("computes energy and cost correctly for typical values", () => {
    const result = computeEnergy({ watts: 1000, hours: 2, price: 0.5 });

    expect(result.kwhPerDay).toBeCloseTo(2);
    expect(result.dailyCost).toBeCloseTo(1);
    expect(result.monthlyCost).toBeCloseTo(30);
    expect(result.yearlyCost).toBeCloseTo(365);
  });

  it("handles zero hours", () => {
    const result = computeEnergy({ watts: 500, hours: 0, price: 0.2 });
    expect(result.kwhPerDay).toBe(0);
    expect(result.dailyCost).toBe(0);
  });

  it("handles small wattage devices", () => {
    const result = computeEnergy({ watts: 10, hours: 10, price: 0.3 });
    expect(result.kwhPerDay).toBeCloseTo(0.1);
    expect(result.dailyCost).toBeCloseTo(0.03);
  });
});
