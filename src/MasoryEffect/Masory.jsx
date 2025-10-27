import React from "react";
import "./App.css";

const images = [
  "https://images.unsplash.com/photo-1746678223017-bd2fc129093a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&fm=jpg&q=60&w=3000",
  "https://images.unsplash.com/photo-1746483965671-44ed1704e4fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&fm=jpg&q=60&w=3000",
  "https://images.unsplash.com/photo-1759778276302-0e75b90aa4a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&fm=jpg&q=60&w=3000",
  "https://plus.unsplash.com/premium_photo-1757322537721-c7d714cd2dc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8&fm=jpg&q=60&w=3000",
  "https://images.unsplash.com/photo-1760443267021-8df5fa55204e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8&fm=jpg&q=60&w=3000"
];

const App = () => {
  return (
    <div className="masonry">
      {images.map((src, index) => (
        <div className="masonry-item" key={index}>
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default App;
