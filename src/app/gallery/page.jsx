import React from "react";
import ImageGallery from "@/components/ImageGallery";
import { photos } from "@/constants/photos";

export const metadata = {
    title: "Gallery | Rustic Charm Homestay - Explore Our Cozy Mountain Retreat",
    description:
        "Browse through our gallery of Rustic Charm Homestay. Discover cozy rooms, scenic mountain views, and mouth-watering home-cooked meals. See what awaits you in this peaceful mountain escape.",
};

function page() {
    return (
        <div className="py-12">
            <ImageGallery images={photos} />
        </div>
    );
}

export default page;
