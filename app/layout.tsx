/**
 * Root Layout Component
 * 
 * The main layout wrapper for the entire application.
 * Handles font loading, theme provider, and global metadata.
 * 
 * Typography:
 * - Space Grotesk: Headings and display text
 * - Inter: Body text and UI elements
 */

import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/layout";
import "./globals.css";

// Space Grotesk for headings - bold, modern, geometric
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// Inter for body text - clean, readable, versatile
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Truqorun - Modern Web Development Solutions",
  description: "Premium web development services with cutting-edge technology and 24-hour response time. We build modern, scalable applications that drive business growth.",
  keywords: ["web development", "Next.js", "React", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Truqorun Team" }],
  openGraph: {
    title: "Truqorun - Modern Web Development Solutions",
    description: "Premium web development services with cutting-edge technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
