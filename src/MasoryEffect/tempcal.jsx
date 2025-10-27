import React, { useState } from 'react'
import './App.css'
const App = () => {
    const [Toggle,Settoggle]=useState('kelevin');
    const [Right,SetRight]=useState('kelevin');
    const [val,Setval]=useState(0);
    const[output,Setoutput]=useState(0);
    const handlesubmit=()=>{
       let temp=val;

       //input

       if(Toggle==='celcius'){
         Setoutput(temp);
       }
       else if(Toggle==='kelevin'){
        Setoutput(temp-237.15);
       }
       else if(Toggle==='Feheinite'){
           Setoutput((temp - 32) * (5 / 9))
       }

       //output

         if(Right==='celcius'){
         Setoutput(temp);
       }
       else if(Right==='kelevin'){
        Setoutput(temp-237.15);
       }
       else if(Right==='Feheinite'){
           Setoutput((temp - 32) * (5 / 9))
       }
    }
  return (
    <div className='main'>
      <h1>Temperature Convert</h1>
      <p>Enter the Temperature and select the unit submit</p>
        <div className="bottom">
            <input type="text" onClick={(e)=>Setval(e.target.value)} />
            <select name="from Unit" id="" onChange={(e)=>Settoggle(e.target.value)}>
                <option value="">Kelevin</option>
                <option value="">feheinite</option>
                <option value="">celcius</option>
            </select>
            <select name="from Unit" id="" onChange={(e)=>SetRight(e.target.value)}>
                <option value="">Kelevin</option>
                <option value="">feheinite</option>
                <option value="">celcius</option>
            </select>
            {
                output
            }
            <button  onClick={handlesubmit}> Submit</button>
        </div>
    </div>
  )
}

export default App