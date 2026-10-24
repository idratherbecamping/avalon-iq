import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avalon IQ | Lower Costs. Higher Value. Exit-Ready AI Automation",
  description: "Cut your operating costs. Raise your sale price. I replace the manual work eating your margins with AI automation before you go to market.",
  keywords: "exit readiness, sell my business, EBITDA, operating expenses, opex reduction, AI automation, business valuation, exit planning, AI consulting, margin improvement",
  openGraph: {
    title: "Avalon IQ | Cut your operating costs. Raise your sale price.",
    description: "I replace the manual work eating your margins with AI automation before you go to market.",
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
