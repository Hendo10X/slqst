import React from "react";
import logo from "../../app/assets/SLQSTF.svg"
import Image from "next/image"

const Footer = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Main content */}
            <main className="flex-grow relative z-10 bg-[#ECECEC]">
                <div className="h-screen flex items-center justify-center text-white text-2xl md:text-7xl font-bold uppercase">
                    Scroll down ↓
                </div>
            </main>

            {/* Footer */}
            <footer className="sticky bottom-0 z-0 w-full bg-white">
                <div className="relative h-80 px-12 py-12 text-black">
                    <div className="flex justify-between items-center">
                        <Image src={logo} alt="SleekQuest Logo" width={150} height={150} className="mt-1" />
                        <div className="flex space-x-12 md:space-x-24 text-sm md:text-xl font-inter tracking-tight font-medium">
                            <ul>
                                <li className="hover:underline cursor-pointer">Home</li>
                                <li className="hover:underline cursor-pointer">Docs</li>
                                <li className="hover:underline cursor-pointer">Comps</li>
                            </ul>
                            <ul>
                                <li className="hover:underline cursor-pointer">Github</li>
                                <li className="hover:underline cursor-pointer">Instagram</li>
                                <li className="hover:underline cursor-pointer">X (Twitter)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;