// Layout.tsx
import { Container, Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export function Layout() {
  return (
    <Container fluid p={0}>
      {/* Header */}
      <Box component="header">
        <Header />
      </Box>

      {/* Main content */}
      <Box component="main">
        <Outlet />
      </Box>

      {/* Footer */}
      <Box component="footer">
        <Footer />
      </Box>
    </Container>
  );
}
