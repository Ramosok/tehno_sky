import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
//
import home from './../../../static/Home.png';
import down from "../../../static/down.png";
//
import './pageOne.css'


const Page_one = () => {
    const {t} = useTranslation();
    return (
        <div className="container__administrative_procedures">
            <div className="container__administrative_procedures__position">
                <Link className="down" to='/'><img src={home} alt=""/></Link>
                <h1 className="heading">{t("title.page_one")}</h1>
                <Link className="down" to='/Administrative_procedures'><img src={down} alt=""/></Link>
            </div>
            <div className="text__container__pege_one"><p>{t("text_page_one")}</p></div>
        </div>
    );
};

export default Page_one;