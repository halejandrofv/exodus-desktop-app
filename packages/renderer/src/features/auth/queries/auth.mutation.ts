import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/services/auth.service";
import { httpClient } from "@/shared/api";
import type { LoginRequest } from "@/shared/types/auth.types";

const authService = new AuthService(httpClient);

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      const result = await authService.login(credentials);
      console.log('🔍 mutationFn retorna:', result);
      console.log('🔍 Tipo:', typeof result);
      console.log('🔍 Keys:', result ? Object.keys(result) : 'null/undefined');
      return result;
    },
  });
};
