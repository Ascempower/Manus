/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'react' {
  export function useState<S>(initialState: S | (() => S)): [S, (value: S | ((prevState: S) => S)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T>(initialValue: T): { current: T };
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: any[]): T;
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export function useContext<T>(context: React.Context<T>): T;
  export function useReducer<R extends React.Reducer<any, any>>(
    reducer: R,
    initialState: React.ReducerState<R>,
    initializer?: undefined
  ): [React.ReducerState<R>, React.Dispatch<React.ReducerAction<R>>];
  export function useLayoutEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useImperativeHandle<T, R extends T>(
    ref: React.Ref<T> | undefined,
    init: () => R,
    deps?: any[]
  ): void;
  export function useDebugValue<T>(value: T, format?: (value: T) => any): void;
  export function useDeferredValue<T>(value: T): T;
  export function useId(): string;
  export function useInsertionEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useSyncExternalStore<T>(
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => T,
    getServerSnapshot?: () => T
  ): T;
  export function useTransition(): [boolean, (callback: () => void) => void];
  
  // React namespace
  namespace React {
    export interface Context<T> {
      Provider: React.ComponentType<{ value: T; children?: React.ReactNode }>;
      Consumer: React.ComponentType<{ children: (value: T) => React.ReactNode }>;
    }
    
    export type ReactNode = string | number | boolean | null | undefined | React.ReactElement | React.ReactFragment | React.ReactPortal;
    export type ReactElement = any;
    export type ReactFragment = any;
    export type ReactPortal = any;
    export type ComponentType<P = {}> = React.FunctionComponent<P> | React.ComponentClass<P>;
    export type FunctionComponent<P = {}> = (props: P) => React.ReactElement | null;
    export type ComponentClass<P = {}> = new (props: P) => React.Component<P>;
    export type Ref<T> = React.RefObject<T> | ((instance: T | null) => void) | null;
    export interface RefObject<T> {
      readonly current: T | null;
    }
    export type Reducer<S, A> = (prevState: S, action: A) => S;
    export type ReducerState<R extends React.Reducer<any, any>> = R extends React.Reducer<infer S, any> ? S : never;
    export type ReducerAction<R extends React.Reducer<any, any>> = R extends React.Reducer<any, infer A> ? A : never;
    export type Dispatch<A> = (value: A) => void;
    
    export class Component<P = {}, S = {}> {
      constructor(props: P);
      props: P;
      state: S;
      setState(state: Partial<S> | ((prevState: S, props: P) => Partial<S>), callback?: () => void): void;
      render(): React.ReactNode;
    }
  }
  
  export = React;
  export as namespace React;
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
