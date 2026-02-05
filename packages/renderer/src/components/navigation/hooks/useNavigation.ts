import { useEffect } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export const useNavigation = () => {
  const [opened, { toggle, close, open }] = useDisclosure(true); // Empezar abierto por defecto
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Auto-manage sidebar state based on screen size
  useEffect(() => {
    if (isMobile) {
      // En móvil, cerrar automáticamente
      close();
    }
    // En desktop, mantenemos el estado que el usuario eligió
  }, [isMobile, close]);

  return {
    opened,
    toggle,
    close,
    open,
    isMobile,
    isTablet,
    isDesktop,
  };
};
