/** @type {import("tailwindcss").Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // Will be #FFFFFF (White)
        foreground: "hsl(var(--foreground))", // Will be #000000 (Black)
        primary: {
          DEFAULT: "hsl(var(--primary))", // Will be #42615A (Deep Forest Green)
          foreground: "hsl(var(--primary-foreground))", // Will be #FFFFFF (White)
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Will be #A7C9CA (Teal Blue)
          foreground: "hsl(var(--secondary-foreground))", // Will be #000000 (Black)
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Will be #DD8B66 (Warm Beige/Coral)
          foreground: "hsl(var(--accent-foreground))", // Will be #000000 (Black)
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // New Brand Colors from user
        brand: {
          white: "#FFFFFF",
          "teal-blue": "#A7C9CA",
          "teal-blue-dark": "#8BB5B7",
          "deep-forest-green": "#42615A",
          "warm-beige-coral": "#DD8B66",
          "warm-beige-coral-dark": "#C77A52",
          black: "#000000",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as default sans-serif
        poppins: ["Poppins", "sans-serif"], // Specific Poppins utility
      },
      keyframes: {
        "accordion-down": {
          from: {
            "block-size": "0",
          },
          to: {
            "block-size": "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            "block-size": "var(--radix-accordion-content-height)",
          },
          to: {
            "block-size": "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // CSS Logical Properties Extensions
      inlineSize: {
        'auto': 'auto',
        'full': '100%',
        'screen': '100vw',
        'min': 'min-content',
        'max': 'max-content',
        'fit': 'fit-content',
        'prose': '65ch',
      },
      blockSize: {
        'auto': 'auto',
        'full': '100%',
        'screen': '100vh',
        'min': 'min-content',
        'max': 'max-content',
        'fit': 'fit-content',
      },
      minInlineSize: {
        '0': '0',
        'full': '100%',
        'min': 'min-content',
        'max': 'max-content',
        'fit': 'fit-content',
      },
      minBlockSize: {
        '0': '0',
        'full': '100%',
        'screen': '100vh',
        'min': 'min-content',
        'max': 'max-content',
        'fit': 'fit-content',
      },
      maxInlineSize: {
        'none': 'none',
        'full': '100%',
        'screen': '100vw',
        'min': 'min-content',
        'max': 'max-content',
        'fit': 'fit-content',
        'prose': '65ch',
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      maxBlockSize: {
        'none': 'none',
        'full': '100%',
        'screen': '100vh',
        'min': 'min-content',
        'max': 'max-content',
        'fit': 'fit-content',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const logicalUtilities = {
        // Inline size utilities
        '.is-auto': { 'inline-size': 'auto' },
        '.is-full': { 'inline-size': '100%' },
        '.is-screen': { 'inline-size': '100vw' },
        '.is-min': { 'inline-size': 'min-content' },
        '.is-max': { 'inline-size': 'max-content' },
        '.is-fit': { 'inline-size': 'fit-content' },
        
        // Block size utilities
        '.bs-auto': { 'block-size': 'auto' },
        '.bs-full': { 'block-size': '100%' },
        '.bs-screen': { 'block-size': '100vh' },
        '.bs-min': { 'block-size': 'min-content' },
        '.bs-max': { 'block-size': 'max-content' },
        '.bs-fit': { 'block-size': 'fit-content' },
        
        // Min inline size utilities
        '.min-is-0': { 'min-inline-size': '0' },
        '.min-is-full': { 'min-inline-size': '100%' },
        '.min-is-min': { 'min-inline-size': 'min-content' },
        '.min-is-max': { 'min-inline-size': 'max-content' },
        '.min-is-fit': { 'min-inline-size': 'fit-content' },
        
        // Min block size utilities
        '.min-bs-0': { 'min-block-size': '0' },
        '.min-bs-full': { 'min-block-size': '100%' },
        '.min-bs-screen': { 'min-block-size': '100vh' },
        '.min-bs-min': { 'min-block-size': 'min-content' },
        '.min-bs-max': { 'min-block-size': 'max-content' },
        '.min-bs-fit': { 'min-block-size': 'fit-content' },
        
        // Max inline size utilities
        '.max-is-none': { 'max-inline-size': 'none' },
        '.max-is-full': { 'max-inline-size': '100%' },
        '.max-is-screen': { 'max-inline-size': '100vw' },
        '.max-is-prose': { 'max-inline-size': '65ch' },
        '.max-is-xs': { 'max-inline-size': '20rem' },
        '.max-is-sm': { 'max-inline-size': '24rem' },
        '.max-is-md': { 'max-inline-size': '28rem' },
        '.max-is-lg': { 'max-inline-size': '32rem' },
        '.max-is-xl': { 'max-inline-size': '36rem' },
        '.max-is-2xl': { 'max-inline-size': '42rem' },
        '.max-is-3xl': { 'max-inline-size': '48rem' },
        '.max-is-4xl': { 'max-inline-size': '56rem' },
        '.max-is-5xl': { 'max-inline-size': '64rem' },
        '.max-is-6xl': { 'max-inline-size': '72rem' },
        '.max-is-7xl': { 'max-inline-size': '80rem' },
        
        // Max block size utilities
        '.max-bs-none': { 'max-block-size': 'none' },
        '.max-bs-full': { 'max-block-size': '100%' },
        '.max-bs-screen': { 'max-block-size': '100vh' },
        
        // Margin logical utilities
        '.mi-auto': { 'margin-inline': 'auto' },
        '.mb-auto': { 'margin-block': 'auto' },
        '.mis-auto': { 'margin-inline-start': 'auto' },
        '.mie-auto': { 'margin-inline-end': 'auto' },
        '.mbs-auto': { 'margin-block-start': 'auto' },
        '.mbe-auto': { 'margin-block-end': 'auto' },
        
        // Padding logical utilities
        '.pi-0': { 'padding-inline': '0' },
        '.pb-0': { 'padding-block': '0' },
        '.pi-1': { 'padding-inline': '0.25rem' },
        '.pb-1': { 'padding-block': '0.25rem' },
        '.pi-2': { 'padding-inline': '0.5rem' },
        '.pb-2': { 'padding-block': '0.5rem' },
        '.pi-3': { 'padding-inline': '0.75rem' },
        '.pb-3': { 'padding-block': '0.75rem' },
        '.pi-4': { 'padding-inline': '1rem' },
        '.pb-4': { 'padding-block': '1rem' },
        '.pi-6': { 'padding-inline': '1.5rem' },
        '.pb-6': { 'padding-block': '1.5rem' },
        '.pi-8': { 'padding-inline': '2rem' },
        '.pb-8': { 'padding-block': '2rem' },
        
        // Border logical utilities
        '.border-is': { 'border-inline-start': '1px solid' },
        '.border-ie': { 'border-inline-end': '1px solid' },
        '.border-bs': { 'border-block-start': '1px solid' },
        '.border-be': { 'border-block-end': '1px solid' },
        
        // Position logical utilities
        '.inset-i-0': { 'inset-inline': '0' },
        '.inset-b-0': { 'inset-block': '0' },
        '.start-0': { 'inset-inline-start': '0' },
        '.end-0': { 'inset-inline-end': '0' },
        '.top-logical-0': { 'inset-block-start': '0' },
        '.bottom-logical-0': { 'inset-block-end': '0' },
        
        // Text alignment logical utilities
        '.text-start': { 'text-align': 'start' },
        '.text-end': { 'text-align': 'end' },
      };
      
      addUtilities(logicalUtilities);
    }
  ],
};