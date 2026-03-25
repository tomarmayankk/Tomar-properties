import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Home, FileText, ShoppingCart, Layout, Hammer, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    { title: "Renting / Leasing", desc: "Find the best rental or lease properties.", icon: Home },
    { title: "Resale", desc: "Get premium resale properties at competitive prices.", icon: FileText },
    { title: "Purchasing", desc: "Explore and invest in new properties.", icon: ShoppingCart },
    { title: "Floor Plan Design", desc: "Smart and modern architectural floor plans.", icon: Layout },
    { title: "Construction", desc: "End-to-end construction services for your dream home.", icon: Hammer }
  ];

  const journeySteps = [
    "Contact Us",
    "Property Consultation",
    "Property Selection",
    "Agreement & Paperwork",
    "Purchase / Move-in"
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition transform duration-300"
              >
                <Icon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Client Journey */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Your Journey With Us</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 flex-wrap">
            {journeySteps.map((step, i) => (
              <div key={i} className="flex items-center">
                <div className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md min-w-[150px] text-center">
                  {step}
                </div>
                {i !== journeySteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 hidden md:inline mx-2" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
            We guide you step by step from first contact to moving into your new home.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}