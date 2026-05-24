import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Les Escapades de Bertrand",
  description: "Voyages d’exception et expériences éditoriales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${manrope.variable} antialiased`}
      >
        {children}

        <Footer />

      </body>
    </html>
  );
}