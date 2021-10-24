import React from 'react';
import {useTranslation} from "react-i18next";
//components
import CardMenu from "./CardMenu";
// styles
import './main.css'
//static
import administrative_procedures from './../../../static/_administrative_procedures.jpg';
import structure from './../../../static/__structure.jpg';
import Guide from './../../../static/_Guide.jpg';
import reception_schedule from './../../../static/_reception_schedule.jpg';

const Main = () => {
    const { t } = useTranslation();
    const initialState = [
        {id: 1, title: t("title"), img: administrative_procedures, path: '/Administrative_procedures',className:"container__card" },
        {id: 2, title: t("title_two"), img: Guide, path: '/',className:"container__card"},
        {id: 3, title: t("title_three"), img: reception_schedule, path: '/',className:"container__card"},
        {id: 4, title: t("title_four"), img: structure, path: '/',className:"container__card"},
    ]


    return (
        <div className="container__main">
            <div className="cards">
                {initialState.map(card => <CardMenu
                    className={card.className}
                    key={card.id}
                    title={card.title}
                    img={card.img}
                    path={card.path}
                />)}
            </div>
        </div>
    );
};

export default Main;