// libraries
import React from 'react';
import {useTranslation} from "react-i18next";
// styles
import './footer.css';
//static
import logo_belposhta from './../../../static/logo_belposhta.png';
import logo_tehno_sky from './../../../static/Logo_TehnoSky.png';
const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="container__footer">
            <p className="text__left">{t("text_footer_left")}</p>
            <div className="text__logo_center"><img src={logo_belposhta} alt=""/></div>
            <p className="text__right">{t("text_footer_right")}</p>
            <div className="text__bottom">{t("text_footer_bottom_left")} <img className="logo_tehno_sky" src={logo_tehno_sky} alt=""/>
            <a className="link_high_tech"  href="https://high-tech.by/" target="_blank"  rel="noreferrer">High-tech.by</a></div>
        </div>
    );
};

export default Footer;