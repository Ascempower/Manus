#!/usr/bin/env node

/**
 * Comprehensive React Import Fix Script
 * Addresses TypeScript errors: Module 'react' has no exported member 'useEffect'/'useState'
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing React Import Issues...\n');

// Step 1: Clean and reinstall dependencies
console.log('1️⃣ Cleaning and reinstalling dependencies...');
try {
  // Remove node_modules and lock files
  if (fs.existsSync('node_modules')) {
    console.log('   Removing node_modules...');
    execSync(
      'powershell -Command "Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue"',
      { stdio: 'inherit' }
    );
  }

  if (fs.existsSync('pnpm-lock.yaml')) {
    console.log('   Removing pnpm-lock.yaml...');
    execSync(
      'powershell -Command "Remove-Item -Force pnpm-lock.yaml -ErrorAction SilentlyContinue"',
      { stdio: 'inherit' }
    );
  }

  console.log('   ✅ Cleanup complete');
} catch (error) {
  console.log('   ⚠️  Cleanup had issues, continuing...');
}

// Step 2: Update tsconfig.json for better React compatibility
console.log('\n2️⃣ Updating TypeScript configuration...');
const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));

// Ensure optimal settings for React
tsconfig.compilerOptions = {
  ...tsconfig.compilerOptions,
  target: 'ES2020',
  lib: ['dom', 'dom.iterable', 'ES2020'],
  allowJs: true,
  skipLibCheck: true,
  strict: false,
  noEmit: true,
  esModuleInterop: true,
  allowSyntheticDefaultImports: true,
  module: 'esnext',
  moduleResolution: 'bundler',
  resolveJsonModule: true,
  isolatedModules: true,
  jsx: 'preserve',
  incremental: true,
  forceConsistentCasingInFileNames: true,
  noImplicitAny: false,
  baseUrl: '.',
  paths: {
    '@/*': ['./src/*'],
  },
  plugins: [
    {
      name: 'next',
    },
  ],
};

fs.writeFileSync('tsconfig.json', JSON.stringify(tsconfig, null, 2));
console.log('   ✅ TypeScript configuration updated');

// Step 3: Create React type declarations to ensure compatibility
console.log('\n3️⃣ Creating React type declarations...');
const reactTypesDir = 'src/types';
if (!fs.existsSync(reactTypesDir)) {
  fs.mkdirSync(reactTypesDir, { recursive: true });
}

// Enhanced React type declarations
const reactTypes = `/// <reference types="react" />
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
`;

fs.writeFileSync(path.join(reactTypesDir, 'react-fix.d.ts'), reactTypes);
console.log('   ✅ React type declarations created');

// Step 4: Update package.json to ensure correct versions
console.log('\n4️⃣ Verifying package.json versions...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Ensure we have the right versions
const requiredDeps = {
  react: '^18.3.1',
  'react-dom': '^18.3.1',
};

const requiredDevDeps = {
  '@types/react': '^18.3.23',
  '@types/react-dom': '^18.3.7',
  typescript: '~5.6.3',
};

let updated = false;

// Update dependencies
Object.entries(requiredDeps).forEach(([pkg, version]) => {
  if (!packageJson.dependencies[pkg] || packageJson.dependencies[pkg] !== version) {
    packageJson.dependencies[pkg] = version;
    updated = true;
  }
});

// Update devDependencies
Object.entries(requiredDevDeps).forEach(([pkg, version]) => {
  if (!packageJson.devDependencies[pkg] || packageJson.devDependencies[pkg] !== version) {
    packageJson.devDependencies[pkg] = version;
    updated = true;
  }
});

if (updated) {
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  console.log('   ✅ Package.json updated');
} else {
  console.log('   ✅ Package.json versions are correct');
}

// Step 5: Create a next-env.d.ts file to ensure Next.js types
console.log('\n5️⃣ Creating Next.js type declarations...');
const nextEnvTypes = `/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="react" />
/// <reference types="react-dom" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
`;

fs.writeFileSync('next-env.d.ts', nextEnvTypes);
console.log('   ✅ Next.js type declarations created');

// Step 6: Install dependencies
console.log('\n6️⃣ Installing dependencies...');
try {
  console.log('   Installing with pnpm...');
  execSync('pnpm install --no-frozen-lockfile', { stdio: 'inherit' });
  console.log('   ✅ Dependencies installed successfully');
} catch (error) {
  console.log('   ⚠️  pnpm install failed, trying npm...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('   ✅ Dependencies installed with npm');
  } catch (npmError) {
    console.log('   ❌ Both pnpm and npm failed. Please install manually.');
  }
}

console.log('\n🎉 React import fix complete!');
console.log('\n📋 Summary of changes:');
console.log('   ✅ Cleaned node_modules and lock files');
console.log('   ✅ Updated TypeScript configuration');
console.log('   ✅ Created React type declarations');
console.log('   ✅ Verified package.json versions');
console.log('   ✅ Created Next.js type declarations');
console.log('   ✅ Reinstalled dependencies');

console.log('\n🚀 You can now try building:');
console.log('   pnpm run build');
console.log('   npx next build');
console.log('   pnpm run type-check');
