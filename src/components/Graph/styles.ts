import styled from "styled-components";

export const GraphWrapper = styled.div`
  background-color: ${({ theme }) => theme.background.light2};

  :active {
    cursor: move;
  }

  .dragging {
  }

  rect {
    fill: #0088bb;
  }
`;
