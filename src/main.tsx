import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createTheme,
  MantineProvider,
  localStorageColorSchemeManager,
} from "@mantine/core";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes.tsx";
import "@mantine/core/styles.css";

const colorSchemeManager = localStorageColorSchemeManager({
  key: "iainquinn-color-scheme",
});

const theme = createTheme({
  fontFamily: '"JetBrains Mono", monospace',
  fontFamilyMonospace: '"JetBrains Mono", monospace',
  headings: {
    fontFamily: '"Space Grotesk", "JetBrains Mono", sans-serif',
  },
  colors: {
    phosphor: [
      "#f0fff0",
      "#d4ffd4",
      "#a8ffa0",
      "#7aff6e",
      "#54ff3a",
      "#39ff14",
      "#2de010",
      "#22b80c",
      "#189008",
      "#0f6805",
    ],
    amber: [
      "#fff8e1",
      "#ffecb3",
      "#ffe082",
      "#ffd54f",
      "#ffca28",
      "#ffb300",
      "#fb8c00",
      "#f57c00",
      "#ef6c00",
      "#e65100",
    ],
  },
  primaryColor: "phosphor",
  black: "#060e1a",
  white: "#f0f4f8",
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
