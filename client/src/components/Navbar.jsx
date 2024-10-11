import React, { useState } from 'react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-8">
        {/* Home */}
        <li className="relative">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
        </li>

        {/* Services */}
        <li 
          className="relative"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/" className="text-white hover:text-gray-300">Services</a>
          <ul className={`absolute top-full left-0 bg-gray-700 text-white mt-2 py-2 w-48 rounded-lg ${activeDropdown === 1 ? 'block' : 'hidden'}`}>
            <li className="px-4 py-2 hover:bg-gray-600"><a href="/">Web Development</a></li>
            <li className="px-4 py-2 hover:bg-gray-600"><a href="/">App Development</a></li>
            <li className="px-4 py-2 hover:bg-gray-600"><a href="/">SEO</a></li>
          </ul>
        </li>

        {/* Products */}
        <li 
          className="relative"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/" className="text-white hover:text-gray-300">Products</a>
          <ul className={`absolute top-full left-0 bg-gray-700 text-white mt-2 py-2 w-48 rounded-lg ${activeDropdown === 2 ? 'block' : 'hidden'}`}>
            <li className="px-4 py-2 hover:bg-gray-600"><a href="/">Product 1</a></li>
            <li className="px-4 py-2 hover:bg-gray-600"><a href="/">Product 2</a></li>
            <li className="px-4 py-2 hover:bg-gray-600"><a href="/">Product 3</a></li>
          </ul>
        </li>

        {/* Contact */}
        <li className="relative">
          <a href="/" className="text-white hover:text-gray-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
