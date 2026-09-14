export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Atkinson Hyperlegible Next"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.14em" }],
        caption: ["0.875rem", { lineHeight: "1.375rem", letterSpacing: "0.01em" }],
        body: ["1rem", { lineHeight: "1.625rem", letterSpacing: "0" }],
        "body-lg": ["1.125rem", { lineHeight: "1.875rem", letterSpacing: "0" }],
        lead: ["1.25rem", { lineHeight: "2rem", letterSpacing: "-0.005em" }],
        "title-sm": ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.01em" }],
        title: ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.015em" }],
        greeting: ["2rem", { lineHeight: "2.5rem", letterSpacing: "-0.015em" }],
        "heading-sm": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "-0.02em" }],
        "heading-md": ["2.5rem", { lineHeight: "3rem", letterSpacing: "-0.025em" }],
        "heading-lg": ["3rem", { lineHeight: "3.5rem", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(2rem, 12.5vw, 3rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-md": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "display-lg": ["4.75rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
      },
      colors: {
        canvas: "#0B1120",
        surface: {
          DEFAULT: "#111A2E",
          raised: "#16213A",
        },
        line: {
          subtle: "rgba(148, 163, 184, 0.14)",
          DEFAULT: "#64748B",
          strong: "#94A3B8",
        },
        content: {
          DEFAULT: "#F8FAFC",
          secondary: "#CBD5E1",
          muted: "#94A3B8",
          inverse: "#0B1120",
        },
        action: {
          DEFAULT: "#38BDF8",
          hover: "#7DD3FC",
          active: "#0EA5E9",
        },
        highlight: {
          DEFAULT: "#FBBF24",
          hover: "#FCD34D",
        },
        feedback: {
          error: "#FCA5A5",
          success: "#86EFAC",
        },
      },
      spacing: {
        nav: "4.5rem",
      },
      maxWidth: {
        content: "72rem",
        measure: "38rem",
      },
      borderRadius: {
        card: "1rem",
        control: "0.75rem",
      },
      boxShadow: {
        card: "inset 0 1px 0 0 rgba(248, 250, 252, 0.05), 0 1px 2px 0 rgba(2, 6, 23, 0.6)",
        "card-hover": "inset 0 1px 0 0 rgba(248, 250, 252, 0.08), 0 16px 40px -16px rgba(56, 189, 248, 0.28)",
        "glow-action": "0 0 0 1px rgba(56, 189, 248, 0.35), 0 8px 24px -10px rgba(56, 189, 248, 0.55)",
        "glow-action-hover": "0 0 0 1px rgba(125, 211, 252, 0.45), 0 10px 32px -10px rgba(125, 211, 252, 0.6)",
        "glow-highlight": "0 0 0 8px rgba(251, 191, 36, 0.06), 0 24px 64px -24px rgba(251, 191, 36, 0.4)",
        "glow-highlight-sm": "0 8px 24px -12px rgba(251, 191, 36, 0.45)",
        menu: "0 24px 48px -24px rgba(2, 6, 23, 0.8)",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(40rem 28rem at 78% 42%, rgba(56, 189, 248, 0.10), rgba(56, 189, 248, 0) 70%), radial-gradient(28rem 20rem at 12% 8%, rgba(251, 191, 36, 0.06), rgba(251, 191, 36, 0) 70%)",
        "hero-grid": "linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)",
        band: "linear-gradient(180deg, rgba(0, 19, 65, 0) 0%, rgba(0, 19, 65, 0.6) 18%, rgba(0, 19, 65, 0.6) 82%, rgba(0, 19, 65, 0) 100%)",
        sheen: "linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0.6) 50%, rgba(56, 189, 248, 0) 100%)",
      },
      backgroundSize: {
        cell: "3rem 3rem",
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      animation: {
        "enter-up": "enter-up 700ms cubic-bezier(0.25, 1, 0.5, 1) 150ms both",
        "caret-blink": "caret-blink 1s step-end 2 forwards",
      },
      keyframes: {
        "enter-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "caret-blink": {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}
