import React from "react";
import { Home, FileText, ShoppingCart, Layout, Hammer } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Renting / Leasing",
      titleHi: "किराया / पट्टा",
      desc: "Find best rental homes & apartments.",
      descHi: "सर्वश्रेष्ठ किराये के घर और अपार्टमेंट खोजें।",
      icon: Home,
    },
    {
      title: "Resale",
      titleHi: "रीसेल",
      desc: "Explore premium resale properties.",
      descHi: "प्रिमियम रीसेल प्रॉपर्टीज़ खोजें।",
      icon: FileText,
    },
    {
      title: "Purchasing",
      titleHi: "खरीदारी",
      desc: "Invest in new properties with confidence.",
      descHi: "नयी प्रॉपर्टीज़ में भरोसे के साथ निवेश करें।",
      icon: ShoppingCart,
    },
    {
      title: "Floor Plan Design",
      titleHi: "फ्लोर प्लान डिज़ाइन",
      desc: "Smart and modern architectural designs.",
      descHi: "स्मार्ट और आधुनिक वास्तुकला डिज़ाइन।",
      icon: Layout,
    },
    {
      title: "Construction",
      titleHi: "निर्माण",
      desc: "End-to-end construction services.",
      descHi: "पूरा निर्माण कार्य सेवाएं।",
      icon: Hammer,
    },
  ];

  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services / हमारी सेवाएँ</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition transform duration-300"
            >
              <Icon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-1">
                {service.title} / {service.titleHi}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.desc} <br /> {service.descHi}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}