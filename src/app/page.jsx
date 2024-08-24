import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import Tariff from "@/components/Tariff";
import { homePagePhotos } from "@/constants/photos";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    // const images = getHomePagePhotos();
    return (
        <main className="space-y-24">
            <Hero />
            <div className="py-12 ">
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
            <Tariff />
            <Contact />
        </main>
    );
}
