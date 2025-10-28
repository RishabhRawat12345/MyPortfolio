import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Body = () => {
  const [newText, setNewText] = useState('');
  const words = ['Frontend Developer', 'Backend Developer', 'AI/ML Developer'];

  const imageUrl =
    'https://media.licdn.com/dms/image/v2/D4D03AQENU2IYDtt3CQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694519815799?e=1762992000&v=beta&t=h_Bp_q_nB4ZTnSVVGVmXQtrUr3dSivPjAx4eszWUsFg';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setNewText(words[i]);
      i = (i + 1) % words.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 sm:gap-16 px-6 sm:px-10 lg:px-20 py-16 sm:py-24">
      {/* Right Section (Text) */}
      <motion.div
        className="text-center lg:text-left max-w-[600px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-snug">
          Hi, I am{' '}
          <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500 bg-clip-text text-transparent transition-all duration-500">
            {newText}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl mt-5 text-gray-300 leading-relaxed">
          I’m a passionate developer who loves crafting clean, responsive, and
          user-friendly web experiences. I enjoy turning complex problems into
          elegant digital solutions using modern web technologies.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-8 px-6 sm:px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300"
        >
          Let’s Connect 🚀
        </motion.button>
      </motion.div>

      {/* Left Section (Image) */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={imageUrl}
          alt="profile"
          className="h-40 w-40 sm:h-52 sm:w-52 md:h-60 md:w-60 rounded-full shadow-[0_0_25px_rgba(255,165,0,0.6)] hover:scale-105 duration-500 object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Body;
