import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaRobot, FaUser, FaShoppingCart, FaComments } from 'react-icons/fa';

const services = [
  {
    icon: <FaInstagram size={40} className="text-orange-500" />,
    title: 'Social Media Application',
    description:
      'InstaClone is a full-stack Instagram-inspired app built with Next.js and Django, allowing users to share photos, like and comment on posts, and follow others — delivering a responsive and engaging social experience.',
    github: 'https://github.com/RishabhRawat12345/Social-Media-Frontend',
    live: 'https://social-media-frontend-git-main-rishabhrawat12345s-projects.vercel.app/',
  },
  {
    icon: <FaRobot size={40} className="text-orange-500" />,
    title: 'Image Generating App',
    description:
      'GenAI Image Generator is a full-stack web application that allows users to generate images from text prompts using AI models. Users can input descriptions, select styles, and generate high-quality images in real time.',
    github: 'https://github.com/RishabhRawat12345/Gen-AI',
    live: 'https://silver-puffpuff-8e82ad.netlify.app/',
  },
  {
    icon: <FaUser size={40} className="text-orange-500" />,
    title: 'EMS',
    description:
      'Developed an Employee Management System (EMS) using the MERN stack, enabling efficient management of employee records, roles, and departments.',
    github: 'https://github.com/RishabhRawat12345/Employee-Management-system',
    live: 'https://employee-management-system-psi-five.vercel.app',
  },
  {
    icon: <FaShoppingCart size={40} className="text-orange-500" />,
    title: 'Shopping App',
    description:
      'React Shopping App is a modern e-commerce platform built with React.js that allows users to browse, add, and purchase products seamlessly — featuring a dynamic UI and efficient state management.',
    github: 'https://github.com/RishabhRawat12345/React-Shoping-App1',
    live: 'https://react-shoping-app1-git-main-rishabhrawat12345s-projects.vercel.app/',
  },
  {
    icon: <FaComments size={40} className="text-orange-500" />,
    title: 'Chat Bot',
    description:
      'An interactive Chat-Bot built with React that enables users to engage in real-time AI-powered conversations through a smooth chat interface.',
    github: 'https://github.com/RishabhRawat12345/Chat-bot',
    live: 'https://willowy-sherbet-ccf9a5.netlify.app/',
  },
];

const Project = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-6" id="projects">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-[0_0_25px_rgba(255,165,0,0.6)] hover:scale-105 transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-300 text-sm sm:text-base">{service.description}</p>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href={service.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-black font-medium transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href={service.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-black font-medium transition-all duration-300"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
