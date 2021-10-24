// libraries
import React, {useCallback, useEffect, useState} from 'react';
import Clock from 'react-live-clock';
import {useTranslation} from "react-i18next";
//api
import {getUserLocation} from "../../../api/location";
import {getCurrentWeather} from "../../../api/weather";
// styles
import './header.css';

const Header = () => {
    const {i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    let lang = i18n.resolvedLanguage

    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = useCallback (async () => {
        const coords = await new Promise(resolve => {
            navigator.geolocation.getCurrentPosition(data => {
                resolve(data.coords);
            });
        });
        try {
            const {city = ''} = await getUserLocation(coords.latitude, coords.longitude) || {};

            const data = await getCurrentWeather({query: city});
            setWeatherData(data);
        } catch (e) {
            console.log(e);
        }
    }, []);
    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    return (
        <div className="header">
            <Clock className="clock" format={'HH:mm'} ticking={true}/>
           <div className="weather">
                <div>{weatherData ? weatherData.current.temperature : '...'}&#xb0;С</div>
                <div className="info__center-image">
                    <img src={weatherData ? weatherData.current.weather_icons : '...'} alt=""/>
                </div>
            </div>
            <select className="select" onChange={(event) => changeLanguage(event.target.value)} name="select">
                <option value="ru">ru</option>
                <option value="en">en</option>
            </select>

        </div>
    );
};
export default Header;