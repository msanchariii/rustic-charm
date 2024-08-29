import { Hero, About, ImageGallery, Tariff, Contact } from "@/components";
import FAQ from "@/components/FAQ";
import NearbyAttractions from "@/components/NearbyAttractions";
import { homePagePhotos } from "@/constants/photos";
import Link from "next/link";

export default function Home() {
    return (
        <main className="space-y-24">
            {/* hero */}
            <Hero />
            {/* about us */}
            <About />
            {/* image gallery */}
            <div className="py-12 bg-sky-50">
                <ImageGallery images={homePagePhotos} />
                <div className="w-full grid place-items-center">
                    <Link
                        href="/gallery"
                        className="p-4 bg-sky-500 rounded-xl text-white font-bold text-center mx-auto"
                    >
                        View All Images
                    </Link>
                </div>
            </div>
            {/* nearby attractions */}
            <NearbyAttractions />
            {/* tariff */}
            <Tariff />
            <FAQ />
            {/* contact us */}
            <Contact />
        </main>
    );
}
