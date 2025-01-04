'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Menu, X } from 'lucide-react'
import logo from "../../app/assets/SLQSTF.svg"
import motion from 'framer-motion'

const links = [
  { name: 'Men', href: '/men' },
  { name: 'Women', href: '/women' },
  { name: 'Kids', href: '/kids' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white py-4 relative">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">
          <Link href="/" className="w-32">
            <Image src={logo} alt="SleekQuest Logo" width={128} height={40} className="h-auto w-full" />
          </Link>
          <div className="flex-1 flex justify-center">
            <nav className="flex space-x-7 font-inter font-medium">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 text-base transition-colors ${pathname === link.href
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black hover:bg-gray-100 py-2 px-3 rounded-sm'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <button className="text-gray-600 hover:bg-gray-100 p-4 rounded-md">
            <ShoppingBag className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:bg-gray-100 p-2 rounded-md"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <Link href="/" className="w-24">
            <Image src={logo} alt="SleekQuest Logo" width={96} height={30} className="h-auto w-full" />
          </Link>

          <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-md">
            <ShoppingBag className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 z-50">
            <nav className="flex flex-col font-inter font-medium">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-6 py-4 text-base transition-colors ${pathname === link.href
                    ? 'text-black bg-gray-50'
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}