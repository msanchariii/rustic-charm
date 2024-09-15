import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { roboto } from "@/fonts";
import Header2 from "@/components/Header2";

const inter = Inter({ subsets: ["latin"] });

const raleway = Raleway({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Rustic Charm Homestay - Cozy Mountain Getaway | Affordable Rates",
    description:
        "Discover Rustic Charm Homestay, your cozy mountain retreat offering comfortable rooms, delicious home-cooked meals, and breathtaking views. Enjoy all-inclusive rates at just Rs. 1500 per person. Book now for a serene escape in the heart of nature!",
    keywords:
        "Rustic Charm Homestay, mountain retreat, cozy homestay, affordable homestay, mountain getaway, Rs 1500 per person, home-cooked meals, nature escape, small mountain homestay, charming homestay",
    author: [
        {
            name: "Rustic Charm Homestay",
            url: "https://rustic-charm-homestay.vercel.app",
        },
        {
            name: "Subham Goswami",
            url: "https://rustic-charm-homestay.vercel.app",
        },
        {
            name: "Rustic Charm Homestay",
            url: "https://rustic-charm-homestay.vercel.app",
        },
    ],
    // image: "/images/hero.jpg",
    // url: "https://rustic-charm-homestay.vercel.app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            {/* <head>
                <script defer src="https://cdn.tailwindcss.com"></script>
            </head> */}
            <body className={inter.className}>
                {/* <Header /> */}
                <Header2 />
                {children}
                <Footer />
            </body>
        </html>
    );
}
