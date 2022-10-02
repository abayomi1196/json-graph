import { EdgeType, NodeType } from "./types";

const calculateSize = (text: string | [string, string][], isParent = false) => {
  let value = "";

  if (typeof text === "string") {
    value = text;
  } else {
    value = text.map(([k, v]) => `${k}: ${v}`).join("\n");
  }

  const lineCount = value.split("\n");
  const lineLengths = lineCount.map((line) => line.length);
  const longestLine = lineLengths.sort((a, b) => b - a)[0];

  const getWidth = () => {
    if (Array.isArray(text) && !text.length) {
      return 40;
    }

    if (true) {
      //if expanded logic here
      return 35 + longestLine * 8 + (isParent ? 60 : 0);
    }
  };

  const getHeight = () => {
    if (lineCount.length * 17.8 < 30) return 40;
    return (lineCount.length + 1) * 18;
  };

  return {
    width: getWidth(),
    height: getHeight()
  };
};

const generateChildren = (object: Object, nextId: () => string) => {
  if (!(object instanceof Object)) {
    object = [object];
  }

  return Object.entries(object)
    .filter(([k, v]) => {
      if (Array.isArray(v) || v instanceof Object) {
        return false;
      }

      return true;
    })
    .flatMap(([key, v]) => {
      const { width, height } = calculateSize(key, true);
      const children = extract(v, nextId);

      return [
        {
          id: nextId(),
          text: key,
          children,
          width,
          height,
          data: {
            isParent: true,
            hasChild: !!children.length
          }
        }
      ];
    });
};

const generateNodeData = (object: Object) => {
  if (object instanceof Object) {
    const entries = Object.entries(object).filter(([k, v]) => {
      if (Array.isArray(v) || v instanceof Object) {
        return false;
      }

      return true;
    });

    return entries;
  }

  return String(object);
};

const extract: any = (
  os: string[] | object[] | null,
  nextId = (
    (id) => () =>
      String(++id)
  )(0)
) => {
  if (!os) {
    return [];
  }

  return [os].flat().map((o) => {
    const text = generateNodeData(o);
    const { width, height } = calculateSize(text, false);

    return {
      id: nextId(),
      text,
      width,
      height,
      children: generateChildren(o, nextId),
      data: {
        isParent: false,
        hasChild: false,
        isEmpty: !text.length
      }
    };
  });
};

const flatten: any = (xs: { id: string; children: never[] }[]) =>
  xs.flatMap(({ children, ...rest }) => [rest, ...flatten(children)]);

const relationships: any = (xs: { id: string; children: never[] }[]) => {
  return xs.flatMap(({ id: from, children = [] }) => [
    ...children.map(({ id: to }) => ({
      id: `e${from}-${to}`,
      from,
      to
    })),
    ...relationships(children)
  ]);
};

const isNode = (element: NodeType | EdgeType) => {
  if ("text" in element) return true;

  return false;
};

export const parser = (jsonStr: string) => {
  try {
    let json = JSON.parse(jsonStr);

    if (!Array.isArray(json)) {
      json = [json];
    }

    const nodes: NodeType[] = [];
    const edges: EdgeType[] = [];

    const mappedElements = extract(json);
    const res = [...flatten(mappedElements), ...relationships(mappedElements)];

    res.forEach((data) => {
      if (isNode(data)) {
        nodes.push(data);
      } else {
        edges.push(data);
      }
    });

    return { nodes, edges };
  } catch (error) {
    console.error(error);
    return {
      nodes: [],
      edges: []
    };
  }
};
