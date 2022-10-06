import { useRef, memo } from "react";

import { CustomNodeProps } from "./index";
import { CustomLinkItUrl, ForeignObject, Key, Row } from "./styles";

function ObjectNode({ node, x, y }: CustomNodeProps) {
  const { text, width, height, data } = node;
  const ref = useRef(null);

  if (data.isEmpty) {
    return null;
  }

  return (
    <ForeignObject width={width} height={height} x={0} y={0} ref={ref} isObject>
      {text.map((val: any, idx: any) => (
        <Row data-key={JSON.stringify(val[1])} data-x={x} data-y={y} key={idx}>
          <Key objectKey>{JSON.stringify(val[0]).replaceAll('"', "")}: </Key>
          <CustomLinkItUrl>{JSON.stringify(val[1])}</CustomLinkItUrl>
        </Row>
      ))}
    </ForeignObject>
  );
}

function propsAreEqual(prev: CustomNodeProps, next: CustomNodeProps) {
  return (
    String(prev.node.text) === String(next.node.text) &&
    prev.node.width === next.node.width
  );
}

export default memo(ObjectNode, propsAreEqual);
