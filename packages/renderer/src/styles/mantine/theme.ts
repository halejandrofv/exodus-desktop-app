import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "blue",

  // Fuentes del sistema - simple y limpio
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontFamilyMonospace:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",

  // Personalización de componentes
  components: {
    AppShell: {
      styles: {
        header: {
          borderBottom:
            "1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5))",
        },
        navbar: {
          borderRight:
            "1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5))",
        },
      },
    },
  },
});
