import React from 'react'
import { motion } from 'framer-motion';
import { FaInstagram,FaRobot,FaUser,FaShoppingCart,FaComments } from 'react-icons/fa';
const services = [
  {
    icon: <FaInstagram size={40} className="text-orange-500 flex justify-center " />,
    title: 'Social Media Application',
    description: 'InstaClone is a full-stack Instagram-inspired app built with Next.js and Django, allowing users to share photos, like and comment on posts, and follow others — delivering a responsive and engaging social experience.',
    github:'https://github.com/RishabhRawat12345/Social-Media-Frontend'  ,
    live:'https://social-media-frontend-git-main-rishabhrawat12345s-projects.vercel.app/'
},
  {
    icon: <FaRobot size={40} className="text-orange-500 flex justify-center"  />,
    title: 'Image Generating app',
    description: 'GenAI Image Generator is a full-stack web application that allows users to generate images from text prompts using AI models. Users can input descriptions, select styles, and generate high-quality images in real-time.',
    github:'https://github.com/RishabhRawat12345/Gen-AI',
    live:'https://silver-puffpuff-8e82ad.netlify.app/'
  },
  {
    icon: <FaUser size={40} className="text-orange-500 " />,
    title: 'EMS',
    description: 'Developed a Employee Management System (EMS) using the MERN stack, enabling efficient management of employee records, roles, and departments.',
    github:'https://github.com/RishabhRawat12345/Employee-Management-system',
    live:'https://employee-management-system-psi-five.vercel.app'
  },
  {
    icon: <FaShoppingCart size={40} className="text-orange-500 " />,
    title: 'Shoping App',
    description: 'React Shopping App is a modern e-commerce web application built using React.js that allows users to browse, add, and purchase products seamlessly. It features a dynamic and responsive UI for an engaging shopping experience. The project emphasizes efficient state management and component-based architecture for scalability and performance.',
    github:'https://github.com/RishabhRawat12345/React-Shoping-App1',
    live:'https://react-shoping-app1-git-main-rishabhrawat12345s-projects.vercel.app/'
  },
   {
    icon: <FaComments size={40} className="text-orange-500 " />,
    title: 'Chat Bot',
    description: 'This Chat-Bot project is an interactive web application built using React that enables users to engage in real-time AI-powered conversations.',
    github:'https://github.com/RishabhRawat12345/Chat-bot',
    live:'https://willowy-sherbet-ccf9a5.netlify.app/'
  },
  
];

const Project = () => {
  return (

    <div className="flex-col">
        <h1 className='text-white text-center text-5xl font-bold '>Projects</h1>
   
    <div className="grid grid-cols-3 gap-6 text-center p-6  mt-40 ">
      
      
      {services.map((service, index) => (
        <motion.div
          className='hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] hover:scale-105  transition-all duration-300 ease-in-out flex  flex-col items-center  h-[420px] rounded pt-10'
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
        
        >
          {service.icon}
          <h2 className="text-2xl font-semibold mt-4  text-white mb-10">{service.title}</h2>
          <p className="text-gray-300">{service.description}</p>
          <div className="flex gap-6 mt-20">
              <a href={service.github} className='text-white w-[121px] h-[30px] hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] hover:scale-105  transition-all duration-300 ease-in-out  border-2 border-orange-500 rounded' >git hub</a>
              <a href={service.live} className='text-white w-[121px] h-[30px] hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] hover:scale-105  transition-all duration-300 ease-in-out  border-2 border-orange-500 rounded' >Live Link</a>
          </div>
         
        </motion.div>
      ))}
    </div>

     </div>
  );
};

export default Project;
