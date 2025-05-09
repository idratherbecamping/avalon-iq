import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avalon IQ - Your AI Transformation Partner",
  description: "Avalon IQ helps businesses navigate the AI landscape and implement solutions that drive real business value.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/white_logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/white_logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/white_logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
