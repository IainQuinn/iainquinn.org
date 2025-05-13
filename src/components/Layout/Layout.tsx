// Layout.tsx
import { Container, Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export function Layout() {
  return (
    <Container
      fluid
      p={0}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Box component="header" style={{ flex: "0 0 auto" }}>
        <Header />
      </Box>

      {/* Main content */}
      <Box component="main" style={{ flex: "1 1 auto", padding: "1rem" }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Box component="footer" style={{ flex: "0 0 auto" }}>
        <Footer />
      </Box>
    </Container>
  );
}
