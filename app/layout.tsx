import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishnu Varthan N — Data Science & AI Developer",
  description:
    "Editorial portfolio of Vishnu Varthan N. Specialized in Machine Learning, Generative AI, LLMs, RAG Systems, AI Automation and Agentic Workflows.",
  keywords: [
    "Vishnu Varthan N",
    "Vishnu Varthan",
    "Data Science",
    "AI Developer",
    "Machine Learning",
    "Generative AI",
    "LLM",
    "RAG",
    "Agentic AI",
  ],
  authors: [{ name: "Vishnu Varthan N" }],
  icons: {
    icon: [
      { url: "/iicon.png" },
      { url: "/favicon.ico" },
      { url: "/iicon.png", type: "image/png" },
    ],
    shortcut: "/iicon.png",
    apple: "/iicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body className="font-sans antialiased bg-editorial-bg text-editorial-text selection:bg-editorial-dark selection:text-editorial-bg min-h-screen">
        {children}
      </body>
    </html>
  );
}