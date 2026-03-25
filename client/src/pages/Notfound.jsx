import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 text-center md:text-left"
      >
        {/* English */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold text-blue-600 mb-6">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-700 text-lg mb-6">
            Oops! The page you are looking for does not exist. You can go back to the homepage.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
        </div>

        {/* Hindi */}
        <div className="flex-1 text-right">
          <h1 className="text-6xl font-bold text-blue-600 mb-6">४०४</h1>
          <h2 className="text-3xl font-bold mb-4">पृष्ठ नहीं मिला</h2>
          <p className="text-gray-400 text-lg mb-6">
            ओह! जिस पृष्ठ को आप खोज रहे हैं वह मौजूद नहीं है। आप होमपेज पर वापस जा सकते हैं।
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            होम जाएँ
          </Link>
        </div>
      </motion.div>
    </section>
  );
}