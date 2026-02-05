// lib/api/axios-adapter.ts
import type { HttpClient, RequestConfig } from "./api.types";
import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";
import { useAuthStore } from "@store/auth.store";

export class AxiosAdapter implements HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });

    this.instance.interceptors.request.use((config) =>
      this.handleRequest(config)
    );
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => this.handleError(error)
    );
  }

  private handleRequest(
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig {
    const { token } = useAuthStore.getState();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }

  private handleError(error: any) {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }

  async get<T>(url: string, config?: RequestConfig): Promise<T> {
    const response = await this.instance.get<T>(url, config);
    return response.data;
  }

  async post<T>(
    url: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<T> {
    const response = await this.instance.post<T>(url, data, config);
    return response.data;
  }
}
