import React, {Component} from 'react';
import Navigationbar from "../Navigationbar/Navigationbar";
import {Footer} from "../Footer/Footer";
import Auxi from "../Hoc/Auxi";
import Home from "../Views/Home/Home";

import {Route, Switch} from "react-router-dom";

export default class Layout extends Component {

    render() {
        return (

            <Auxi>
                <Navigationbar> </Navigationbar>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>

                <Footer> </Footer>
            </Auxi>


        );

    }
}
