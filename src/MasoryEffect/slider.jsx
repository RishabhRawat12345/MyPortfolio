import React, { useState } from 'react'
import './App.css'
const App = () => {
  
  const Home = () => <h2>Welcome to Home</h2>;
  const About = () => <h2>This is the About page</h2>;
  const Contact = () => <h2>Contact us here</h2>;
  

  const[Page,Setpage]=useState("home");
  const handleSet=(e,targetSet)=>{
    e.preventDefault();
    Setpage(targetSet);
  }

  const render=()=>{
    switch(Page){
      case 'home':
        return <Home/>;
      case 'About':
        return <About/>;
      case 'Contact':
        return <Contact/>;
      default:
        return <Home/>
    }
  }
  return (
    <div className='main'>
      <div className="left">
        <nav>
          <a href="" onClick={(e)=>handleSet(e,'home')}>Home</a>
          <a href="" onClick={(e)=>handleSet(e,'About')}>About</a>
          <a href="" onClick={(e)=>handleSet(e,'Contact')}>Contact</a>
        </nav>
      </div>
      <div className="right">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime explicabo quia voluptas laudantium nostrum a rem quaerat architecto nobis soluta.

         {
          render()
         }

         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corporis natus voluptate quo necessitatibus placeat, repudiandae quaerat autem vitae aspernatur.
      </div>
      </div>
  )
}

export default App