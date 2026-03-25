import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Home, FileText, ShoppingCart, Layout, Hammer, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Renting / Leasing",
      titleHi: "किराया / पट्टा",
      desc: "Find the best rental or lease properties.",
      descHi: "सर्वश्रेष्ठ किराये या पट्टे वाली प्रॉपर्टीज़ खोजें।",
      icon: Home
    },
    {
      title: "Resale",
      titleHi: "रीसेल",
      desc: "Get premium resale properties at competitive prices.",
      descHi: "प्रतिस्पर्धी कीमतों पर प्रीमियम रीसेल प्रॉपर्टीज़ पाएं।",
      icon: FileText
    },
    {
      title: "Purchasing",
      titleHi: "खरीदारी",
      desc: "Explore and invest in new properties.",
      descHi: "नई प्रॉपर्टीज़ का पता लगाएं और निवेश करें।",
      icon: ShoppingCart
    },
    {
      title: "Floor Plan Design",
      titleHi: "फ्लोर प्लान डिज़ाइन",
      desc: "Smart and modern architectural floor plans.",
      descHi: "स्मार्ट और आधुनिक वास्तु योजनाएं।",
      icon: Layout
    },
    {
      title: "Construction",
      titleHi: "निर्माण",
      desc: "End-to-end construction services for your dream home.",
      descHi: "आपके सपनों के घर के लिए संपूर्ण निर्माण सेवाएं।",
      icon: Hammer
    }
  ];

  const journeySteps = [
    { step: "Contact Us", stepHi: "संपर्क करें" },
    { step: "Property Consultation", stepHi: "संपत्ति परामर्श" },
    { step: "Property Selection", stepHi: "संपत्ति चयन" },
    { step: "Agreement & Paperwork", stepHi: "सहमति और कागजी कार्रवाई" },
    { step: "Purchase / Move-in", stepHi: "खरीद / स्थानांतरण" }
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12 mt-10">
          Our Services / हमारी सेवाएँ
        </h2>

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

        {/* Client Journey */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            Your Journey With Us / हमारे साथ आपकी यात्रा
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 flex-wrap">
            {journeySteps.map((item, i) => (
              <div key={i} className="flex items-center flex-col md:flex-row">
                <div className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md min-w-[150px] text-center">
                  {item.step} <br /> <span className="text-sm">{item.stepHi}</span>
                </div>
                {i !== journeySteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 hidden md:inline mx-2" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
            We guide you step by step from first contact to moving into your new home. <br />
            हम आपको पहले संपर्क से लेकर नए घर में स्थानांतरण तक हर कदम पर मार्गदर्शन करते हैं।
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}