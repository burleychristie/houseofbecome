import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "House of Become — Fine jewelry for women in transition",
  description:
    "Fine jewelry for women in transition — moments of becoming, not arrival. Jewelry as a marker of internal change.",
  openGraph: {
    title: "House of Become",
    description:
      "Fine jewelry for women in transition — moments of becoming, not arrival.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
