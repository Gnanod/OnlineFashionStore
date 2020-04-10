import React,{Component} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, MDBAnimation} from 'mdbreact';
import './Login.css';
import { MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBModalFooter } from 'mdbreact';

export default  class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login(){
        localStorage.setItem("userLogged","userLog");
        this.props.history.push('/');
        window.location.reload();
    }

    render() {
        return (
            <div id='apppage'>
                <Router>
                    <div>
                        <MDBNavbar>
                        </MDBNavbar>
                    </div>
                </Router>
                <MDBView>
                    <MDBMask className='white-text gradient' />
                    <MDBContainer
                        style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                        className='d-flex justify-content-center white-text align-items-center'
                    >
                        <MDBRow>
                            <MDBCol md='6' className='text-center text-md-left mt-xl-5 mb-5'>
                                <MDBAnimation type='fadeInLeft' delay='.3s'>
                                    <MDBCard className="loginContainer" >
                                        <MDBCardBody className="mx-4">
                                            <div className="text-center">
                                                <h3 className="dark-grey-text mb-5">
                                                    <strong>Admin Login</strong>
                                                </h3>
                                            </div>
                                            <MDBInput label="Username" group type="email"  validate error="wrong" success="right" />
                                            <MDBInput label="Password" group type="password" validate containerClass="mb-0"/>
                                            <div className="text-center mb-3">
                                                <MDBBtn type="button" color='pink' className="btn-block z-depth-1a buttonSign " onClick={this.login}>
                                                    LOGIN
                                                </MDBBtn>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBAnimation>
                            </MDBCol>

                            <MDBCol md='6' xl='6' className='mt-xl-5'>
                                <MDBAnimation type='fadeInRight' delay='.3s'>
                                    <img src='/image/Bag.png' alt='' className='img-fluid'/>
                                </MDBAnimation>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        );
    }
}
