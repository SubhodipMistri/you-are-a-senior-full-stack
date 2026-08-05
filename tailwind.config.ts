import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./features/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#070B14", surface: "#111827", electric: "#2563EB", cyan: "#00E5FF" }, boxShadow: { glow: "0 0 32px rgba(0,229,255,.18)" }, fontFamily: { sans: ["var(--font-inter)", "sans-serif"] } } }, plugins: [] };
export default config;
