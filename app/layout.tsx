import React from "react"
import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paradiso Restaurante em Belo Horizonte | Gastronomia e Experiência",
  description:
    "Restaurante em Belo Horizonte com gastronomia sofisticada, ambiente acolhedor e ideal para eventos, almoços e experiências únicas. Reserve agora.",
  keywords: [
    "restaurante em Belo Horizonte",
    "restaurante sofisticado BH",
    "restaurante para eventos em BH",
    "gastronomia em Belo Horizonte",
    "restaurante com ambiente agradável",
    "restaurante para casamentos BH",
    "restaurante para almoços especiais",
    "experiência gastronômica BH",
  ],
  openGraph: {
    title: "Paradiso Restaurante | Gastronomia, Natureza e Experiência",
    description:
      "Descubra o Paradiso, um dos restaurantes mais acolhedores de Belo Horizonte. Gastronomia sofisticada, ambiente elegante e experiências memoráveis.",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: "#c2703a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          href="/images/hero.jpeg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${cinzel.variable} ${cormorantGaramond.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
