// libraries
import React from 'react';
import {Route, Switch} from "react-router-dom";
//components
import Header from "./Header";
import Slider from "./Slider";
import Footer from "./Footer";
import Main from "./Main";
import Administrative_procedures from "./Administrative_procedures";


// styles

const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <Slider/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/Administrative_procedures" component={Administrative_procedures}/>
            </Switch>
            <Footer/>
        </div>
    );
};

export default Layout;