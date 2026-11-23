import type { Metadata, Viewport } from 'next'
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Fleetra chat widget. The site key is public; the domains it may run on are set in Sarthi
// (Widget & SDK -> Allowed websites). Its script and connections are allowed in next.config.ts.
const SARTHI_SITE_KEY = process.env.NEXT_PUBLIC_SARTHI_SITE_KEY || "ws_dollar_c5e1d8";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat", 
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dollartraq.com'),
  // './' resolves against each page's own path -> self-referencing canonical
  alternates: { canonical: './' },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="font-sans antialiased bg-[#FAF9F5] text-black">
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="pt-[72px] flex-1">
            {children}
          </main>

          <Footer />
        </div>
        <Script
          src="https://api.mysarthi.tech/widget/v1.js"
          data-site-key={SARTHI_SITE_KEY}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}