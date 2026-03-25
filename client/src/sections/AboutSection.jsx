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
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Motive / हमारा उद्देश्य</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          At Tomar Properties, our mission is to provide easy and trusted solutions for buying, selling, designing floor plans, and constructing homes.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Tomar Properties में हमारा मकसद है कि हम आपके लिए घर खरीदने, बेचने, फ्लोर प्लान बनाने और निर्माण में आसान और भरोसेमंद समाधान दें।
        </p>
      </motion.div>
    </section>
  );
}