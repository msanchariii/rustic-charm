import { BackToTop } from "@/constants/icons";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-slate-50 shadow relative overflow-hidden min-h-80">
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <Link
                        className="inline-block rounded-full bg-sky-600 p-2 text-white shadow transition hover:bg-sky-500 sm:p-3 lg:p-4"
                        href="#home"
                    >
                        <span className="sr-only">Back to top</span>

                        <BackToTop />
                    </Link>
                </div>

                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center text-slate-700 lg:justify-start">
                            <h1>Rustic Charm Homestay</h1>
                        </div>

                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-slate-800 lg:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Incidunt consequuntur amet culpa cum itaque
                            neque.
                        </p>
                    </div>

                    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                        <li>
                            <Link
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="#"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="#"
                            >
                                Services
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="#"
                            >
                                Projects
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="#"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>

                <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; 2022. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
