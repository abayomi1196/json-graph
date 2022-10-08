import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // repeat colors & bgs here for intellisense benefits
    background: {
      dark: string;
      light: string;
    };

    colors: {
      key: string;
      number: string;
      string: string;
    };
  }
}
