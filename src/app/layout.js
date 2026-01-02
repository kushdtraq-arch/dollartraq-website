import "./globals.css";
import { Fira_Sans, Poppins } from "next/font/google"; 

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
        google: 'CV9wMQFWJc_BCiZcNl_ck63QznvDVtK8I1mwOe7kPSQ',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${fira_sans.variable} ${poppins.variable}`}>
            <body className="font-fira_sans">{children}</body>
        </html>
    );
}
