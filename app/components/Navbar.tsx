"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag } from 'lucide-react'
import logo from "../../app/assets/SLQSTF.svg"

const links = [
  { name: 'Men', href: '/men' },
  { name: 'Women', href: '/women' },
  { name: 'Kids', href: '/kids' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="bg-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="w-32">
          <Image
            src={logo}
            alt="SleekQuest Logo"
            width={128}
            height={40}
            className="h-auto w-full"
          />
        </Link>

        <div className="absolute left-1/2 transform -translate-x-1/2">
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
        <button className='text-gray-600 hover:bg-gray-100 p-4 rounded-md'>
          <ShoppingBag className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}