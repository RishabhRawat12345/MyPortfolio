import React from 'react'

const Nav = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex justify-between items-center m-[40px] text-white fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md z-50 px-10 py-4 sticky'>
      {/* Left Logo / Name */}
      <div className="left">
        <h1 
          className='text-4xl lg:text-2xl text-orange-600 font-extrabold cursor-pointer'
          onClick={() => scrollToSection('home')}
        >
          Rishabh
        </h1>
      </div>

      {/* Right Navigation */}
      <div className="right hidden lg:flex justify-between gap-[30px] font-bold">
        <p 
          onClick={() => scrollToSection('home')}
          className='hover:underline hover:decoration-2 hover:text-orange-600 cursor-pointer'
        >
          Home
        </p>

        <p 
          onClick={() => scrollToSection('services')}
          className='hover:underline hover:decoration-2 hover:text-orange-600 cursor-pointer'
        >
          Services
        </p>

        <p 
          onClick={() => scrollToSection('education')}
          className='hover:underline hover:decoration-2 hover:text-orange-600 cursor-pointer'
        >
          Education
        </p>

        <p 
          onClick={() => scrollToSection('projects')}
          className='hover:underline hover:decoration-2 hover:text-orange-600 cursor-pointer'
        >
          Projects
        </p>

        <p 
          onClick={() => scrollToSection('contact')}
          className='hover:underline hover:decoration-2 hover:text-orange-600 cursor-pointer'
        >
          Contact
        </p>
      </div>
    </div>
  )
}

export default Nav
