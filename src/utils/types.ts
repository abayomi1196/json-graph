export interface NodeType<T = any> {
  id: string;
  disabled?: boolean;
  text?: any;
  height?: number;
  width?: number;
  parent?: string;
  className?: string;
  data?: T;
}

export interface EdgeType<T = any> {
  id: string;
  disabled?: boolean;
  text?: any;
  from?: string;
  to?: string;
  data?: T;
  className?: string;
  parent?: string;
}
