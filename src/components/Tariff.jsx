import { Sacramento } from "next/font/google";
import Image from "next/image";
const sacramento = Sacramento({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

function Tariff() {
    return (
        <div className="w-full min-h-screen bg-sky-50 py-6">
            <h1 className="text-center font-bold text-4xl my-4">Tariff</h1>
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-6 space-y-4  max-w-xl mx-auto">
                    {/* fare */}
                    <div className="w-full aspect-video bg-fuchsia-200 relative rounded-xl overflow-hidden">
                        <Image
                            fill={true}
                            src={"/rustic-charm/assets/image12.jpg"}
                            alt="front image"
                        />
                    </div>
                    <p className="text-5xl text-slate-900">
                        <span
                            className={`${sacramento.className}`}
                            // style={{
                            //     textShadow: "#0ea5e9 0px 0px 4px",
                            //     // color: "#5747cc",
                            //     color: "#0ea5e9",
                            // }}
                        >
                            Small Mountain Homestay
                        </span>
                    </p>
                    <p className="font-bold text-7xl text-slate-700 stroke-2 stroke-sky-300">
                        Rs. 1500
                    </p>
                    <p className="font-bold font-mono">per person, per head</p>
                    <div>{/* ta */}</div>
                    {/* breakfast, lunch, dinner */}
                    <p className="text-2xl font-mono font-semibold">
                        breakfast <span className="font-semibold">|</span> lunch{" "}
                        <span className="font-semibold">|</span> dinner
                    </p>
                    <p>Tea, Coffee</p>
                    {/* tea, coffee */}
                    {/* contact */}
                </div>
                <div className="w-full md:w-1/2 p-6 space-y-4">
                    <div className="w-full h-full max-w-md mx-auto flex flex-col justify-between">
                        <div className=" w-full rounded-lg">
                            <div className="relative w-full aspect-video">
                                <Image
                                    fill={true}
                                    src={"/rustic-charm/front"}
                                    alt="front image"
                                />
                            </div>
                            <div>
                                <p className="font-bold font-mono text-5xl my-2">
                                    <span className={sacramento.className}>
                                        Cozy Rooms
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-4">
                                <div className="relative w-1/2 aspect-[4/3] bg-purple-300 rounded-lg overflow-hidden">
                                    <Image
                                        fill={true}
                                        src={"/rustic-charm/assets/image10.jpg"}
                                        alt="front image"
                                    />
                                </div>
                                <div className="relative w-1/2 aspect-[4/3] bg-purple-300 rounded-lg overflow-hidden">
                                    <Image
                                        fill={true}
                                        src={"/rustic-charm/front"}
                                        alt="front image"
                                    />
                                </div>
                            </div>
                            <div
                                className={`text-5xl font-mono font-bold my-2`}
                            >
                                <span className={sacramento.className}>
                                    breakfast, lunch, dinner
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tariff;
