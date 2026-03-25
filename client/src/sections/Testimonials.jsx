import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amit',
      review: 'Great service and smooth process!',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Riya',
      review: 'Helped me find my dream home.',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Karan',
      review: 'Professional and reliable team.',
      photo: 'https://randomuser.me/api/portraits/men/56.jpg'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Happy Customers</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={t.photo}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-700 italic">"{t.review}"</p>
            <h4 className="mt-4 font-semibold text-gray-900">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}