// services/auth/api.ts
import type { HttpClient } from '@/shared/api/api.types';
import type { LoginRequest, LoginResponse } from '@/shared/types/auth.types';

// Inyecta el HttpClient abstracto
export class AuthService {
   private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
  async login(data: LoginRequest): Promise<LoginResponse> {
    return this.http.post('/auth/login', data);
  }
}
