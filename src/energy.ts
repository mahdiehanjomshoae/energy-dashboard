export interface EnergyInput {
  watts: number;
  hours: number;
  price: number;
}

export interface EnergyResult {
  kwhPerDay: number;
  dailyCost: number;
  monthlyCost: number;
  yearlyCost: number;
  chartData: { day: number; cost: number }[];
}

export function computeEnergy(input: EnergyInput): EnergyResult {
  const kwhPerDay = (input.watts * input.hours) / 1000;
  const dailyCost = kwhPerDay * input.price;

  const chartData = Array.from({ length: 30 }).map((_, i) => ({
    day: i + 1,
    cost: dailyCost * (i + 1),
  }));

  return {
    kwhPerDay,
    dailyCost,
    monthlyCost: dailyCost * 30,
    yearlyCost: dailyCost * 365,
    chartData,
  };
}
