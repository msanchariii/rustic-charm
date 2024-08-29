"use client";
import React, { useState } from "react";

function Accordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="rounded-md p-4">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold">{question}</h3>
                <span>{isOpen ? "-" : "+"}</span>
            </div>
            <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    isOpen ? "max-h-screen" : "max-h-0"
                }`}
                style={{ transition: "max-height 0.3s ease-in-out" }}
            >
                {isOpen && <p className="mt-4">{answer}</p>}
            </div>
        </div>
    );
}

export default Accordion;
