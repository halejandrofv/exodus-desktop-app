import {
  Group,
  Burger,
  ActionIcon,
  Menu,
  Avatar,
  useMantineColorScheme,
  Box,
} from "@mantine/core";
import {
  IconLogout,
  IconUser,
  IconChevronDown,
  IconLayoutSidebarLeftCollapse,
  IconSun,
  IconMoon,
  IconLanguage,
} from "@tabler/icons-react";
import { useAuthStore } from "@store/auth.store";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export const Header = ({ opened, toggle }: HeaderProps) => {
  const { logout } = useAuthStore();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group h="100%" px="md" justify="space-between">
      <Group>
        {/* Burger para móvil */}
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          aria-label="Toggle navigation"
        />

        {/* Botón de toggle para desktop */}
        <ActionIcon
          variant="subtle"
          color={opened ? "blue" : "gray"}
          size="lg"
          onClick={toggle}
          visibleFrom="sm"
          aria-label="Toggle sidebar"
          style={{
            transform: opened ? "rotate(0deg)" : "rotate(180deg)",
            transition: "all 0.3s ease",
          }}
        >
          <IconLayoutSidebarLeftCollapse size={18} />
        </ActionIcon>
      </Group>

      <Group gap="sm">
        {/* Botón de Idioma/Traducción */}
        <ActionIcon
          variant="subtle"
          color="gray"
          size="lg"
          aria-label="Abrir traductor"
          title="Traductor AI"
        >
          <IconLanguage size={18} />
        </ActionIcon>

        {/* Botón de Dark Mode */}
        <ActionIcon
          variant="subtle"
          color="gray"
          size="lg"
          onClick={() => toggleColorScheme()}
          aria-label="Toggle color scheme"
          title={`Cambiar a modo ${
            colorScheme === "dark" ? "claro" : "oscuro"
          }`}
        >
          {colorScheme === "dark" ? (
            <IconSun size={18} />
          ) : (
            <IconMoon size={18} />
          )}
        </ActionIcon>

        {/* User Menu */}
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Box
              component="button"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "2px",
                padding: "8px",
                borderRadius: "var(--mantine-radius-sm)",
              }}
              aria-label="User menu"
            >
              <Avatar size={20} color="blue">
                <IconUser size={12} />
              </Avatar>
              <IconChevronDown
                size={14}
                stroke={1.5}
                style={{ color: "var(--mantine-color-text)" }}
              />
            </Box>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Mi Cuenta</Menu.Label>

            <Menu.Item leftSection={<IconUser />}>Perfil</Menu.Item>

            <Menu.Divider />

            <Menu.Item
              color="red"
              leftSection={<IconLogout />}
              onClick={logout}
            >
              Cerrar Sesión
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  );
};
