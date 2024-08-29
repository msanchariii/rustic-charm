import React from "react";
import Accordion from "./Accordion";

function NearbyAttractions({ className = "", ...props }) {
    return (
        <div className="w-full min-h-screen  py-6" id="tariff">
            <Accordion
                question="Bird Watching Zone"
                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quisquam quis amet quos expedita iure."
            />
            <div className="w-full max-w-7xl p-12 rounded-3xl mx-auto flex flex-col md:flex-row md:justify-between">
                hi
            </div>
        </div>
    );
}

export default NearbyAttractions;

/*
Bird Watching Zone
Pine Forest
Orange Orchards
Lepcha Waterfall
Natural Swimming Pool
River Side Camping
Bonfire
*/
