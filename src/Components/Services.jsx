import React from 'react';
import { FaCode, FaServer, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaCode size={40} className="text-orange-500" />,
    title: 'Frontend Development',
    description:
      'Building responsive and interactive UIs using React, Tailwind CSS, and modern web technologies.',
  },
  {
    icon: <FaServer size={40} className="text-orange-500" />,
    title: 'Backend Development',
    description:
      'Creating robust APIs and scalable server-side logic using Node.js, Express, and databases like MongoDB.',
  },
  {
    icon: <FaRobot size={40} className="text-orange-500" />,
    title: 'AI/ML Development',
    description:
      'Implementing machine learning models and AI solutions using Python, TensorFlow, and PyTorch.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16 sm:py-20 mt-24" id="services">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">My Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-[0_0_25px_rgba(255,165,0,0.6)] hover:scale-105 transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
