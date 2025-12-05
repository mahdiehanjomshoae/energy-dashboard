/**
 * Input parameters for computing energy usage and cost.
 *
 * @property watts - Power consumption in watts (W)
 * @property hours - Daily usage duration in hours (h)
 * @property price - Electricity price per kWh (€)
 */
export interface EnergyInput {
  watts: number;
  hours: number;
  price: number;
}

/**
 * Result values for computed energy usage and cost.
 *
 * @property kwhPerDay - Energy consumed per day in kilowatt-hours (kWh)
 * @property dailyCost - Cost per day (€)
 * @property monthlyCost - Cost per 30 days (€)
 * @property yearlyCost - Cost per 365 days (€)
 */
export interface EnergyResult {
  kwhPerDay: number;
  dailyCost: number;
  monthlyCost: number;
  yearlyCost: number;
}

/**
 * Computes daily, monthly, and yearly energy consumption and cost.
 *
 * @param input - Object containing watts, hours, and price values
 * @returns EnergyResult containing computed cost metrics
 *
 * @example
 * computeEnergy({ watts: 1000, hours: 2, price: 0.5 });
 */
export function computeEnergy(input: EnergyInput): EnergyResult {
  const kwhPerDay = (input.watts * input.hours) / 1000;
  const dailyCost = kwhPerDay * input.price;

  return {
    kwhPerDay,
    dailyCost,
    monthlyCost: dailyCost * 30,
    yearlyCost: dailyCost * 365,
  };
}
