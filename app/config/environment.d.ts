export default config;

/**
 * Type declarations for
 *    import config from 'my-app/config/environment'
 */
declare const config: {
  environment: string;
  modulePrefix: string;
  podModulePrefix: string;
  authorizeUrl: string;
  namespace: string;
  baseUrl: string;
  clientId: string;
  locationType: string;
  rootURL: string;
  APP: Record<string, unknown>;
};
