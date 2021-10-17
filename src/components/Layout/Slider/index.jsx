// libraries
import React from 'react';
import Carousel from "react-multi-carousel/lib";
import "react-multi-carousel/lib/styles.css";
//static
import img from './../../../static/image1.jpg';
import img_two from './../../../static/image2.jpg';
// styles
import './slider.css';

const Slider = () => {
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <div className="container__slider">
            <Carousel className="slider" responsive={responsive} autoPlay={true}>
                <div><img src={img} alt=""/></div>
                <div><img src={img_two} alt=""/></div>
                <div><img src={img} alt=""/></div>
                <div><img src={img_two} alt=""/></div>
                <div><img src={img} alt=""/></div>
                <div><img src={img_two} alt=""/></div>
                <div><img src={img} alt=""/></div>
            </Carousel>
        </div>
    );
};

export default Slider;