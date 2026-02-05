import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";

export const MainContent = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};
