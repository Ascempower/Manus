/// <reference types="react" />
/// <reference types="react-dom" />

// Minimal type augmentation to fix specific issues
declare global {
  namespace React {
    // Ensure these types are available if missing
    interface FormEvent<T = Element> extends SyntheticEvent<T> {
      target: EventTarget & T;
    }
    
    type ElementRef<C extends ElementType> = ComponentRef<C>;
    type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<ComponentProps<T>>;
  }
}

declare module 'react-dom' {
  export function render(element: React.ReactElement, container: Element | null): void;
  export function unmountComponentAtNode(container: Element | null): boolean;
  export function createPortal(children: React.ReactNode, container: Element): React.ReactPortal;
}

// Global JSX namespace
declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
    interface ElementClass extends React.Component<any> {
      render(): React.ReactNode;
    }
    interface ElementAttributesProperty {
      props: {};
    }
    interface ElementChildrenAttribute {
      children: {};
    }
    interface IntrinsicAttributes extends React.Attributes {}
    interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'react-dom' {
  export function render(element: React.ReactElement, container: Element | null): void;
  export function unmountComponentAtNode(container: Element | null): boolean;
  export function createPortal(children: React.ReactNode, container: Element): React.ReactPortal;
}

// Global React types
declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
