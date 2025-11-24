type LogLevel = "debug" | "info" | "warn" | "error";

class Logger {
  constructor(private context: string) {}

  private format(level: LogLevel, message: string, meta?: unknown) {
    const time = new Date().toISOString();

    const base = `[${time}] [${level.toUpperCase()}] [${
      this.context
    }] ${message}`;

    if (meta !== undefined) {
      return [base, meta];
    }

    return [base];
  }

  debug(message: string, meta?: unknown) {
    console.debug(...this.format("debug", message, meta));
  }

  info(message: string, meta?: unknown) {
    console.info(...this.format("info", message, meta));
  }

  warn(message: string, meta?: unknown) {
    console.warn(...this.format("warn", message, meta));
  }

  error(message: string, meta?: unknown) {
    console.error(...this.format("error", message, meta));
  }
}

export const appLogger = new Logger("EnergyDashboard");
