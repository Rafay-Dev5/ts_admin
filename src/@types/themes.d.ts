import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
      text: {
        main: string;
      };
    };
  }

  interface CustomThemeOptions extends ThemeOptions {
    palette?: {
      primary?: {
        main?: string;
      };
      secondary?: {
        main?: string;
      };
      text?: {
        main?: string;
      };
    };
  }

  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
