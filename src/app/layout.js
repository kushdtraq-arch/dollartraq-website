import "./globals.css";
import { Fira_Sans, Poppins } from "next/font/google"; 

import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

const fira_sans = Fira_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-fira_sans",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata = {
    title: "Dollar Traq",
    description: "Dollar Traq",
    icons: {
		icon: '/dollar-traq-logo-design.png', 
	},
    verification: {
        google: 'sWrFDQCHdnyMdxQzDXxw2lRNQZoIGqYGYSEdXNc4s14',
    },

    openGraph: {
        title: "Real-Time Freight Visibility & Logistics Solutions | DollarTraq",
        description: "Live shipment tracking and logistics coordination for shippers, 3PLs, brokers and carriers across the USA.",
        url: "https://www.dollartraq.com/",
        type: "website",
        images: [
            {
                url: "https://www.dollartraq.com/dollar-traq-social.jpg",
                width: 1200,
                height: 630,
                alt: "DollarTraq Logistics Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Real-Time Freight Visibility & Logistics Solutions | DollarTraq",
        description: "Live shipment tracking and logistics coordination for shippers, 3PLs, brokers and carriers across the USA.",
        images: ["https://www.dollartraq.com/dollar-traq-social.jpg"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TransportationService",
    "name": "DollarTraq",
    "url": "https://www.dollartraq.com",
    "logo": "https://www.dollartraq.com/logo.png",
    "image": "https://www.dollartraq.com/images/og-image.jpg",
    "description": "Asset-based freight and 3PL logistics company providing real-time shipment visibility across the United States.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "900 Paramount Pkwy Suite D",
        "addressLocality": "Batavia",
        "addressRegion": "IL",
        "postalCode": "60510",
        "addressCountry": "US"
    },
    "areaServed": {
        "@type": "Country",
        "name": "United States"
    },
    "telephone": "+1 3313286900",
    "email": "info@dollartraq.com",
    "foundingDate": "2006",
    "sameAs": []
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${fira_sans.variable} ${poppins.variable}`}>
            <body className="font-fira_sans">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}

                <Script src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"  strategy="afterInteractive" />
            </body>

            <GoogleAnalytics gaId="G-KKVV9TZ27X" />
        </html>
    );
}
