export default function Navbar () {
    return (
        <header className="bg-gray-100">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <a href="#" class="text-black font-bold">SleekQuest</a>
          <nav className="flex space-x-4">
            <a href="#" class="hover:text-gray-700">Men</a>
            <a href="#" class="hover:text-gray-700">Women</a>
            <a href="#" class="hover:text-gray-700">Kids</a>
            <a href="#" class="hover:text-gray-700">About</a>
          </nav>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.11 3.961a5.25 5.25 0 011.041 9m-1.041-.926a5.25 5.25 0 00-1.041-9m7.5 2.046a5.25 5.25 0 01-1.041 9m-1.041-.926a5.25 5.25 0 00-1.041-9m3 7.5a5.25 5.25 0 00-1.041 9m-1.041-.926a5.25 5.25 0 01-1.041-9" />
            </svg>
          </div>
        </div>
      </header>
    )
}