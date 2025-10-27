import React, { useState } from 'react'
import './App.css'
const App = () => {

  const [Show,Setshow]=useState(false);

  const handleChange=()=>{
    Setshow(!Show);
  }
  return (
    <div className='main'>
      <h1>freqently Asked Questions</h1>
      <p>here are some of the frequently asked questions</p>
       <div className="item">
        <button onClick={handleChange}>What is roadmap.sh?</button>
        {
            Show &&(
                <div className="text">
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequatur.

          </p>
        </div>
            )

        }
        
        
       
       </div>
    </div>
  )
}

export default App