export const APP_CONFIG = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  ENVIRONMENT: import.meta.env.VITE_ENV,
  AUTH_TOKEN_KEY: import.meta.env.VITE_AUTH_TOKEN_KEY,

  // Configuraciones adicionales
  DEFAULT_TIMEOUT: 15000,
  MAX_UPLOAD_SIZE: '10MB',

  // Funciones útiles
  isDevelopment: () => import.meta.env.VITE_ENV === 'development',
  isProduction: () => import.meta.env.VITE_ENV === 'production',
} as const;
