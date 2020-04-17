import React from "react";
import "./App.css";
import Photo from './components/Photo.js';
import nasa from './images/newnasa.png';
import { PageTitle, NasaLogo } from "./components/Styles.js"

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <NasaLogo src={nasa} alt='NASA worm logo' />
        <PageTitle>NASA Photo of the Day</PageTitle>
        <Photo />
      </div>
    </div>
  );
}

export default App;
