import React, {Component} from 'react';
import Auxi from "../Hoc/Auxi";
import SideNavigationbar from "../SideNavigationbar/SideNavigationbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dashboard from "../Views/Dashboard/Dashboard";


export default class Layout extends Component {

    render() {
        return (

            <Auxi>

                   <SideNavigationbar> </SideNavigationbar>

            </Auxi>

        );

    }
}
