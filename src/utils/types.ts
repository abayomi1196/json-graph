export interface NodeType<T = any> {
  id: string;
  disabled?: boolean;
  text?: string;
  height?: number;
  width?: number;
  parent?: string;
  className?: string;
  data?: T;
}

export interface EdgeType<T = any> {
  id: string;
  disabled?: boolean;
  text?: string;
  from?: string;
  to?: string;
  data?: T;
  className?: string;
  parent?: string;
}
