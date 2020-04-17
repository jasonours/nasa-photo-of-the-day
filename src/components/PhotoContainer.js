import React from 'react';
import { Explanation, PhotoTitle, Date, NasaImage, TopContainer} from "./Styles.js"
// import Photo from '.Photo.js'

const PhotoContainer = (props) => {
    const photo = props.photo;

    return (
        <div>
            <TopContainer>
                <NasaImage src ={photo.hdurl} alt="Starry sky" />
            </TopContainer>
            <div className='nasaInfo'>
                <PhotoTitle>{photo.title}</PhotoTitle>
                <Date>{photo.date}</Date>
                <Explanation>{photo.explanation}</Explanation>
            </div>
        </div>
    ); 
};


export default PhotoContainer;