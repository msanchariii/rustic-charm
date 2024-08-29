import { Dancing_Script } from "next/font/google";
import Image from "next/image";

const dancing_script = Dancing_Script({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

// import image from "../assets/front";
function Hero() {
    const images = ["/front"];

    return (
        <div
            // style={{ backgroundImage: image }}
            className={`   p-4 bg-blend-overlay bg-black/70 flex items-center justify-center bg-clip-border bg-origin-border bg-center bg-no-repeat bg-cover min-h-screen relative`}
            id="home"
        >
            <div className="w-full h-screen object-contain absolute top-0 left-0 -z-10">
                <Image src="/rustic-charm/front" fill={true} alt="front" />
            </div>
            <div className="space-y-16">
                <h1 className="text-5xl md:text-7xl xl:text-9xl font-bold relative text-white align-middle text-center">
                    <span className={dancing_script.className}>
                        Rustic Charm
                        <br />
                        Homestay
                    </span>
                </h1>
                <p className="text-slate-200 text-center text-base font-semibold w-full max-w-3xl xl:max-w-5xl mx-auto align-middle">
                    {/* <span className={raleway.className}> */}
                    Discover Rustic Charm Homestay, your cozy mountain retreat
                    in <em> Sittong</em> offering comfortable rooms, delicious
                    home-cooked meals, and breathtaking views.
                    {/* </span> */}
                </p>
            </div>
        </div>
    );
}

export default Hero;
