import { MiddlewareFn } from './middleware.interface';
/** Enum for predefined settings keys */
export enum KEY_SETTINGS {
  APP_NAME = 'app_name', // Application name
  APP_VERSION = 'app_version', // Application version
  ENVIRONMENT = 'environment', // Current environment ('development' | 'production')
  SERVER = 'server', // Server configurations
  LOGGER = 'logger', // Logger configurations
  PATHS = 'paths', // Paths configurations
  ROUTES = 'routes', // Routes configurations
  CACHE = 'cache', // Cache configurations
  EVENTS = 'events', // Event system configurations
  PLUGINS = 'plugins', // Plugins configurations
  GLOBAL_SETTINGS = 'global_settings', // Global application settings
}

/** Interface for App Configuration */
export interface AppConfig {
  [KEY_SETTINGS.APP_NAME]?: string;
  [KEY_SETTINGS.APP_VERSION]?: string;
  [KEY_SETTINGS.ENVIRONMENT]?: Environment;
  [KEY_SETTINGS.SERVER]?: ServerConfig;
  [KEY_SETTINGS.LOGGER]?: LoggerConfig;
  [KEY_SETTINGS.PATHS]?: PathConfig;
  [KEY_SETTINGS.ROUTES]?: RouteConfig[];
  [KEY_SETTINGS.CACHE]?: CacheConfig;
  [KEY_SETTINGS.EVENTS]?: EventConfig;
  [KEY_SETTINGS.PLUGINS]?: PluginConfig[];
  [KEY_SETTINGS.GLOBAL_SETTINGS]?: GlobalSettingsConfig;
}

/** Specific Configuration Interfaces */
export interface ServerConfig {
  port?: number;
  hostname?: string;
  watch?: boolean;
  https?: boolean;
  proxy?: boolean;
}

export interface LoggerConfig {
  level: 'info' | 'debug';
  prettyPrint: boolean;
}

export interface PathConfig {
  apiPrefix?: string;
  staticFilesPath?: string;
}

export interface RouteConfig {
  method: string;
  path: string;
  handler: Function;
  middlewares?: MiddlewareFn[];
  version?: string;
}

export interface CacheConfig {
  enabled: boolean;
  options?: object;
}

export interface EventConfig {
  enabled: boolean;
  maxListeners?: number;
  bus?: string; // Event bus type, e.g., 'default', 'rabbitmq', 'kafka'
}

export interface PluginConfig {
  name: string;
  version?: string;
  settings?: object;
}

export interface GlobalSettingsConfig {
  timezone?: string;
  locale?: string;
  enableDebug?: boolean;
}

export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

/** Cache Item Interface */
export interface CacheItem {
  createdAt: number;
  watch: boolean;
}
export interface Engine {
  name: string;
  initialize(): void;
  render(template: string, data: Record<string, any>): string;
}
