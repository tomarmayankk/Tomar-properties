import React from 'react';
import { Globe, Camera, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 text-center">
      {/* Quick Links */}
      <div className="mb-6">
        <Link to="/about" className="mx-3 hover:text-blue-400 transition font-medium">
          About Us
        </Link>
        <Link to="/services" className="mx-3 hover:text-blue-400 transition font-medium">
          Services
        </Link>
      </div>

      {/* Location */}
      <p className="mb-4">Roorkee, Uttarakhand, India</p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <Globe size={24} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <Camera size={24} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <Briefcase size={24} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Tomar Properties. All rights reserved.
      </p>
    </footer>
  );
}