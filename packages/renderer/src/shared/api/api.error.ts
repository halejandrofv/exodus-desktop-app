// lib/api/exceptions.ts
export class ApiError extends Error {
  public message: string;
  public code: string;
  public status: number;

  constructor(message: string, code: string, status: number) {
    super(message);
    this.message = message;
    this.code = code;
    this.status = status;
    this.name = 'ApiError';
  }
}

// Middleware para errores (usado en el adaptador)
export const errorMiddleware = (error: any): never => {
  if (error.response) {
    throw new ApiError(
      error.response.data.message,
      error.response.data.code,
      error.response.status
    );
  }
  throw new ApiError('Network Error', 'NETWORK_ERROR', 500);
};
