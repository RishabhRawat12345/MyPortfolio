import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://myportfolio-h6o2.onrender.com/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-16 sm:py-20 text-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 text-center">
        Contact Me
      </h1>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-800 w-full max-w-md sm:max-w-lg md:max-w-2xl p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-5">
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-semibold text-sm sm:text-base">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
            placeholder="Your Message"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300 text-sm sm:text-base"
        >
          Send Message
        </button>

        {submitted && (
          <p className="mt-4 sm:mt-6 text-green-400 text-center font-medium text-sm sm:text-base">
            ✅ Thank you! Your message has been sent.
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default ContactForm;
