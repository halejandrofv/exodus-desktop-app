import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useAuthStore } from "@store/auth.store";
import type { LoginRequest } from "@/shared/types/auth.types";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/features/auth/queries/auth.mutation";

type UseAuthOptions = {
  onSuccess?: () => void;
  onError?: (error: string) => void;
};

export const useAuth = (options?: UseAuthOptions) => {
  const navigate = useNavigate();
  const { login: storeLogin } = useAuthStore();
  const { mutate: loginMutation, isPending, error } = useLoginMutation();

  const handleLogin = (credentials: LoginRequest) => {
    loginMutation(credentials, {
      onSuccess: (response) => {
        console.log(credentials);
        let {access_token, user} = response;
        notifications.show({
          title: "Éxito",
          message: "Inicio de sesión exitoso",
          icon: <IconCheck size={18} />,
          color: "teal",
        });

        storeLogin(access_token, user);

        // Manejar redirección
        if (options?.onSuccess) {
          options.onSuccess();
        } else {
          navigate("/home");
        }
      },
      onError: (error) => {
        const errorMessage = error.message || "Error en la conexión";

        notifications.show({
          title: "Error",
          message: errorMessage,
          icon: <IconX size={18} />,
          color: "red",
        });

        options?.onError?.(errorMessage);
      },
    });
  };

  const logout = () => {
    useAuthStore.getState().logout();
    navigate("/auth/login");
  };

  return {
    handleLogin,
    logout,
    isLoading: isPending,
    error: error?.message || null,
    isAuthenticated: useAuthStore.getState().isAuthenticated,
  };
};
