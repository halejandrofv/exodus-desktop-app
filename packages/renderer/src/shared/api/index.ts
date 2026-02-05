import { AxiosAdapter } from "./axios.adapter";
import type { HttpClient } from "./api.types";
import { AuthService } from "@/services/auth.service";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:7045/";

// Exporta una instancia concreta (podría venir de un DI container)
export const httpClient: HttpClient = new AxiosAdapter(baseURL);

export const authService = new AuthService(httpClient);
