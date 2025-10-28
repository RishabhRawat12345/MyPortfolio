import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // close menu on mobile after click
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1
        className="text-3xl md:text-4xl font-extrabold text-orange-600 cursor-pointer"
        onClick={() => scrollToSection('home')}
      >
        Rishabh
      </h1>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-8 text-white font-semibold">
        {['home', 'services', 'education', 'projects', 'contact'].map((item) => (
          <p
            key={item}
            onClick={() => scrollToSection(item)}
            className="cursor-pointer hover:text-orange-500 transition-colors duration-300"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </p>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center gap-6 py-6 shadow-md lg:hidden"
          >
            {['home', 'services', 'education', 'projects', 'contact'].map((item) => (
              <p
                key={item}
                onClick={() => scrollToSection(item)}
                className="cursor-pointer text-lg hover:text-orange-500 transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
