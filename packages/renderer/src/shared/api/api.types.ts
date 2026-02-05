export interface HttpClient {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data: unknown): Promise<T>;
  // ... put, delete, etc.
}

export type RequestConfig = {
  headers?: Record<string, string>;
};
