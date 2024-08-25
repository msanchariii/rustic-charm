import { Sacramento } from "next/font/google";
import { Raleway } from "next/font/google";
import { Cambay } from "next/font/google";
import Image from "next/image";

const sacramento = Sacramento({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

const raleway = Raleway({
    subsets: ["latin"],
    display: "swap",
});

const cambay = Cambay({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});
// import image from "../assets/front";
function Hero() {
    const images = ["/front"];

    return (
        <div
            // style={{ backgroundImage: image }}
            className={`p-4 bg-blend-overlay bg-black/70 flex items-center justify-center bg-clip-border bg-origin-border bg-center bg-no-repeat bg-cover min-h-screen relative`}
        >
            <div className="w-full h-screen object-contain absolute top-0 left-0 -z-10">
                <Image src="/rustic-charm/front" fill={true} alt="front" />
            </div>
            <div className="space-y-8">
                <h1
                    className="text-8xl font-semibold relative  align-middle text-center"
                    style={{
                        // textShadow:
                        // "0 0 5px #ffffff, 0 0 15px #ffffff, 0 0 20px #fffff, 0 0 40px #ffffff, 0 0 60px #ffffff, 0 0 10px #fff, 0 0 98px #fffff",
                        // textShadow: "rgba(255,255,255,1) 0px 0px 12px",
                        color: "#fff",
                    }}
                >
                    Rustic Charm
                    <br />
                    Homestay
                </h1>
                <p className="text-white text-center text-lg font-semibold w-full max-w-6xl mx-auto align-middle">
                    <span
                        className={raleway.className}
                        style={{
                            // textShadow: "rgba(255,255,255,1) 0px 0px 12px",
                            color: "#fff",
                        }}
                    >
                        Discover Rustic Charm Homestay, your cozy mountain
                        retreat in <em>Sitang</em> offering comfortable rooms,
                        delicious home-cooked meals, and breathtaking views.
                        Enjoy all-inclusive rates <em> at just Rs. 1500 </em>per
                        person. Book now for a serene escape in the heart of
                        nature!
                    </span>
                </p>
                {/* <div className="flex justify-center gap-x-12">
                    <button className="py-3 px-4 bg-sky-600 hover:bg-sky-800 outline outline-sky-600 text-white rounded-full font-extrabold">
                        View Gallery
                    </button>
                    <button className="py-3 px-4 outline outline-white text-white rounded-full font-extrabold hover:bg-white hover:text-black">
                        Contact
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default Hero;
