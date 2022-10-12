import { LinkItUrl } from "react-linkify-it";
import styled from "styled-components";

function getTypeColor(value: string) {
  if (!Number.isNaN(+value)) return "#B5CEA8";
  if (value === "true") return "#CE9178";
  if (value === "false") return "#B5CEA8";
}

function getKeyColor(parent: boolean, objectKey: boolean) {
  if (parent) return "#B5CEA8";
  if (objectKey) return "#CE9178";
  return "#9CDCFE";
}

export const CustomLinkItUrl = styled(LinkItUrl)`
  text-decoration: underline;
  pointer-events: all;
`;

export const Key = styled.span<{
  objectKey?: boolean;
  parent?: boolean;
  value?: string;
}>`
  display: inline;
  flex: 1;
  font-weight: 500;
  color: ${({ objectKey = false, parent = false }) =>
    getKeyColor(parent, objectKey)};
  font-size: ${({ parent }) => parent && "14px"};
  overflow: hidden;
  text-overflow: ellipsis;
  padding: ${({ objectKey }) => objectKey && "10px"};
`;

export const Row = styled.span.attrs<{ "data-key": string }>((props) => ({
  style: {
    color: getTypeColor(props["data-key"])
  }
}))<{ "data-key": string }>`
  display: block;
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 auto;
`;

export const ForeignObject = styled.foreignObject<{
  hasCollapse?: boolean;
  hideCollapse?: boolean;
  isObject?: boolean;
}>`
  text-align: ${({ isObject }) => !isObject && "center"};
  font-size: 12px;
  overflow: hidden;
  color: #eee;
  pointer-events: none;
  padding: ${({ isObject }) => isObject && "10px"};

  * {
    font-family: "Noto Sans Mono", monospace;
  }

  &.searched {
    border: 2px solid #08b;
    border-radius: 2px;
    box-sizing: border-box;
  }

  .highlight {
    /* border: 2px dashed #ff2970; */
    background: rgba(255, 214, 0, 0.3);
  }

  .renderVisible {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
  }
`;

export const TextNodeWrapper = styled.div<{ hasCollapse: boolean }>`
  display: flex;
  justify-content: ${({ hasCollapse }) =>
    hasCollapse ? "space-between" : "center"};
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Expand = styled.button`
  pointer-events: all;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: black;
  background: rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 40px;
  border-left: 1px solid grey;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }
`;
