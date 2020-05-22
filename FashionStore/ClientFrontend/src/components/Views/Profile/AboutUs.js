import React, {Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import {
    MDBRow,
    MDBCol,
    MDBCardBody, MDBCard, MDBIcon, MDBCardTitle, MDBCardImage, MDBBtn, MDBCardText,

} from 'mdbreact';
import './AboutUs.css';
import 'sweetalert2/src/sweetalert2.scss';
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink,  } from
        "mdbreact"


export default class AboutUs extends Component {
    state = {
        activeItem: "1"
    }

    toggle = tab => () => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    }


    render() {
        return (
            <div id='parallaxintro'>
                <MDBCard className="my-5 px-5 pb-5">
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md="12">

                                <section class="my-5">
                                        <div class="col-lg-7">
                                            <div id="map-container-section" class="z-depth-1-half map-container-section mb-4" style={{height: "400px"}}>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7984671121426!2d79.97075581409538!3d6.914682820412032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1590153528945!5m2!1sen!2slk" frameborder="0"
                                                        style= {{border:"0"}} allowfullscreen></iframe>
                                            </div>

                                            <div class="row text-center">
                                                <div class="col-md-4">
                                                    <MDBCol size="1">
                                                        <MDBIcon icon="map-marker-alt" size="lg"
                                                                 className="indigo-text"/>
                                                    </MDBCol>
                                                    <p>SLIIT Malabe Campus, New Kandy Rd, Malabe 10115</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <MDBCol size="1">
                                                        <MDBIcon icon="phone" size="lg"
                                                                 className="indigo-text"/>
                                                    </MDBCol>
                                                    <p>+ 01 234 567 89</p>

                                                </div>
                                                <div class="col-md-4">
                                                    <MDBCol size="1">
                                                        <MDBIcon icon="envelope" size="lg"
                                                                 className="indigo-text"/>
                                                    </MDBCol>
                                                    <p>info@gmail.com</p>

                                                </div>
                                            </div></div>
                                </section>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>


            </div>
        );
    }
}
