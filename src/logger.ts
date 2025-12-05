/**
 * Supported log levels.
 */
export type LogLevel = "debug" | "info" | "warn" | "error";

/**
 * A minimal structured logger used for the Energy Dashboard.
 *
 * Adds consistent formatting, context tags, and optional metadata.
 */
export class Logger {
  constructor(private context: string) {}

  private format(level: LogLevel, message: string, meta?: unknown) {
    const base = `[${level.toUpperCase()}][${this.context}] ${message}`;
    return meta !== undefined ? [base, meta] : [base];
  }

  /** Log a debug message */
  debug(message: string, meta?: unknown) {
    console.debug(...this.format("debug", message, meta));
  }

  /** Log an informational message */
  info(message: string, meta?: unknown) {
    console.info(...this.format("info", message, meta));
  }

  /** Log a warning */
  warn(message: string, meta?: unknown) {
    console.warn(...this.format("warn", message, meta));
  }

  /** Log an error */
  error(message: string, meta?: unknown) {
    console.error(...this.format("error", message, meta));
  }
}

export const appLogger = new Logger("EnergyDashboard");
