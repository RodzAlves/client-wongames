import GlobalStyles from "styles/global";
import { ThemeProvider } from "hooks/use-theme";

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  )
];
