import { useCallback, useState, useContext } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Canvas, Edge, ElkRoot } from "reaflow";

import { parser } from "utils/jsonParser";
import { GraphWrapper } from "./styles";
import CustomNode from "components/CustomNode";
import { JSONContext } from "context/JSONContext";

function Graph() {
  const { json } = useContext(JSONContext);

  const { nodes, edges } = parser(json);

  const [minScale, setMinScale] = useState(0.6);
  const [size, setSize] = useState({
    width: 1,
    height: 1
  });

  const onLayoutChange = useCallback(
    (layout: ElkRoot) => {
      if (layout.width && layout.height) {
        const areaSize = layout.width * layout.height;
        const changeRatio = Math.abs(
          (areaSize * 100) / (size.width * size.height) - 100
        );

        const MIN_SCALE = Math.round((450_000 / areaSize) * 100) / 100;
        const scale = MIN_SCALE > 2 ? 1 : MIN_SCALE <= 0 ? 0.1 : MIN_SCALE;

        setMinScale(scale);
        setSize({ width: layout.width + 400, height: layout.height + 400 });

        requestAnimationFrame(() => {
          setTimeout(() => {
            setTimeout(() => changeRatio > 100, 0);
          }, 0);
        });
      }
    },
    [size.height, size.width]
  );

  return (
    <GraphWrapper>
      <TransformWrapper
        maxScale={2.5}
        minScale={minScale}
        initialScale={1}
        wheel={{ step: 0.5 }}
        zoomAnimation={{ animationType: "linear" }}
        doubleClick={{ disabled: true }}
        onPanning={(ref) =>
          ref.instance.wrapperComponent?.classList.add("dragging")
        }
        onPanningStop={(ref) =>
          ref.instance.wrapperComponent?.classList.remove("dragging")
        }
      >
        <TransformComponent
          wrapperStyle={{
            width: "100%",
            height: "100%",
            overflow: "scroll",
            display: "block"
          }}
        >
          <Canvas
            className='jsongraph-canvas'
            nodes={nodes}
            edges={edges}
            maxWidth={size.width}
            maxHeight={size.height}
            direction={"RIGHT"}
            key={"RIGHT"}
            onLayoutChange={onLayoutChange}
            zoomable={false}
            animated={false}
            readonly={true}
            dragEdge={null}
            dragNode={null}
            fit={true}
            edge={(props) => (
              <Edge {...props} containerClassName={`edge-${props.id}`} />
            )}
            node={(props) => <CustomNode {...props} />}
          />
        </TransformComponent>
      </TransformWrapper>
    </GraphWrapper>
  );
}

export default Graph;
