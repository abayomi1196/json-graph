import styled from "styled-components";

export const GraphWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: aliceblue;

  :active {
    cursor: move;
  }

  .dragging {
    pointer-events: none;
  }

  rect {
    fill: #08b;
  }
`;
