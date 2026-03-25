import React from 'react';
import { User } from 'lucide-react'; // Default user icon

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amit Malik',
      nameHi: 'अमित मालिक',
      reviewHi: 'मुझे मिला अपने सपनों का घर Tomar Properties के साथ।'
    },
    {
      name: 'Abha Sharma',
      nameHi: 'अभा शर्मा',
      reviewHi: 'मैं Tomar Properties के साथ निवेश करता हूँ अपना पैसा क्योंकि यहीं मुझे विश्वास है।'
    },
    {
      name: 'Manoj Kumar',
      nameHi: 'मनोज कुमार',
      reviewHi: 'Tomar Properties की टीम पेशेवर और भरोसेमंद है।'
    },
    {
      name: 'Sneha Verma',
      nameHi: 'स्नेहा वर्मा',
      reviewHi: 'घर खरीदने की प्रक्रिया आसान और स्पष्ट रही। धन्यवाद Tomar Properties।'
    },
    {
      name: 'Rahul Singh',
      nameHi: 'राहुल सिंह',
      reviewHi: 'Tomar Properties के साथ मेरा अनुभव बहुत अच्छा रहा।'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">
        हमारे ग्राहक / Happy Customers
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Default User Icon */}
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-10 h-10 text-gray-400" />
            </div>

            {/* Review in Hindi */}
            <p className="text-gray-700 italic mb-2">"{t.reviewHi}"</p>

            {/* Name */}
            <h4 className="mt-4 font-semibold text-gray-900">
              - {t.name} / {t.nameHi}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}