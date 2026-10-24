import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avalon IQ | Cut Your Operating Costs with AI",
  description: "Freight, logistics, and back-office work, cut with AI. I find where your margin leaks in an operations-heavy business and fix it.",
  keywords: "operating expenses, opex reduction, freight consolidation, logistics costs, AI automation, workflow automation, AI consulting, margin improvement, exit readiness",
  openGraph: {
    title: "Avalon IQ | Cut your operating costs.",
    description: "Freight, logistics, and back-office work, cut with AI. I find where your margin leaks and fix it.",
    type: "website",
  },
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
