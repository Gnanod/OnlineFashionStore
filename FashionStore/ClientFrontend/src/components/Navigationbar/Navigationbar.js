import React, {Component} from 'react';
import {
    MDBCard, MDBCardBody,
    MDBCollapse, MDBContainer, MDBIcon, MDBInput,
    MDBMask,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem, MDBNavLink, MDBRow, MDBView
} from "mdbreact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Auxi from "../Hoc/Auxi";
import Home from "../Views/Home/Home";
import {TestComponent} from "../Views/Home/TestComponent";
import {HomePageImage} from "../Views/Home/HomePageImage";
import {ItemDetail} from "../Views/Item/ItemDetail";
import './Navigationbar.css'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter , MDBCol} from 'mdbreact';
import {Itemsaccordingtocategory} from "../Views/Category/Itemsaccordingtocategory";

import styled from "styled-components";

export default class Navigationbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            modal: false,
            model2 : false,

        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggle2 = () => {
        this.setState({
            modal: !this.state.modal,
            modal2: !this.state.model2
        });
    }

    toggle3 = () => {
        this.setState({
            modal2: false
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
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBBtn color="dark" onClick={this.toggle}>Login</MDBBtn>
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
                            <Route exact path="/item/:id/:colorId" component={ItemDetail}/>
                            <Route exact path="/itemsaccordingtocategory/:id" component={Itemsaccordingtocategory}/>
                        </Switch>

                    <MDBContainer>
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBModalHeader toggle={this.toggle} ></MDBModalHeader>
                            <MDBModalBody>
                                            <MDBCard>
                                                <MDBCardBody className="mx-4">
                                                    <div className="text-center">
                                                        <h2 className="loginh3 mb-5">
                                                            <strong className="loginh3 ">LOGIN</strong>
                                                        </h2>
                                                    </div>
                                                    <MDBInput label="Your email" group type="email" validate error="wrong" success="right"/>
                                                    <MDBInput label="Your password" group type="password" validate containerClass="mb-0"/>
                                                    <div className="text-center mb-3">
                                                        <MDBBtn type="button" gradient="blue" rounded className="btn-block z-depth-1a">
                                                            LOGIN
                                                        </MDBBtn>
                                                    </div>
                                                </MDBCardBody>
                                            </MDBCard>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Not a member?
                                        <MDBBtn outline color="info"  size="sm" onClick={this.toggle2}>Sign In</MDBBtn>
                                    </p>
                                </MDBModalFooter>
                            </MDBModalBody>
                        </MDBModal>
                    </MDBContainer>


                    <MDBContainer>
                        <MDBModal isOpen={this.state.modal2} toggle={this.toggle3}>
                            <MDBModalHeader toggle={this.toggle3} ></MDBModalHeader>
                            <MDBModalBody>
                                <MDBCard>
                                    <MDBCardBody className="mx-4">
                                        <div className="text-center">
                                            <h2 className="loginh3 mb-5">
                                                <strong className="loginh3 ">REGISTER</strong>
                                            </h2>
                                        </div>
                                        <MDBInput label="Your email" group type="email" validate error="wrong" success="right"/>
                                        <MDBInput label="Your password" group type="password" validate containerClass="mb-0"/>
                                        <div className="text-center mb-3">
                                            <MDBBtn type="button" gradient="blue" rounded className="btn-block z-depth-1a">
                                                REGISTER
                                            </MDBBtn>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBModalBody>
                        </MDBModal>
                    </MDBContainer>

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
