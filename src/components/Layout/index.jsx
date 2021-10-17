// libraries
import React from 'react';
import {Route, Switch} from "react-router-dom";
//components
import Header from "./Header";
import Slider from "./Slider";
import Footer from "./Footer";
import Main from "./Main";
import PageOne from "../PageOne";
import PageTwo from "../PageTwo";
import PageThree from "../PageThree";
import PageFour from "../PageFour";

// styles

const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <Slider/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/page_one" component={PageOne}/>
                <Route path="/page_two" component={PageTwo}/>
                <Route path="/page_three" component={PageThree}/>
                <Route path="/page_four" component={PageFour}/>
            </Switch>
            <Footer/>
        </div>
    );
};

export default Layout;