// libraries
import React from 'react';
import ImageGallery from 'react-image-gallery'
//static
import img from './../../../static/image1.jpg';
import img_two from './../../../static/image2.jpg';
// styles
import './slider.css';


const Slider = () => {
    const images = [
        {
            original: img,
        },
        {
            original: img_two,
        },
    ];


    return (
        <div className="container__slider">
            <ImageGallery
                items={images}/>
        </div>
    );
};

export default Slider;