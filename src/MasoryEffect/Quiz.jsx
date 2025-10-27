import React, { useState } from 'react'
import './App.css'
const App = () => {
    const[Ans,Setans]=useState({});
    const[Total,SetTotal]=useState(0);
    const[text,Settext]=useState("");
    const data=[
        
  {
    "id": 1,
    "question": "Which programming language is primarily used for web development?",
    "options": ["Python", "C++", "JavaScript", "Java"],
    "correct_answer": "JavaScript"
  },
  {
    "id": 2,
    "question": "What does CSS stand for?",
    "options": [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Styling Syntax",
      "Colorful Style Sheets"
    ],
    "correct_answer": "Cascading Style Sheets"
  },
  {
    "id": 3,
    "question": "Which of the following is a JavaScript framework?",
    "options": ["Django", "Flask", "React", "Laravel"],
    "correct_answer": "React"
  },
  {
    "id": 4,
    "question": "Which tag is used to define a hyperlink in HTML?",
    "options": ["<link>", "<href>", "<a>", "<p>"],
    "correct_answer": "<a>"
  },
  {
    "id": 5,
    "question": "Which database is a NoSQL database?",
    "options": ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    "correct_answer": "MongoDB"
  }
]
  const handlechecker=()=>{
    console.log(Ans);
    let count=0;
     data.forEach((q)=>{
        if(Ans[q.id] === q.correct_answer){
            count++;

        }
     })
     
    console.log(count);


    SetTotal(count);

    if(count===5){
        Settext("all rounder");
    }
    else if(count===4){
        Settext("improvement");
    }
    else if(count===3){
        Settext("improved");
    }
    else if(count===2){
        Settext("more Imrove");
    }
    else{
        Settext("fail");
    }
  }
    
  return (
    <div className='main'>
     {
       data.map((d,index)=>(
        <div className="" key={index}>
              <div  key={index} className="top">
       {d.question}
     </div>
     <div className="bot">

        {

            d.options.map((option,i)=>(
                <span>
           <li key={index}>{option}</li>
        <input  value={option} onChange={(e) => Setans((prev)=>({...prev,[d.id]:option}))}type='checkbox'/>
        </span>
            ))
        }
     </div>
        </div>
       ))

     

     }
     {text}
     <button onClick={handlechecker}>Submit</button>


     
    </div>
  )
}

export default App