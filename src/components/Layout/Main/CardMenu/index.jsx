import React from 'react';
import {Link} from "react-router-dom";
//components

// styles
import './cardmenu.css'

const CardMenu = ({title, img,path,className}) => {
    return (
        <div className={className}>
            <Link className="link" to={path}>
                <p className="title">{title}</p>
                <div> <img className="img" src={img} alt=""/></div>
            </Link>
        </div>
    );
};

export default CardMenu;