import React, {Component} from 'react';
import Navigationbar from "../Navigationbar/Navigationbar";
import {Footer} from "../Footer/Footer";
import Auxi from "../Hoc/Auxi";
import Home from "../Views/Home/Home";

export default class Layout extends Component {

    render() {
        return (

            <Auxi>
                <Navigationbar> </Navigationbar>
                <Home/>
                <Footer> </Footer>
            </Auxi>

        );

    }
}
