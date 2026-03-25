import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-bg.jpg"; // make sure you add a real image in assets
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center text-white bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center px-4 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Find. Build. Own. In Muzaffarnagar
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Your trusted partner for buying, selling, and constructing homes in Muzaffarnagar
        </p>
        <Link
          to="/services"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition transform"
        >
          Explore Services
        </Link>
      </motion.div>
    </section>
  );
}