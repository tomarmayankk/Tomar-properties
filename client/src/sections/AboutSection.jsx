import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10 text-center"
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Motive</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At Tomar Properties, our mission is to provide complete real estate solutions from renting to purchasing, designing floor plans, and constructing dream properties — all with trust, quality, and transparency.
        </p>
      </motion.div>
    </section>
  );
}