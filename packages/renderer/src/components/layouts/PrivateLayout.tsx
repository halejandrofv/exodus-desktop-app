import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";
import { AppShell } from "@mantine/core";
import { Header, Sidebar, MainContent } from "@/components/navigation";
import { useNavigation } from "@/components/navigation/hooks/useNavigation";
import { useEffect } from "react";

export const PrivateLayout = () => {
  const { isAuthenticated } = useAuthStore();
  const { opened, toggle, close, isMobile } = useNavigation();
  const location = useLocation();

  // Close sidebar on mobile when navigating
  useEffect(() => {
    if (isMobile) {
      close();
    }
  }, [location.pathname, isMobile, close]);

  // Close sidebar when clicking outside on desktop
  const handleOutsideClick = () => {
    if (opened && !isMobile) {
      close();
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 280,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding={0}
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar p={0}>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main onClick={handleOutsideClick}>
        <MainContent />
      </AppShell.Main>

    </AppShell>
  );
};
