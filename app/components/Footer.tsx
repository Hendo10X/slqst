import React from "react";
import logo from "../../app/assets/SLQSTF.svg"
import Image from "next/image"
import heroimage from "../../app/assets/Last.jpeg"

const Footer = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Main content */}
            <main className="flex-grow relative z-10 bg-[#ECECEC]">
                <div className="h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
                    <div className="text-center mb-8 mt-5 pt-15">
                        <span className="bg-[#4A5AE5] text-white px-4 py-2 rounded-full font-medium text-sm mt-5 inline-block font-inter">
                            Coming soon
                        </span>

                        <h1 className="text-black text-4xl md:text-6xl font-bold mt-6 mb-4 max-w-2xl font-inter">
                            Your clothes.Your style.Your brand.
                        </h1>

                        <p className="text-gray-600 text-md md:text-2xl max-w-2xl tracking-tight font-inter">
                            We are bringing customization to your door steps soon
                        </p>
                    </div>

                    <div className="relative w-full max-w-3xl h-[400px] rounded-lg overflow-hidden mb-9">
                        <Image
                            src={heroimage}
                            alt="Fashion model wearing white sunglasses"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="sticky bottom-0 z-0 w-full bg-white">
                <div className="relative h-80 px-12 py-12 text-black">
                    <div className="flex justify-between items-center">
                        <Image src={logo} alt="SleekQuest Logo" width={150} height={150} className="mt-1" />
                        <div className="flex space-x-12 md:space-x-24 text-sm md:text-md font-inter tracking-tight font-semibold">
                            <ul>
                                <li className="hover:underline cursor-pointer">Home</li>
                                <li className="hover:underline cursor-pointer">Careers</li>
                                <li className="hover:underline cursor-pointer">Contact</li>
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