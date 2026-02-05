import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos (los datos se consideran "frescos")
      retry: 2, // Reintentos automáticos en caso de error
    },
    mutations: {
      retry: 1,
    },
  },
});
