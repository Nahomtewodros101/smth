import React, { useState } from "react";
import logo from "../components/images/Untitled (4).png";
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-[#eae8e0] h-[100px] p-2 opacity-95  scroll-smooth sticky top-4 rounded-3xl z-50 shadow-2xl  m-4">
      <div>
        <li className="list-none">
          <img
            src={logo}
            alt="logo"
            width={150}
            className="rounded-full mx-20 translate-y-2 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 overflow-hidden"
          />
        </li>
      </div>
      <ul className="flex justify-center font-extrabold  pb-5 space-x-8">
        <li className="relative">
          <a
            href="#home"
            className="text-black scroll-smooth hover:text-gray-600"
          >
            Home
          </a>
        </li>

        <a href="#services" className="text-black hover:text-gray-600">
          Services
        </a>

        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#products" className="text-black hover:text-gray-600">
            Products
          </a>
        </li>

        <li
          className="relative"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#team" className="text-black hover:text-gray-600">
            Team
          </a>
        </li>

        <li className="relative">
          <a href="/login" className="text-black hover:text-gray-600">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
