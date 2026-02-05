import { useState, useEffect } from "react";
import { useLocalStorage } from "@mantine/hooks";

export type ColorScheme = "light" | "dark" | "auto";

export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const [resolvedColorScheme, setResolvedColorScheme] = useState<
    "light" | "dark"
  >("dark");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateResolvedColorScheme = () => {
      if (colorScheme === "auto") {
        setResolvedColorScheme(mediaQuery.matches ? "dark" : "light");
      } else {
        setResolvedColorScheme(colorScheme);
      }
    };

    updateResolvedColorScheme();

    if (colorScheme === "auto") {
      mediaQuery.addEventListener("change", updateResolvedColorScheme);
      return () =>
        mediaQuery.removeEventListener("change", updateResolvedColorScheme);
    }
  }, [colorScheme]);

  // Actualizar el HTML data attribute
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-mantine-color-scheme",
      resolvedColorScheme
    );
  }, [resolvedColorScheme]);

  const toggleColorScheme = () => {
    const schemes: ColorScheme[] = ["light", "dark", "auto"];
    const currentIndex = schemes.indexOf(colorScheme);
    const nextIndex = (currentIndex + 1) % schemes.length;
    setColorScheme(schemes[nextIndex]);
  };

  const setDark = () => setColorScheme("dark");
  const setLight = () => setColorScheme("light");
  const setAuto = () => setColorScheme("auto");

  return {
    colorScheme,
    resolvedColorScheme,
    toggleColorScheme,
    setColorScheme,
    setDark,
    setLight,
    setAuto,
    isDark: resolvedColorScheme === "dark",
    isLight: resolvedColorScheme === "light",
  };
};
