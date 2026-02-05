import type { User } from '@/shared/types/user.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
  validateSession: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      isAuthenticated: false,

      login: (token, user) => {
        set({ token, user, isAuthenticated: true });
      },

      logout: () => {
        set({ token: null, user: null, isAuthenticated: false });
      },

      validateSession: () => {
        const { token } = get();
        // Aquí podrías agregar validación adicional (ej: expiración del token)
        return !!token;
      },
    }),
    {
      name: 'auth-storage', // nombre para localStorage
    }
  )
);
