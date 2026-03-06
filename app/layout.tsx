import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { FloatingCart } from "./_components/floating-cart";

const montserrat = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brasil do Hexa | Camisa Oficial da Seleção 2026",
  description: "Garanta sua camisa oficial da Seleção Brasileira para a Copa 2026. Edição limitada com tecnologia Dry-Fit Premium, escudo bordado e caimento perfeito.",
};

import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_CLIENT_ID || ""} gtmScriptUrl={process.env.GOOGLE_TAG_MANAGER_SERVER_URL || ""} />

        {children}
        <FloatingCart />
        <Toaster />
      </body>
    </html>
  );
}
