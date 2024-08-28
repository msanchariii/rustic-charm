import { Dancing_Script, Roboto } from "next/font/google";

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "300", "400", "500", "700", "900"],
});

export { dancingScript, roboto };
