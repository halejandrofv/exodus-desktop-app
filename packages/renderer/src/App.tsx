import { AppRouter } from "@/providers/RouterProvider";
import { MantineProvider } from "@/providers/MantineProvider";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/query.client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <AppRouter />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
