import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default: "Playspire — Competitive esports, elevated", template: "%s | Playspire" }, description: "The premium platform for competitive esports tournaments.", openGraph: { title: "Playspire", description: "Find your next victory." }, twitter: { card: "summary_large_image" } };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
