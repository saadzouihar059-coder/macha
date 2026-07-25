declare namespace JSX {
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
