import React from 'react';
import {Link} from "react-router-dom";
//components

// styles
import './cardmenu.css'
let cardmenu = 'container__card'
const CardMenu = ({title, img,path}) => {
    return (
        <div className={cardmenu}>
            <Link className='link' to={path}>
                <p className="title">{title}</p>
                <div> {img ? <img className="img" src={img} alt=""/> : ''}</div>
            </Link>
        </div>
    );
};

export default CardMenu;