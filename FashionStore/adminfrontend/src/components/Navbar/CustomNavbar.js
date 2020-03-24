import React, {Component} from 'react';
import { Navbar } from 'rsuite';

export default class CustomNavbar extends Component {

    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <a href="#" className="navbar-brand logo">RSUITE</a>
                </Navbar.Header>
            </Navbar>
        );
    };
}
