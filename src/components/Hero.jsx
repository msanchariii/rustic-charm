import { Sacramento } from "next/font/google";
import { Raleway } from "next/font/google";
import { Cambay } from "next/font/google";

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

function Hero() {
    const images = ["/front"];

    return (
        <div
            className={`p-4 bg-[url("./front")] bg-blend-overlay bg-black/70 flex items-center justify-center bg-clip-border bg-origin-border bg-center bg-no-repeat bg-cover min-h-screen relative`}
        >
            <div className="space-y-8">
                <h1
                    className="text-8xl font-semibold relative  align-middle text-center"
                    style={{
                        // textShadow:
                        // "0 0 5px #ffffff, 0 0 15px #ffffff, 0 0 20px #fffff, 0 0 40px #ffffff, 0 0 60px #ffffff, 0 0 10px #fff, 0 0 98px #fffff",
                        textShadow: "rgba(255,255,255,1) 0px 0px 12px",
                        color: "#fff",
                    }}
                >
                    <span className={sacramento.className}>
                        Rustic Charm
                        <br />
                        Homestay
                    </span>
                </h1>
                <p className="text-white text-center text-lg font-semibold w-full max-w-6xl mx-auto align-middle">
                    <span
                        className={raleway.className}
                        style={{
                            textShadow: "rgba(255,255,255,1) 0px 0px 12px",
                            color: "#fff",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas numquam accusamus ab dolorum corporis iure
                        nostrum non obcaecati eligendi ipsam nihil
                        exercitationem, eveniet expedita vel ratione vitae
                        aliquam dolorem cumque.
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
