import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LogLevel } from './log/logger.type';

/**
 * Application configuration type
 */
export type AppConfig = {
  /** Minimum log level to write */
  logLevel: LogLevel;
  /** Base URL of the API */
  apiBaseUrl: string;
  /** Whether to show alerts to the user */
  showAlertsToUser?: boolean;
};

const DEFAULT_CONFIG = environment;

/** Application configuration token*/
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

/**
 * Provides the application configuration
 * @description This is a factory function with predefined values
 * @param appConfig The application configuration (optional with default values)
 */
export const provideAppConfig = (appConfig?: Partial<AppConfig>) => {
  const value = { ...DEFAULT_CONFIG, ...appConfig };
  return {
    provide: APP_CONFIG,
    useValue: value,
  };
};
