import React from 'react';
import { useTranslation } from "react-i18next";
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
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    const initialState = [{id: 1,title: t("title"), img:administrative_procedures, path:'/page_one'},
        {id: 2, title: t("title_two"), img: Guide,path:'/page_two'},
        {id: 3, title: t("title_three"), img: reception_schedule, path:'/page_three'},
        {id: 4, title: t("title_four"), img: structure, path:'/page_four'},
    ]


    return (
        <div className="container__main">
            {initialState.map(card => <CardMenu
                key ={card.id}
                title = {card.title}
                img = {card.img}
                path ={card.path}
            />)}
        </div>
    );
};

export default Main;