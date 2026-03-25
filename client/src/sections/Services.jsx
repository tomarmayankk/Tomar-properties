import React from "react";
import { Home, FileText, ShoppingCart, Layout, Hammer } from "lucide-react";

export default function Services() {
  const services = [
    { title: "Renting / Leasing", desc: "Find best rental homes & apartments.", icon: Home },
    { title: "Resale", desc: "Explore premium resale properties.", icon: FileText },
    { title: "Purchasing", desc: "Invest in new properties with confidence.", icon: ShoppingCart },
    { title: "Floor Plan Design", desc: "Smart and modern architectural designs.", icon: Layout },
    { title: "Construction", desc: "End-to-end construction services.", icon: Hammer }
  ];

  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
    </section>
  );
}