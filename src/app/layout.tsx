import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Custom AI Automation Solutions | Avalon IQ - Save 20+ Hours* Weekly",
  description: "Custom AI automation solutions for businesses. Save 20+ hours* per week on repetitive tasks. We come to you, learn your processes, and build bespoke AI solutions.",
  keywords: "custom AI solutions, business automation, AI consulting, workflow automation, process automation, AI development, bespoke AI, AI integration, business efficiency, AI transformation",
  openGraph: {
    title: "Custom AI Automation Solutions | Avalon IQ",
    description: "Save 20+ hours* weekly with custom AI automation tailored to your business.",
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
