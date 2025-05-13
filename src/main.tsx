import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes.tsx";
import "@mantine/core/styles.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <AppRoutes />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
