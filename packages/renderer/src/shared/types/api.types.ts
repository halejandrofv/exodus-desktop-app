export interface ApiResponse<T> {
  success: boolean;
  code: string;
  message: string;
  data?: T;
}

// Respuesta exitosa
export interface ApiSuccessResponse<T> extends ApiResponse<T> {
  success: true;
  data: T;
}

// Respuesta de error
export interface ApiErrorResponse extends ApiResponse<null> {
  success: false;
}
