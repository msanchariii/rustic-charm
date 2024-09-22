"use client";
import { About, ImageGallery, Tariff, Contact } from "@/components";
import FAQ from "@/components/FAQ";
import Hero2 from "@/components/Hero2";
import { homePagePhotos } from "@/constants/photos";
import Link from "next/link";

export default function Home() {
    return (
        <main className="space-y-24">
            {/* hero */}
            {/* <Hero /> */}
            <Hero2 />
            {/* about us */}
            <About />
            {/* image gallery */}
            <div className="py-12 bg-sky-50  ">
                <ImageGallery />
            </div>
            <Tariff />
            <FAQ />
            {/* contact us */}
            <Contact />
        </main>
    );
}
