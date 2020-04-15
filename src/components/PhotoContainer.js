import React from 'react';
import './photoStyle.css';

const PhotoContainer = (props) => {
    const photo = props.photo;

    return (
        <div>
            <div className='photoOTD'>
                <img className='nasaImg' src ={photo.hdurl} alt="Starry sky" />
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