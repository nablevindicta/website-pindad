import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Pindad
        </Link>

        <div className="flex space-x-6 relative">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              className="hover:text-gray-400 flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Products ▼
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-md rounded-md">
                <Link
                  to="/products/weapons"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Weapon
                </Link>
                <Link
                  to="/products/ammunition"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Ammunition
                </Link>
                <Link
                  to="/products/vehicles"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Special Vehicle
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
