import { NavLink, ScrollArea, Stack } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { IconMicrophone } from "@tabler/icons-react";

type NavigationItem = {
  label: string;
  icon: React.ComponentType<{ size?: string | number }>;
  href: string;
  description: string;
  disabled?: boolean;
};

const navigationItems: NavigationItem[] = [
  {
    label: "Live Transcriber",
    icon: IconMicrophone,
    href: "/live-transcriber",
    description: "Transcripción de audio en tiempo real",
  },
];

export const Sidebar = () => {
  const location = useLocation();

  const renderNavItem = (item: NavigationItem) => {
    const Icon = item.icon;
    const isActive =
      location.pathname === item.href ||
      location.pathname.startsWith(item.href);

    if (item.disabled) {
      return (
        <NavLink
          key={item.href}
          label={item.label}
          description={item.description}
          leftSection={<Icon size={18} />}
          disabled
          variant="light"
        />
      );
    }

    return (
      <NavLink
        key={item.href}
        label={item.label}
        description={item.description}
        leftSection={<Icon size={18} />}
        component={Link}
        to={item.href}
        active={isActive}
        variant="light"
      />
    );
  };

  return (
    <Stack h="100%" p={0}>
      {/* Navigation Section */}
      <ScrollArea flex={1}>
        <Stack gap="xs" p="md">
          {/* Main Navigation */}
          {navigationItems.map(renderNavItem)}
        </Stack>
      </ScrollArea>
    </Stack>
  );
};
