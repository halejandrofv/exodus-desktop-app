import { Navigate, Outlet } from "react-router-dom";
import { Container, Center } from "@mantine/core";
import { useAuthStore } from "@store/auth.store";

export const PublicLayout = () => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return (
    <Center mih="100vh" p="xl">
      <Container size="xs" w="100%">
        <Outlet />
      </Container>
    </Center>
  );
};
