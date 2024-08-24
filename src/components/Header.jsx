"use client";
import { Facebook, Instagram, MailIcon } from "lucide-react";
import { usePathname } from "next/navigation";

function Header() {
    const pathname = usePathname();
    return (
        <header
            className={`w-full p-4 font-bold shadow text-xl absolute top-0 left-0 z-10 ${
                pathname == "/"
                    ? "bg-transparent text-white"
                    : "bg-white text-sky-500"
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
                            <a
                                key={link.text}
                                href={link.url}
                                className="mx-4 hover:underline"
                            >
                                {link.text}
                            </a>
                        )
                    )}
                </div>
                {/* contact us button */}
                <button className="bg-white text-sky-500 py-2 px-4 rounded-full ">
                    Contact
                </button>
            </div>
        </header>
    );
}

export default Header;

const links = [
    { text: "Home", url: "/#" },
    { text: "Gallery", url: "/#services" },
    { text: "About", url: "/#about" },
    { text: "Tariff", url: "/#contact" },
];
