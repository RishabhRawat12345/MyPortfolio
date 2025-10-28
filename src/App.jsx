import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Body from './Components/Body';
import Services from './Components/Services';
import Education from './Components/Educations';
import ContactForm from './Components/ContactForm';
import Project from './Components/Project';

const App = () => {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <Nav />

      <main className="flex flex-col items-center justify-center space-y-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <section id="home" className="w-full"><Body /></section>
        <section id="services" className="w-full"><Services /></section>
        <section id="education" className="w-full"><Education /></section>
        <section id="projects" className="w-full"><Project /></section>
        <section id="contact" className="w-full"><ContactForm /></section>
      </main>
    </div>
  );
};

export default App;
