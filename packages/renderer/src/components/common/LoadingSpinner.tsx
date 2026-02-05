import { Center, Loader, Stack, Text } from "@mantine/core";

interface LoadingSpinnerProps {
  message?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const LoadingSpinner = ({
  message = "Cargando...",
  size = "md",
}: LoadingSpinnerProps) => {
  return (
    <Center h="100vh">
      <Stack align="center" gap="md">
        <Loader size={size} type="dots" />
        <Text size="sm" c="dimmed">
          {message}
        </Text>
      </Stack>
    </Center>
  );
};
