import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoContainer from './PhotoContainer.js';
import './photoStyle.css';

const Photo = () => {
    const [photo, setPhoto] = useState([]);
    const [date, setDate] = useState([]);

    useEffect (() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=Rtc3FdKadp1aeG2f8RsTv3hNQf7bYjxUDDcb2FvP&date=${date}`)
            .then(response => {
                //console.log(response)
                setPhoto(response.data);
            })
            .catch(error => console.log('ERROR!!!', error));
    }, []);
    return (
        <div className='photo'>
            <button onClick={() => setDate({date} - 1 )}>Previous</button>
            <button onClick={() => setDate({date} + 1)}>Next</button>
            <PhotoContainer photo={photo} />
        </div>
    );
};

export default Photo;