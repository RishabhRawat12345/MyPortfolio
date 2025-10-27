import React from 'react';
import { FaCode, FaServer, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaCode size={40} className="text-orange-500" />,
    title: 'Frontend Development',
    description: 'Building responsive and interactive UIs using React, Tailwind CSS, and modern web technologies.',
  },
  {
    icon: <FaServer size={40} className="text-orange-500" />,
    title: 'Backend Development',
    description: 'Creating robust APIs and server-side logic using Node.js, Express, and databases like MongoDB.',
  },
  {
    icon: <FaRobot size={40} className="text-orange-500" />,
    title: 'AI/ML Development',
    description: 'Implementing machine learning models and AI solutions with Python, TensorFlow, and PyTorch.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20 mt-[210px]">
      <h1 className="text-5xl font-bold text-center mb-12">My Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {service.icon}
            <h2 className="text-2xl font-semibold mt-4 mb-2">{service.title}</h2>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
