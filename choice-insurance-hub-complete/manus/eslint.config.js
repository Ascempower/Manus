import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default tseslint.config(
  // Base JavaScript recommended rules
  js.configs.recommended,
  
  // TypeScript recommended rules (not the strict type-checked ones initially)
  ...tseslint.configs.recommended,
  
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    
    // Set the react version
    settings: { 
      react: { version: '18.3' } 
    },
    
    plugins: {
      // Add the react plugin
      react,
      'react-hooks': reactHooks,
    },
    
    rules: {
      // Enable React recommended rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      
      // Enable React Hooks rules
      ...reactHooks.configs.recommended.rules,
      
      // Custom rules from your original config
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'react/no-unescaped-entities': 'off',
      
      // TypeScript specific rules (less strict initially)
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'off', // Requires strictNullChecks
      '@typescript-eslint/prefer-optional-chain': 'warn',
      
      // Disable some strict rules for now
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
  
  // Configuration for JavaScript files (disable type-checking rules)
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    ...tseslint.configs.disableTypeChecked,
    languageOptions: {
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        document: 'readonly',
        window: 'readonly',
        VGSCollect: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      'no-undef': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }],
    },
  },
  
  // Configuration for config files
  {
    files: ['*.config.js', '*.config.mjs', '*.config.cjs', 'scripts/**/*.js'],
    languageOptions: {
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
  
  // Configuration for Next.js specific files
  {
    files: ['src/app/**/*.{ts,tsx}', 'src/pages/**/*.{ts,tsx}'],
    rules: {
      // Allow console in server components and API routes
      'no-console': 'off',
    },
  },
  
  // Configuration for TypeScript declaration files
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-indexed-object-style': 'off',
    },
  }
)