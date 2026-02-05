import React, { type ReactNode } from "react";
import {
  MantineProvider as BaseMantineProvider,
  ColorSchemeScript,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "../styles/mantine/theme";

interface MantineProviderProps {
  children: ReactNode;
}

export const MantineProvider: React.FC<MantineProviderProps> = ({
  children,
}) => {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <BaseMantineProvider theme={theme} defaultColorScheme="auto">
        <Notifications position="top-right" limit={5} />
        {children}
      </BaseMantineProvider>
    </>
  );
};
