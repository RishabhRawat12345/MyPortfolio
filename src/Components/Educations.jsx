import React from 'react';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const educationList = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institute: 'UPES Bidholi',
    year: '2023 - Present',
    description: 'Specializing in Advanced Web Development and Machine Learning projects.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institute: "Tula's Institute, Sri Dev Suman Uttarakhand University",
    year: '2020 - 2023',
    description: 'Completed core courses in programming, databases, and software development.',
  },
];

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">Education</h1>

      <div className="flex flex-col lg:flex-row  gap-8 max-w-4xl mx-auto">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <FaGraduationCap className="text-orange-500 text-2xl" />
              <h2 className="text-2xl font-semibold">{edu.degree}</h2>
            </div>
            <p className="text-gray-300 font-medium">{edu.institute}</p>
            <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
            <p className="text-gray-300">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
