import { Star } from "@/constants/icons";
import { dancingScript } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

function Tariff() {
    return (
        <div className="w-full min-h-screen py-6" id="tariff">
            <div className="w-full max-w-7xl bg-sky-50/70 p-12 rounded-3xl mx-auto flex flex-col md:flex-row md:justify-between">
                <div className="md:w-1/2 space-y-8 flex flex-col p-2">
                    <div className="w-28 py-2 px-3 bg-white/80 rounded-full">
                        <span className="font-semibold text-lg">4.5</span>
                        {/* <Star /> */}
                    </div>
                    <h1 className={`mx-auto text-left w-full text-4xl my-4`}>
                        Explore
                    </h1>
                    <h2 className="text-sm text-slate-600 font-medium max-w-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor, turpis id vestibulum
                    </h2>
                    <div className="text-lg space-y-4 divide-y-2 pr-4">
                        {tariffPoints.map((item, index) => {
                            return <Comp {...item} key={index} />;
                        })}
                    </div>
                    <div className="py-8 flex-grow space-x-6">
                        <Link
                            href={"#contact"}
                            className="bg-black text-white px-4 py-4 font-medium rounded-full relative "
                        >
                            Call us to Book !
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 p-2">
                    <div className="w-full rounded-2xl aspect-[5/6] overflow-hidden relative drop-shadow-md">
                        <Image
                            src={"/rustic-charm/assets/image19.jpg"}
                            fill={true}
                            alt="cozy"
                            className="object-cover filter brightness-90"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tariff;

function Comp({ icon, text }) {
    return (
        <div className="flex items-center gap-x-4 py-2">
            <div className="h-[32px] aspect-square bg-purple-600 rounded-full"></div>
            <p className="text-base font-light">{text}</p>
            {/* <div className="h-px w-full max-w-lg bg-slate-300"></div> */}
        </div>
    );
}

const tariffPoints = [
    {
        text: "Rs. 1500 /- per person",
    },
    {
        // icon: "Breakfast, Dinner, Lunch Included",
        text: "Breakfast, Dinner, Lunch Included",
    },
    {
        // icon: "Rs. 1500 per person",
        text: "Evening Snacks",
    },
    {
        // icon: "5 - 10 Guests",
        text: "Veg & Non-Veg",
    },
    {
        text: "Wifi",
    },
    {
        // icon: " Sittong, Darjeeling",
        text: " Sittong, Darjeeling",
    },
];
