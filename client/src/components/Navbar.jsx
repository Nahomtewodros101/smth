import React, { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-slate-300 p-8 opacity-95   sticky top-0 rounded-3xl shadow-2xl  m-2">
      <ul className="flex justify-center  font-extrabold  space-x-8">
        <li className="relative">
          <a href="/" className="text-black hover:text-gray-600">
            Home
          </a>
        </li>

        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/" className="text-black hover:text-gray-600">
            Services
          </a>
          <ul
            className={`absolute top-full left-0 bg-black text-white mt-0 py-2 w-48 rounded-lg z-10 transition-opacity duration-300 ease-in-out ${
              activeDropdown === 1
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <li className="px-4 py-2 hover:bg-gray-600">
              <a href="#services">Web Development</a>
            </li>
          </ul>
        </li>

        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#products" className="text-black hover:text-gray-600">
            Products
          </a>
          <ul
            className={`absolute top-full left-0 bg-black text-white mt-0 py-2 w-48 rounded-lg z-10 transition-opacity duration-300 ease-in-out ${
              activeDropdown === 2
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <li className="px-4 py-2 hover:bg-gray-600">
              <a href="/">Product 1</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-600">
              <a href="/">Product 2</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-600">
              <a href="/">Product 3</a>
            </li>
          </ul>
        </li>

        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/" className="text-black hover:text-gray-600">
            About
          </a>
          <ul
            className={`absolute top-full left-0 bg-black text-white mt-0 py-2 w-48 rounded-lg z-10 transition-opacity duration-300 ease-in-out ${
              activeDropdown === 3
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <li className="px-4 py-2 hover:bg-gray-600">
              <a href="/">Our Team</a>
            </li>
          </ul>
        </li>

        <li className="relative">
          <a href="/" className="text-black hover:text-gray-600">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
