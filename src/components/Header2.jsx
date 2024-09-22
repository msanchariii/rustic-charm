"use client";
import Link from "next/link";
import { dancingScript } from "@/fonts";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Header2() {
    const pathname = usePathname();

    return (
        <header
            className={`w-full px-4 py-2 font-medium text-lg sticky top-0 z-10 bg-white text-sky-500"
            }`}
        >
            {/* logo */}
            <div className="flex max-w-7xl mx-auto justify-between">
                {/* Logo */}
                <div className="w-full max-w-7xl mx-auto flex flex-row justify-between items-center">
                    <h1
                        className={`text-2xl font-extrabold ${dancingScript.className} text-sky-600`}
                    >
                        Rustic Charm
                    </h1>
                </div>
                {/* nav - larger screen */}
                {/* <div className="flex-grow bg-red-500"> */}
                <nav className="hidden md:flex md:items-center md:justify-between space-x-8 flex-grow">
                    <div className="flex flex-row ">
                        {links.map(
                            (
                                link // map function
                            ) => (
                                <Link
                                    key={link.text}
                                    href={link.url}
                                    className="mx-4 hover:underline text-sm text-sky-600"
                                >
                                    {link.text}
                                </Link>
                            )
                        )}
                    </div>
                    {/* contact us button */}
                    <Link
                        href="/#contact"
                        // scroll={false}
                        className={`${"text-white bg-sky-600"}  py-2 px-4 rounded-full text-sm`}
                    >
                        Contact
                    </Link>
                </nav>
                {/* </div> */}
                {/* hamburger - phone */}

                {/* links */}
                {/* larger screens */}

                {/* for mobile phone (hamburger menu) */}
                {/* <div
                    className="md:hidden"
                    onClick={toggleMenu}
                    aria-label="menu"
                    /> */}
            </div>
        </header>
    );
}

export default Header2;

const links = [
    { text: "Home", url: "#home" },
    { text: "About", url: "#about" },
    { text: "Gallery", url: "#gallery" },
    { text: "Explore", url: "#tariff" },
    { text: "FAQ", url: "#faq" },
];
