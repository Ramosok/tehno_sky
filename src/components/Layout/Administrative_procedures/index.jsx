import React from 'react';
import {useTranslation} from "react-i18next";
import {Link, useRouteMatch, Route, Switch} from "react-router-dom";
//
import CardMenu from "./../../Layout/Main/CardMenu";
import Page_one from "../Page_one";
//
import down from './../../../static/down.png';
import logo_belposhta_card from './../../../static/logo_belposhta_card.png';
//
import './Administrative_procedures.css'

const Administrative_procedures = () => {
    const {t} = useTranslation();
    let {path} = useRouteMatch();

    const initialState = [
        {
            id: 1, title: t("page"),
            img: logo_belposhta_card,
            className: "container__card box_shadow",
            path: 'Pageone'
        },
        {
            id: 2,
            title: t("procedure"),
            img: logo_belposhta_card,
            className: "container__card box_shadow",
            path: '/Administrative_procedures'
        },
        {
            id: 3,
            title: t("procedure_two"),
            img: logo_belposhta_card,
            className: "container__card box_shadow",
            path: '/Administrative_procedures'
        },
        {
            id: 4,
            title: t("procedure_three"),
            img: logo_belposhta_card,
            className: "container__card box_shadow",
            path: '/Administrative_procedures'
        },
    ]

    return (
        <Switch>
            <Route path={`${path}/:Pageone`} component={Page_one}/>
            <div className="container__administrative_procedures">
                <Link className="down" to='/'><img src={down} alt=""/></Link>
                <h1 className="heading heading__margin__left">{t("title")}</h1>
                <div className="cards">
                    {initialState.map(card => <CardMenu
                        className={card.className}
                        key={card.id}
                        title={card.title}
                        img={card.img}
                        path={`${path}/${card.path}`}
                    />)}
                </div>
            </div>
        </Switch>
    );
};

export default Administrative_procedures;