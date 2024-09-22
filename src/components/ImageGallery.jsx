"use client";
import React, { useState, useEffect } from "react";
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
import { dancingScript } from "@/fonts";
// import { useEffect } from "react/cjs/react.production.min";
import { homePagePhotos, photos } from "@/constants/photos";

function ImageGallery() {
    const [index, setIndex] = useState();
    const [images, setImages] = useState(homePagePhotos);
    const [isAllImages, setIsAllImages] = useState(false);

    useEffect(() => {
        if (isAllImages) {
            setImages(() => photos);
        } else {
            setImages(() => homePagePhotos);
        }
    }, [isAllImages]);

    const handleButton = () => {
        setIsAllImages(() => !isAllImages);
    };

    return (
        <>
            <div
                className="min-h-screen w-full max-w-7xl mx-auto pb-4 my-12 space-y-6"
                id="gallery"
            >
                <div className="p-4 space-y-6">
                    {/* <div className="bg-blue-600 w-36 h-10 rounded-full"></div> */}
                    <h2 className="text-3xl text-left p-2">Gallery</h2>
                    <p className="p-2 italic text-2xl md:text-5xl max-w-5xl text-slate-600 font-extralight">
                        A collection of images from our property.
                    </p>
                </div>

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
                        <div key={index} className="p-6 sm:p-3 lg:p-2">
                            <GalleryImage
                                imgSrc={src}
                                onClickHandler={() => setIndex(index)}
                                alt={alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full grid place-items-center p-2">
                <button
                    onClick={handleButton}
                    className="p-4 bg-sky-500 hover:bg-sky-400 rounded-xl text-white font-bold text-center mx-auto"
                >
                    {isAllImages ? "Show Less" : "View All Images"}
                </button>
            </div>
        </>
    );
}

export default ImageGallery;

function GalleryImage({ imgSrc, onClickHandler, alt }) {
    return (
        // <div >

        <div
            className={`bg-red-200 m-1 mx-auto relative w-full aspect-[4/3] rounded-xl shadow-lg overflow-hidden`}
            onClick={onClickHandler}
        >
            <Image
                src={imgSrc}
                alt={alt}
                fill={true}
                className="hover:scale-110 transition object-cover duration-300 ease-out md:ease-in cursor-pointer"
            />
        </div>
        // </div>
    );
}
