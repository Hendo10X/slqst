export default function Navbar () {
    return (
        <header className="bg-gray-100">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <a href="#" className="text-black font-bold ml">SleekQuest</a>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-gray-700">Men</a>
            <a href="#" className="hover:text-gray-700">Women</a>
            <a href="#" className="hover:text-gray-700">Kids</a>
            <a href="#" className="hover:text-gray-700">About</a>
          </nav>
          <div>
           
          </div>
        </div>
      </header>
    )
}