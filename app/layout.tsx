import type React from "react";
import type { Metadata } from "next";
import { Roboto as Obodo } from "next/font/google";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const obodo = Obodo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-obodo",
});

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TRYB - Creative Design & Branding Agency",
  description:
    "Transform your ideas into iconic visuals. TRYB is a creative agency specializing in brand identity, graphic design, and photography.",
  keywords:
    "graphic design, branding, creative agency, portfolio, design services",
  authors: [{ name: "Samuel Oyetunde" }],
  openGraph: {
    title: "TRYB - Creative Design & Branding Agency",
    description:
      "Transform your ideas into iconic visuals through bold design and creative storytelling.",
    type: "website",
    url: "https://res.cloudinary.com/drrkn43xk/image/upload/v1761060613/hero_lzu9mj.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#025356" />
      </head>
      <body className={`${geist.className} ${obodo.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
