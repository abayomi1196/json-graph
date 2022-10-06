import { memo } from "react";

import { CustomLinkItUrl, ForeignObject, Key, TextNodeWrapper } from "./styles";
import { CustomNodeProps } from "./index";

function TextNode({ node, x, y, hasCollapse = false }: CustomNodeProps) {
  const { text, width, height, data } = node;
  return (
    <ForeignObject width={width} height={height} x={0} y={0}>
      <TextNodeWrapper hasCollapse={data.isParent}>
        <Key
          data-x={x}
          data-y={y}
          data-key={JSON.stringify(text)}
          parent={data.isParent}
        >
          <CustomLinkItUrl>
            {JSON.stringify(text).replaceAll('"', "")}
          </CustomLinkItUrl>
        </Key>
      </TextNodeWrapper>
    </ForeignObject>
  );
}

function propsAreEqual(prev: CustomNodeProps, next: CustomNodeProps) {
  return (
    prev.node.text === next.node.text && prev.node.width === next.node.width
  );
}

export default memo(TextNode, propsAreEqual);
