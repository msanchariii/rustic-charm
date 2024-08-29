const images = [
    {
        src: "/assets/image1.jpg",
        alt: "image1",
        caption: "caption1",
        aspect: "square",
    },
    {
        src: "/assets/image19.jpg",
        alt: "image13",
        caption: "caption13",
        aspect: "square",
    },
    {
        src: "/assets/image20.jpg",
        alt: "image14",
        caption: "caption14",
        aspect: "square",
    },
    {
        src: "/assets/image18.jpg",
        alt: "image14",
        caption: "caption14",
        aspect: "square",
    },
    {
        src: "/assets/image21.jpg",
        alt: "image13",
        caption: "caption13",
        aspect: "square",
    },

    {
        src: "/assets/image4.jpg",
        alt: "image4",
        caption: "caption4",
        aspect: "square",
    },
    {
        src: "/assets/image26.jpg",
        alt: "image7",
        caption: "caption7",
        aspect: "square",
    },
    {
        src: "/assets/image25.jpg",
        alt: "image7",
        caption: "caption7",
        aspect: "square",
    },
    {
        src: "/assets/image27.jpg",
        alt: "image7",
        caption: "caption7",
        aspect: "square",
    },
    {
        src: "/assets/image12.jpg",
        alt: "image12",
        caption: "caption12",
        aspect: "video",
    },
    {
        src: "/assets/image22.jpg",
        alt: "image14",
        caption: "caption14",
        aspect: "square",
    },
    {
        src: "/assets/image6.jpg",
        alt: "image6",
        caption: "caption6",
        aspect: "square",
    },
    {
        src: "/assets/image28.png",
        alt: "image7",
        caption: "caption7",
        aspect: "square",
    },
    {
        src: "/assets/image29.png",
        alt: "image7",
        caption: "caption7",
        aspect: "square",
    },
    {
        src: "/assets/image30.png",
        alt: "image7",
        caption: "caption7",
        aspect: "square",
    },
    // {
    //     src: "/assets/image14.jpg",
    //     alt: "image14",
    //     caption: "caption14",
    //     aspect: "square",
    // },
    {
        src: "/assets/image15.jpg",
        alt: "image13",
        caption: "caption13",
        aspect: "square",
    },
    // {
    //     src: "/assets/image8.jpg",
    //     alt: "image8",
    //     caption: "caption8",
    //     aspect: "square",
    // },
    {
        src: "/assets/image16.jpg",
        alt: "image14",
        caption: "caption14",
        aspect: "square",
    },
    {
        src: "/assets/image17.jpg",
        alt: "image13",
        caption: "caption13",
        aspect: "square",
    },
    {
        src: "/assets/image23.jpg",
        alt: "image13",
        caption: "caption13",
        aspect: "square",
    },
    {
        src: "/assets/image9.jpg",
        alt: "image9",
        caption: "caption9",
        aspect: "square",
    },
    {
        src: "/assets/image3.jpg",
        alt: "image3",
        caption: "caption3",
    },
    // {
    //     src: "/assets/image10.jpg",
    //     alt: "image10",
    //     caption: "caption10",
    //     aspect: "video",
    // },
    {
        src: "/assets/image11.jpg",
        alt: "image11",
        caption: "caption11",
        aspect: "square",
    },
    {
        src: "/assets/image24.jpg",
        alt: "image14",
        caption: "caption14",
        aspect: "square",
    },
    {
        src: "/assets/image7.jpg",
        alt: "image7",
        caption: "caption7",
        aspect: "square",
    },
];
// photos => map every image to a new object with appending "/rustic-charm" to the src
const photos = images.map((image) => ({
    ...image,
    src: `/rustic-charm${image.src}`,
}));
const homePagePhotos = photos.slice(0, 6);
export { photos, homePagePhotos };
