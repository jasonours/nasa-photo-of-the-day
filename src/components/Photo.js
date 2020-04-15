import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoContainer from './PhotoContainer.js';

const Photo = () => {
    const [photo, setPhoto] = useState([]);

    useEffect (() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=Rtc3FdKadp1aeG2f8RsTv3hNQf7bYjxUDDcb2FvP')
            .then(response => {
                //console.log(response)
                setPhoto(response.data);
            })
            .catch(error => console.log('ERROR!!!', error));
    }, []);
    return (
        <div className='photo'>
            <PhotoContainer photo={photo} />
        </div>
    );
};

export default Photo;