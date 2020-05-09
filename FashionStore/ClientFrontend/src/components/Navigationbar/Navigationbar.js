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
import Cart from "../Views/Home/Cart";
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
            fname: "",
            lname: "",
            email: "",
            gender: ""
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
            modal2: false,
            fname: "",
            lname: "",
            email: "",
            gender: ""

        });
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


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
                                    <MDBBtn color="dark" onClick={this.toggle}> <i className="fas fa-user"></i>&nbsp;&nbsp;&nbsp;Login</MDBBtn>
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
                        <Route exact path="/Cart" component={Cart}/>
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
                                        {/*<MDBInput label="Your email" group type="email" validate error="wrong" success="right"/>*/}
                                        {/*<MDBInput label="Your password" group type="password" validate containerClass="mb-0"/>*/}

                                        <form className="needs-validation" onSubmit={this.submitHandler} noValidate>
                                            <MDBRow>
                                                {/*<MDBCol  md="12" className="mb-3">*/}
                                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">First name</label>
                                                <input value={this.state.fname} name="fname" onChange={this.changeHandler} type="text" id="defaultFormRegisterNameEx" className="form-control" placeholder="First name" required/>
                                                <div className="invalid-feedback">Please provide the first name.</div>

                                                {/*</MDBCol>*/}
                                                {/*<MDBCol  md="12" className="mb-3">*/}
                                                <label htmlFor="defaultFormRegisterEmailEx2" className="grey-text">Last name</label>
                                                <input value={this.state.lname} name="lname" onChange={this.changeHandler} type="text" id="defaultFormRegisterEmailEx2" className="form-control" placeholder="Last name" required/>
                                                <div className="invalid-feedback">Please provide the last name.</div>

                                                {/*</MDBCol>*/}
                                                {/*<MDBCol md="4" className="mb-3">*/}
                                                <label htmlFor="defaultFormRegisterConfirmEx3" className="grey-text">Email</label>
                                                <input value={this.state.email} onChange={this.changeHandler} type="email" id="defaultFormRegisterConfirmEx3" className="form-control" name="email" placeholder="Your Email address"/>
                                                <div className="invalid-feedback">Please provide an email.</div>

                                                {/*</MDBCol>*/}
                                            </MDBRow>
                                            <MDBRow>
                                                {/*<MDBCol md="6" className="mb-0">*/}
                                                <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Date of Birth</label>
                                                <input onChange={this.changeHandler} type="date" id="defaultFormRegisterPasswordEx4" className="form-control" name="DOB" placeholder="Date of Birth" required/>
                                                <div className="invalid-feedback">Please provide DOB</div>

                                                {/*</MDBCol>*/}
                                                {/*<MDBCol md="6" className="mb-0">*/}
                                                <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">State</label>
                                                <input value={this.state.gender} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name="gender" placeholder="Gender" required/>
                                                <div className="invalid-feedback">Please provide your gender.</div>

                                                {/*</MDBCol>*/}
                                            </MDBRow>
                                            <br></br>
                                            <MDBBtn  gradient="blue" rounded className="btn-block z-depth-1a" type="submit">
                                                REGISTER
                                            </MDBBtn>
                                        </form>
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
