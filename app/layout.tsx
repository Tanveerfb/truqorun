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
import "./globals.scss";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://truqorun.com",
  ),
  title: "Truqorun - Modern Web Development Solutions",
  description:
    "Premium web development services with cutting-edge technology and 24-hour response time. We build modern, scalable applications that drive business growth.",
  keywords: [
    "web development",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Truqorun Team" }],
  icons: {
    icon: [
      { url: "/Truqorun - Favicon.png", sizes: "32x32", type: "image/png" },
      {
        url: "/Truqorun - Transparent Faivcon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/Truqorun - Favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Truqorun - Modern Web Development Solutions",
    description:
      "Premium web development services with cutting-edge technology",
    type: "website",
    images: [
      {
        url: "/Truqorun - Combinatinal Mark.jpg",
        width: 1200,
        height: 630,
        alt: "Truqorun - Modern Web Development",
      },
    ],
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
