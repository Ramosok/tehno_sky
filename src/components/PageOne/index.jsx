import React from 'react';
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";
//
import './pageOne.css'

import down from './../../static/down.png';
import CardMenu from "../Layout/Main/CardMenu";

const PageOne = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    const initialState = [{id: 1,title: t("page"),},
        {id: 2, title: t("procedure"),},
        {id: 3, title: t("procedure_two"),},
        {id: 4, title: t("procedure_three"),},
    ]

    return (
        <div className="container__page__one">
            <Link className="down" to='/'><img src={down} alt=""/></Link>
            <h1 className="heading">{t("title")}</h1>
            <div className="container__card__page__one">
                {initialState.map(card => <CardMenu
                    key ={card.id}
                    title = {card.title}
                    path='/'
                />)}

            </div>
        </div>
    );
};

export default PageOne;