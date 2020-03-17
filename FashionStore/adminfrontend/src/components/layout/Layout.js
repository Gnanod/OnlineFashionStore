import React, {Component} from 'react';
import {Footer} from "../Footer/Footer";
import Auxi from "../Hoc/Auxi";
import SideNavigationbar from "../SideNavigationbar/SideNavigationbar";

export default class Layout extends Component {

    render() {
        return (

            <Auxi>
                <SideNavigationbar> </SideNavigationbar>

                {/*<Footer> </Footer>*/}
            </Auxi>

        );

    }
}
