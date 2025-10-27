import React from 'react';
import './App.css'
const App = () => {
  return (
    <div>
      <nav>
        <div className="nav-item">
           <div className="popup">This is Home popup</div>
          <a href="#">Home</a>
        </div>
        <div className="nav-item">
          <div className="popup">This is About popup</div>
          <a href="#">About</a>
        </div>

        <div className="nav-item">
            <div className="popup">This is Contact popup</div>
          <a href="#">Contact</a>
        
        </div>
      </nav>
    </div>
  );
};

export default App;
