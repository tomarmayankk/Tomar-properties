import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start mt-10"
        >
          {/* English */}
          <div className="flex-1 text-left">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">About Tomar Properties</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Tomar Properties is dedicated to providing complete real estate solutions. 
              We help clients buy, sell, rent, and construct properties with transparency, trust, and quality.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to make the process of owning or leasing a home simple and stress-free.
            </p>
          </div>

          {/* Hindi */}
          <div className="flex-1 text-right">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">टॉमर प्रॉपर्टीज़ के बारे में</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              टॉमर प्रॉपर्टीज़ सम्पूर्ण रियल एस्टेट समाधान प्रदान करने के लिए समर्पित है। 
              हम ग्राहकों को प्रॉपर्टीज़ खरीदने, बेचने, किराए पर लेने और निर्माण में मदद करते हैं, 
              विश्वास, पारदर्शिता और गुणवत्ता के साथ।
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              हमारा उद्देश्य घर खरीदने या किराए पर लेने की प्रक्रिया को सरल और तनाव-मुक्त बनाना है।
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission / Vision Section */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start"
        >
          {/* English */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the most trusted real estate partner in Muzaffarnagar and surrounding areas, providing seamless property solutions.
            </p>
          </div>

          {/* Hindi */}
          <div className="flex-1 text-right">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">हमारा दृष्टिकोण</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              मुजफ्फरनगर और आसपास के क्षेत्रों में सबसे भरोसेमंद रियल एस्टेट पार्टनर बनना, 
              और सरल और आसान प्रॉपर्टी समाधान प्रदान करना हमारा लक्ष्य है।
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}