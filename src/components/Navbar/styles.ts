import styled from "styled-components";

import { globalTheme } from "styles/theme";

export const Wrapper = styled.nav`
  background: ${globalTheme.background.dark};
  padding: 20px 40px;

  h1 {
    color: ${globalTheme.colors.number};
  }
`;
