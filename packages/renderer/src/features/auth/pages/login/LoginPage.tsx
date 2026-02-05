import {
  Grid,
  Flex,
  TextInput,
  PasswordInput,
  Button,
  Group,
  Title,
  Text,
  Alert,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconMail, IconLock, IconBrandGithub } from "@tabler/icons-react";
import { useAuth } from "@/features/auth/hooks/useAuth";

export function LoginPage() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value: string) => {
        if (!value) return "Email es requerido";
        if (!/\S+@\S+\.\S+/.test(value)) return "Email inválido";
        return null;
      },
      password: (value: string) => {
        if (!value) return "Contraseña es requerida";
        if (value.length < 4)
          return "La contraseña debe tener al menos 4 caracteres";
        return null;
      },
    },
  });

  const { handleLogin, isLoading, error } = useAuth({
    onSuccess: () => console.log("Redirigiendo..."),
    onError: () => form.setFieldValue("password", ""),
  });

  const handleSubmit = (values: typeof form.values) => {
    handleLogin(values);
  };

  return (
    <Grid gutter={0} style={{ height: "100vh" }}>
      <Grid.Col span={{ base: 12, md: 12 }}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          h="100%"
          p="xl"
        >
          <IconBrandGithub
            width={80}
            height={80}
            style={{ marginBottom: 40 }}
          />

          <Title order={2} mb="md">
            Bienvenido
          </Title>
          <Text c="dimmed" mb={40}>
            Ingresa tus credenciales
          </Text>

          <form
            onSubmit={form.onSubmit(handleSubmit)}
            style={{ width: "100%", maxWidth: 400 }}
          >
            {error && (
              <Alert variant="light" color="red" mb="md">
                {error}
              </Alert>
            )}

            <TextInput
              label="Email"
              placeholder="tu@email.com"
              leftSection={<IconMail width={18} />}
              required
              {...form.getInputProps("email")}
              mb="md"
            />

            <PasswordInput
              label="Contraseña"
              placeholder="••••••••"
              leftSection={<IconLock width={18} />}
              required
              {...form.getInputProps("password")}
              mb="xl"
            />

            <Group justify="flex-end">
              <Button
                type="submit"
                size="md"
                loading={isLoading}
                disabled={isLoading}
              >
                {isLoading ? "Iniciando..." : "Iniciar sesión"}
              </Button>
            </Group>
          </form>
        </Flex>
      </Grid.Col>
    </Grid>
  );
}
