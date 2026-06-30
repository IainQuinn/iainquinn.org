import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  MantineProvider,
  localStorageColorSchemeManager,
} from "@mantine/core";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes.tsx";
import { theme } from "./theme";
import "@mantine/core/styles.css";
import "./global.css";

const colorSchemeManager = localStorageColorSchemeManager({
  key: "iainquinn-color-scheme",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider
        theme={theme}
        defaultColorScheme="dark"
        colorSchemeManager={colorSchemeManager}
      >
        <AppRoutes />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
