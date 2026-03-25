import React from 'react';
import { Globe, Camera, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      {/* Quick Links */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="flex gap-6 mb-4 md:mb-0">
          <Link to="/about" className="hover:text-blue-400 transition font-medium">
            About Us
          </Link>
          <Link to="/services" className="hover:text-blue-400 transition font-medium">
            Services
          </Link>
        </div>
        <div className="flex gap-6">
          <Link to="/about" className="hover:text-blue-400 transition font-medium">
            हमारे बारे में
          </Link>
          <Link to="/services" className="hover:text-blue-400 transition font-medium">
            सेवाएँ
          </Link>
        </div>
      </div>

      {/* Address & Contact */}
      <div className="flex flex-col md:flex-row justify-between text-center md:text-left mb-8 gap-6">
        <div className="space-y-1 text-left">
          <p>Deen Dayal Rajwaha</p>
          <p>Near Shakumbhri Tiles</p>
          <p>Muzaffarnagar</p>
          <p>Uttar Pradesh, India</p>
          <p>Contact: tomarpropertiesmzn@gmail.com</p>
        </div>
        <div className="space-y-1 text-gray-300">
          <p>दिन दयाल राजवाहा</p>
          <p>शकुम्भरी टाइल्स के पास</p>
          <p>मुजफ्फरनगर</p>
          <p>उत्तर प्रदेश, भारत</p>
          <p>संपर्क: tomarpropertiesmzn@gmail.com</p>
        </div>
      </div>

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
      <p className="text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} Tomar Properties. All rights reserved.
      </p>
    </footer>
  );
}