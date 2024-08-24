import React from "react";
import ImageGallery from "@/components/ImageGallery";
import { photos } from "@/constants/photos";

function page() {
    return (
        <div className="py-12">
            <ImageGallery images={photos} />
        </div>
    );
}

export default page;
