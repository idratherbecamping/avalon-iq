import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Automation for Construction | Avalon IQ - Save 12 Hours* Weekly",
  description: "Custom AI automation solutions for construction companies. Save 12 hours* per week on repetitive tasks. Streamline project management, estimates, and operations with AI.",
  keywords: "construction AI, construction automation, AI for contractors, construction technology, construction software, project management AI, construction estimating software, AI construction tools",
  openGraph: {
    title: "AI Automation for Construction | Avalon IQ",
    description: "Save 12 hours* weekly with custom AI automation for your construction business.",
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
