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
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};