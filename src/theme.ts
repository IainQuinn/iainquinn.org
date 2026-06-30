import { createTheme, type MantineColorsTuple } from "@mantine/core";

// Single neutral ramp — drives the whole monochrome palette.
const mono: MantineColorsTuple = [
  "#f5f5f5",
  "#e8e8e8",
  "#d4d4d4",
  "#a3a3a3",
  "#737373",
  "#525252",
  "#404040",
  "#262626",
  "#171717",
  "#111111",
];

// Soft Apple-ish light greys (dimmed = gray-6, border = gray-4).
const gray: MantineColorsTuple = [
  "#fafafa",
  "#f2f2f2",
  "#ebebeb",
  "#e0e0e0",
  "#d2d2d2",
  "#a1a1a6",
  "#6e6e73",
  "#48484a",
  "#2c2c2e",
  "#1c1c1e",
];

// Inverted greyscale for dark mode (text = dark-0, border = dark-4, body = dark-7).
const dark: MantineColorsTuple = [
  "#f5f5f5",
  "#e0e0e0",
  "#a1a1a6",
  "#6e6e73",
  "#2a2a2a",
  "#1c1c1c",
  "#141414",
  "#0a0a0a",
  "#050505",
  "#000000",
];

export const theme = createTheme({
  fontFamily: '"JetBrains Mono", monospace',
  fontFamilyMonospace: '"JetBrains Mono", monospace',
  headings: {
    fontFamily: '"JetBrains Mono", monospace',
  },
  colors: { mono, gray, dark },
  primaryColor: "mono",
  primaryShade: { light: 9, dark: 0 },
  autoContrast: true,
  white: "#ffffff",
  black: "#111111",
  defaultRadius: "sm",
});
