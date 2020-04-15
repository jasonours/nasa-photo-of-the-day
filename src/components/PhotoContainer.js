import React from 'react';
import './photoStyle.css';
// import Photo from '.Photo.js'

const PhotoContainer = (props) => {
    const photo = props.photo;

    //const [date, setDate] = useState([]);

    return (
        <div>
            <div className='photoOTD'>
                {/* <button onClick={() => setDate(date - 1)}>Previous</button> */}
                <img className='nasaImg' src ={photo.hdurl} alt="Starry sky" />
                {/* <button onClick={() => setDate(date + 1)}>Next</button> */}
            </div>
            <div className='nasaInfo'>
                <h2>{photo.title}</h2>
                <h3>{photo.date}</h3>
                <p className='explanation'>{photo.explanation}</p>
            </div>
        </div>
    ); 
};


export default PhotoContainer;