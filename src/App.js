import React from "react";
import "./App.css";
import Photo from './components/Photo.js';
import nasa from './images/nasa.jpg';
import { PageTitle } from "./components/Styles.js"

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <img className='nasa' src={nasa} alt='NASA worm logo' />
        <PageTitle>NASA Photo of the Day</PageTitle>
        <Photo />
      </div>
    </div>
  );
}

export default App;
