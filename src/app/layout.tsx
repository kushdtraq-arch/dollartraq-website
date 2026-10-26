import type { Metadata, Viewport } from 'next'
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

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
      </body>
    </html>
  );
}