import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

const handleLoginClick = () => {

  console.log("re directed to new page")


  


}


  return (
    <header className="mx-full bg-transparent shadow-lg sticky top-0 z-50">
      <nav className="w-full">
        <div className="flex justify-between items-center bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-white px-6 py-3 shadow-lg border border-indigo-700">

          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer select-none">
            <div className="p-1 bg-gradient-to-br from-pink-500 via-yellow-400 to-red-500 rounded-full animate-pulse shadow-md">
              <img
                src="/logo.png"
                alt="Gyan Logo"
                className="h-10 w-10 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 font-extrabold text-2xl font-serif tracking-wide select-text">
              GYAN.AI
            </h1>
            <span className="h-3 w-3 bg-green-400 rounded-full animate-pulse" aria-label="online status" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-4">

            {/* Language Select */}
            <select
              id="lang"
              className="bg-white/30 backdrop-blur-sm text-white border border-purple-400 rounded-lg px-3 py-1.5 text-sm font-semibold cursor-pointer shadow-md hover:bg-white/50 transition duration-300"
              aria-label="Select language"
            >
              <option className="text-black">EN</option>
              <option className="text-black">HI</option>
              <option className="text-black">Urdu</option>
            </select>

            {/* Login Button */}
            <button
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1.5 rounded-lg font-semibold shadow-lg hover:from-pink-600 hover:to-purple-700 hover:shadow-pink-500/70 transition-transform duration-300 transform hover:scale-110"
            >
              Login
            </button>
          </div>

          {/* Hamburger - Mobile */}
          <button
            className="sm:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              // Close icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden mt-3 bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 rounded-2xl px-6 py-4 shadow-lg border border-indigo-700">
            <select
              id="lang-mobile"
              className="bg-white/30 backdrop-blur-sm text-white border border-purple-400 rounded-full px-4 py-2 text-sm font-semibold cursor-pointer shadow-md hover:bg-white/50 transition duration-300 w-full mb-4"
              aria-label="Select language"
            >
              <option className="text-black">EN</option>
              <option className="text-black">HI</option>
              <option className="text-black">Urdu</option>
            </select>

            <button onclick={handleLoginClick}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-full font-semibold shadow-lg hover:from-pink-600 hover:to-purple-700 hover:shadow-pink-500/70 transition-transform duration-300 transform hover:scale-105 " 
            
            >
              Login
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
