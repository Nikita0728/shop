// Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-800 text-white">
      {/* Left - Logo */}
      <div className="text-2xl font-bold">
        ShopMe
      </div>

      {/* Center - Links */}
      <div className="flex gap-8">
        <a href="#home" className="hover:text-gray-300">Home</a>
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </div>

      {/* Right - Login/Signup */}
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600">Login</button>
        <button className="px-4 py-2 rounded border border-white hover:bg-white hover:text-gray-800">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
