"use client";
import { Facebook, Instagram, MailIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Header() {
    const pathname = usePathname();
    console.log("Pathname:: ", pathname);

    const [active, setActive] = useState(false);
    const changeNavbar = () => {
        if (window?.scrollY >= 80) {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    window?.addEventListener("scroll", changeNavbar);

    return (
        <header
            className={`w-full p-4 font-bold shadow text-xl fixed top-0 left-0 z-10 ${
                pathname == "/" && !active
                    ? "bg-transparent text-white"
                    : "  bg-white text-sky-500"
            }`}
        >
            <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
                {/* icon */}
                <div className="flex space-x-4">
                    <Facebook
                        size={32}
                        className="hover:outline rounded-full p-1 hover:pointer"
                    />
                    <Instagram
                        size={32}
                        className="hover:outline rounded-full p-1"
                    />
                    <MailIcon
                        size={32}
                        className="hover:outline rounded-full p-1"
                    />
                </div>
                {/* links */}
                <div>
                    {links.map(
                        (
                            link // map function
                        ) => (
                            <Link
                                key={link.text}
                                href={link.url}
                                className="mx-4 hover:underline"
                            >
                                {link.text}
                            </Link>
                        )
                    )}
                </div>
                {/* contact us button */}
                <button
                    className={`${
                        pathname == "/" && !active
                            ? "bg-white text-sky-500"
                            : "text-white bg-sky-500"
                    }  py-2 px-4 rounded-full `}
                >
                    Contact
                </button>
            </div>
        </header>
    );
}

export default Header;

const links = [
    { text: "Home", url: "/" },
    { text: "Gallery", url: "/gallery" },
    { text: "About", url: "/#about" },
    { text: "Tariff", url: "/#tariff" },
];
