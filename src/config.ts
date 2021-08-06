/**
 * config.ts
 * Config file for constructing host url
 */

// Defaults to `http` protocol if no environment variable is provided
const PROTOCOL = 'https';

// Defaults to `http` protocol if no environment variable is provided
const DOMAIN = 'api.exchangerate.host';

export const HOST = `${PROTOCOL}://${DOMAIN}`;
