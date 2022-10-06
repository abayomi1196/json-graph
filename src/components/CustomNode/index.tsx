import { Fragment } from "react";
import { Node, NodeData, NodeProps } from "reaflow";

import { NodeType } from "utils/types";
import ObjectNode from "./ObjectNode";
import TextNode from "./TextNode";

export interface CustomNodeProps {
  node: NodeType;
  x: number;
  y: number;
  hasCollapse?: boolean;
}

const rootProps = {
  width: 40,
  height: 40,
  rx: 50,
  ry: 50
};

function CustomNode(nodeProps: NodeProps) {
  const { text, data } = nodeProps.properties;

  return (
    <Node {...nodeProps} {...(data.isEmpty && rootProps)} label={<Fragment />}>
      {({ node, x, y }) => {
        if (Array.isArray(text)) {
          return <ObjectNode node={node as NodeData} x={x} y={y} />;
        }

        return (
          <TextNode
            node={node as NodeData}
            hasCollapse={data.hasChild}
            x={x}
            y={y}
          />
        );
      }}
    </Node>
  );
}

export default CustomNode;
