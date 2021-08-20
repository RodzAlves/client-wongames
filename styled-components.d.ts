import { defaultTheme } from "styles/themes";

// Type inference
type Theme = typeof defaultTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}

  export interface CustomTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      mainBg: string;
      white: string;
      black: string;
      lightGray: string;
      gray: string;
      darkGray: string;
    };
  }
}
