declare module "react" {
  export type DependencyList = readonly any[];
  export type EffectCallback = () => void | (() => void | undefined);
  export type Dispatch<A> = (value: A) => void;
  export type SetStateAction<S> = S | ((prevState: S) => S);
  export function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  export function useEffect(effect: EffectCallback, deps?: DependencyList): void;
  export const StrictMode: any;
  export const Fragment: any;
  export default any;
}

declare module "react-dom/client" {
  export function createRoot(container: Element | null): {
    render(node: any): void;
  };
}

declare module "react/jsx-runtime" {
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
  export function jsxDEV(type: any, props: any, key?: any, isStaticChildren?: boolean): any;
  export const Fragment: any;

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface Element {}
    interface ElementClass {}
    interface ElementAttributesProperty {
      props: {};
    }
    interface IntrinsicAttributes {
      key?: string | number;
    }
  }
}

declare module "react/jsx-dev-runtime" {
  export { jsxDEV, Fragment } from "react/jsx-runtime";
}
