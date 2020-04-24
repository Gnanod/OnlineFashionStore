import React, {Component} from 'react';
import {
    MDBCollapse, MDBContainer,
    MDBMask,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem, MDBNavLink, MDBView
} from "mdbreact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Auxi from "../Hoc/Auxi";
import Home from "../Views/Home/Home";
import {TestComponent} from "../Views/Home/TestComponent";
import {HomePageImage} from "../Views/Home/HomePageImage";
import {ItemDetail} from "../Views/Item/ItemDetail";
import {Itemsaccordingtocategory} from "../Views/Category/Itemsaccordingtocategory";

import styled from "styled-components";

export default class Navigationbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <div>
                <header>

                        <MDBNavbar  color="black" fixed="top" dark expand="md"
                                   >
                            <MDBNavbarBrand href="/">
                                <strong>GSTD Stores</strong>
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick}/>}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to="/">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/test">Link</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/item">Profile</MDBNavLink>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBNavLink to="/cart" className="ml-auto">
                                            <ButtonContainer>
                                                <i className="fas fa-cart-plus"></i>
                                                Cart
                                            </ButtonContainer>
                                        </MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>

                    <Route exact path="/" component={HomePageImage}/>

                </header>

                <main className="container-fluid">

                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/test" component={TestComponent}/>
                            {/*<Route exact path="/item" component={ItemDetail}/>*/}
                            <Route exact path="/item/:id" component={ItemDetail}/>
                            <Route exact path="/itemsaccordingtocategory/:id" component={Itemsaccordingtocategory}/>
                        </Switch>

                </main>
            </div>
        );


    }
}
const ButtonContainer = styled.button`
 text-transform:capitalize;
 font-size:1rem;
 background:transparent; 
 color:#fff;
 border-radius:0.4rem;
 border:0rem;
 cursor:pointer;
 transition:all 0.5s ease-in-out;
 &:hover{
    background-color: black;
 }
  &:focus{
    outline:none;
 }
 
`;
