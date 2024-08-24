"use client";
import React, { useState } from "react";
import LightboxImage from "./LightboxImage";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Link from "next/link";

function ImageGallery({ images }) {
    const [index, setIndex] = useState();

    return (
        <div className="min-h-screen w-full max-w-7xl mx-auto pb-4 my-12 space-y-12">
            <h2 className="text-4xl font-bold text-center p-4">Gallery</h2>

            <Lightbox
                slides={images}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Captions]}
                render={{ slide: LightboxImage, thumbnails: LightboxImage }}
            />
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-[masonry] gap-4"
                id="grid"
            >
                {images?.map(({ src, alt }, index) => (
                    <GalleryImage
                        key={index}
                        imgSrc={src}
                        onClickHandler={() => setIndex(index)}
                        alt={alt}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;

function GalleryImage({ imgSrc, onClickHandler, alt }) {
    return (
        <div
            className={`bg-red-200 relative w-full aspect-[4/3] rounded-xl shadow-lg overflow-hidden`}
            onClick={onClickHandler}
        >
            <Image
                src={imgSrc}
                alt={alt}
                fill={true}
                className="hover:scale-110 transition object-cover duration-300 ease-out md:ease-in cursor-pointer"
            />
        </div>
    );
}
