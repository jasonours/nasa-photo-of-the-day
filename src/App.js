import React from "react";
import "./App.css";
import Photo from './components/Photo.js';
import nasa from './images/nasa.jpg';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <img className='nasa' src={nasa} alt='NASA worm logo' />
        <h1>NASA Photo of the Day</h1>

        <Photo />
      </div>
    </div>
  );
}

export default App;
