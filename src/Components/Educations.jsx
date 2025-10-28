import React from 'react';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const educationList = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institute: 'UPES Bidholi',
    year: '2023 - Present',
    description:
      'Specializing in Advanced Web Development and Machine Learning projects.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institute: "Tula's Institute, Sri Dev Suman Uttarakhand University",
    year: '2020 - 2023',
    description:
      'Completed core courses in programming, databases, and software development.',
  },
];

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 md:px-12 py-16 sm:py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-12">
        Education
      </h1>

      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl mx-auto">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 sm:p-8 w-full sm:w-[90%] md:w-[80%] lg:w-[45%] shadow-lg hover:shadow-[0_0_25px_rgba(255,165,0,0.6)] transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <FaGraduationCap className="text-orange-500 text-xl sm:text-2xl md:text-3xl" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                {edu.degree}
              </h2>
            </div>

            <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg">
              {edu.institute}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mb-3">{edu.year}</p>
            <p className="text-gray-300 text-sm sm:text-base">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
