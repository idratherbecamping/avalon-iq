import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avalon IQ | Cut Your Operating Costs. Raise Your Sale Price.",
  description: "Planning to sell in the next 1 to 3 years? I cut your operating costs with AI, from freight and logistics to back-office paperwork, so your EBITDA and sale price go up.",
  keywords: "exit readiness, sell my business, EBITDA, operating expenses, opex reduction, business valuation, exit planning, freight consolidation, AI automation, margin improvement",
  openGraph: {
    title: "Avalon IQ | Cut your operating costs. Raise your sale price.",
    description: "Planning to sell? I cut your operating costs with AI before you go to market, so your EBITDA and sale price go up.",
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
