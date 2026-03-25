import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-3">
        
        {/* Logo */}
        <Link to="/" className="text-lg sm:text-2xl font-bold text-blue-900">
          Tomar Properties
        </Link>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <a
            href="https://forms.gle/nFDVXfLFbMg2QQVp6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Buy/Sell
          </a>

          <a
            href="https://forms.gle/G8vMq1S5RTyPjBeN9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Contact
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/tomarpropertydealer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition transform hover:scale-110"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
}