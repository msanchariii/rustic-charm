import Image from "next/image";
import Link from "next/link";
import { MapPinCheck } from "@/constants/icons";
import { CookingPotIcon, IndianRupee, Star, Vegan, Wifi } from "lucide-react";

function Tariff() {
    return (
        <div className="w-full min-h-screen py-6" id="tariff">
            <div className="w-full max-w-7xl bg-sky-50/70 p-12 rounded-3xl mx-auto flex flex-col md:flex-row md:justify-between">
                <div className="md:w-1/2 space-y-8 flex flex-col p-2">
                    <div className="w-64 py-2 px-3 bg-white/80 rounded-full flex items-center justify-center space-x-2">
                        <span className="font-semibold text-xl">5.0</span>
                        <Star fill="purple" stroke="purple" />
                        <Star fill="purple" stroke="purple" />
                        <Star fill="purple" stroke="purple" />
                        <Star fill="purple" stroke="purple" />
                        <Star fill="purple" stroke="purple" />
                    </div>
                    <h1 className={`mx-auto text-left w-full text-4xl my-4`}>
                        Explore
                    </h1>
                    <h2 className="text-sm text-slate-600 font-medium max-w-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor, turpis id vestibulum
                    </h2>
                    <div className="text-lg space-y-4 divide-y-2 pr-4">
                        <ExploreComponent text={explore.tariff}>
                            <IndianRupee />
                        </ExploreComponent>
                        <ExploreComponent text={explore.location}>
                            <MapPinCheck />
                        </ExploreComponent>
                        <ExploreComponent text={explore.meals}>
                            <CookingPotIcon />
                        </ExploreComponent>
                        <ExploreComponent text={explore.isVeg}>
                            <Vegan />
                        </ExploreComponent>
                        <ExploreComponent text={explore.wifi}>
                            <Wifi />
                        </ExploreComponent>
                    </div>
                    <div className="py-8 flex-grow space-x-6">
                        <Link
                            href="#contact"
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

function ExploreComponent({ text, children }) {
    return (
        <div className="flex items-center gap-x-4 py-2">
            {children}
            <p className="text-base font-light">{text}</p>
            {/* <div className="h-px w-full max-w-lg bg-slate-300"></div> */}
        </div>
    );
}

const explore = {
    tariff: "Rs. 1500 /- per person",
    meals: "Breakfast, Lunch, Evening Snacks & Dinner Included",
    isVeg: "Both Veg & Non-Veg",
    wifi: "Wifi available",
    location: "Sittong, Darjeeling",
};
