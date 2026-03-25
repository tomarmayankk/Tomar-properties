import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-900">
          Tomar Properties
        </Link>
        <div className="flex space-x-4">
          <Link
            to="https://forms.gle/nFDVXfLFbMg2QQVp6"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Buy/Sell
          </Link>
          <a
            href="https://forms.gle/G8vMq1S5RTyPjBeN9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}