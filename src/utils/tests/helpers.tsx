import React from "react";
import { ThemeProvider } from "hooks/use-theme";
import { render, RenderResult } from "@testing-library/react";

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider>{children}</ThemeProvider>);
