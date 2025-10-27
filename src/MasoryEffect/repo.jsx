import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const[language,Setlanguage]=useState("javascript");
  const[repo,Setrepo]=useState([]);
  const handlesubmit=()=>{
    const randomPage = Math.floor(Math.random() * 10) + 1;
    fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=${randomPage}`,{
       headers: {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.items && data.items.length){
       const randomRepo=data.items[Math.floor(Math.random()*data.items.length)]
       Setrepo(randomRepo);
    }})
    .catch(err=>console.log(err))
  }
   useEffect(() => {
    handlesubmit(); 
  }, [language]);

  useEffect(() => {
    console.log('Updated repo:', repo);
  }, [repo]);

  return (
    <div className='main'>
      <select value={language} onChange={(e)=>Setlanguage(e.target.value)}>
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
        <option value="php">php</option>
        <option value="java">java</option>
      </select>
         {
          repo &&(
            <div className="text">
                <li><strong>{repo.name}</strong></li>
                <li><strong>{repo.description}</strong></li>
            </div>
          )
         }
    </div>
  )
}

export default App