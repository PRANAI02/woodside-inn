import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://woodside-inn.vercel.app"),
  title: "Woodside Inn — Bengaluru | Gastropub in Indiranagar",
  description:
    "Mumbai's legendary gastropub, now in Indiranagar. Refined comfort food, 14 beers on tap and freezer-door cocktails — an ode to Bengaluru's pub culture.",
  openGraph: {
    title: "Woodside Inn — Bengaluru",
    description:
      "Mumbai's legendary gastropub, now in Indiranagar. Refined comfort food, 14 beers on tap and freezer-door cocktails.",
    type: "website",
    locale: "en_IN",
    images: ["/images/hero-bar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
