import { ThemeProvider } from "hooks/use-theme";
import { render, RenderResult } from "@testing-library/react";
import React from "react";

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider>{children}</ThemeProvider>);
