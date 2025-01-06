"use client"
import Image from 'next/image'
import Link from 'next/link'
import heroimage from "../../app/assets/Hero.jpeg"
import { motion } from 'framer-motion'
import { FadeUp } from './FadeUp'

export default function Hero() {
    return (

        <section className="mx-auto max-w-2xl px-4 sm:p-8 lg:p-2 mb-10">
            <div className="flex flex-col items-center text-center">
                <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden mb-4">
                    <Image
                        src={heroimage}
                        alt="Colorful hoodies on hangers including white, orange, and green"
                        className="object-cover"
                        fill
                        priority
                    />
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold mb-6 tracking-tight font-inter text-[#4F4D4D]">
                    Get the best quality merch for much lesser with the ability to customize.
                </h1>
                <motion.button
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                    <Link
                        href="/shop"
                        className="inline-block font-bold bg-black text-white hover:bg-[#43EA7A] hover:text-black rounded-full px-8 py-3 transition-colors duration-200 font-inter"
                    >
                        Shop now
                    </Link>
                </motion.button>
            </div>
        </section>

    )
}