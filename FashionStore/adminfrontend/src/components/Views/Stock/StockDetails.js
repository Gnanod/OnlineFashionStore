import React, { Component } from 'react'
import './StyleSP/Stock.css'
import {
    MDBAlert,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBInput,
    MDBRow, MDBTable,
    MDBTableBody, MDBTableHead
} from "mdbreact";

import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

import constants from '../../Constants/constants';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default class StockDetails extends Component{

    constructor(props) {
        super(props);


        this.state = {
            companyName: '',
            companyWebsite: '',
            description: ''
        }

    }
    render(){
        return(
            <div className="bg">
                <div className=" container-fluid BrandCategoryMain" >

                    <br/>
                    <br/>
                    <MDBRow>
                        <MDBCol size="6">
                            <div className="card">
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardTitle>Product Details</MDBCardTitle>
                                        <form>
                                            <MDBInput label="Brand" size="sm"

                                                      value={this.state.description}
                                            />
                                            <MDBInput label="Supplier" size="sm"

                                                      value={this.state.description}
                                            />
                                            <MDBInput label="Category" size="sm"
                                                      value={this.state.companyName}

                                            />
                                            {/*{*/}
                                            {/*this.state.brandNameValidation ? <MDBAlert color="danger">*/}
                                            {/*Brand Name Field Is Empty*/}
                                            {/*</MDBAlert> : ''*/}
                                            {/*}*/}



                                            {/*{*/}
                                            {/*this.state.brandCodeValidation ? <MDBAlert color="danger">*/}
                                            {/*Brand Code Field Is Empty*/}
                                            {/*</MDBAlert> : ''*/}
                                            {/*}*/}

                                            <MDBInput label="Size" size="sm"

                                                        value={this.state.description}
                                        />
                                            <MDBInput label="Colour" size="sm"

                                                      value={this.state.description}
                                            />


                                            <div className="md-form">
                                                <input placeholder="Start date" type="text" id="date-picker-example"
                                                       className="form-control datepicker"/>

                                            </div>

                                            <div className="md-form">
                                                <input placeholder="End date" type="text" id="date-picker-example"
                                                       className="form-control datepicker"/>

                                            </div>
                                            {/*{*/}
                                            {/*this.state.brandDiscountValidation ? <MDBAlert color="danger">*/}
                                            {/*Discount Field Is Empty*/}
                                            {/*</MDBAlert> : ''*/}
                                            {/*}*/}
                                            <MDBBtn type="submit">Save</MDBBtn>
                                        </form>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                        </MDBCol>


                        <MDBCol size="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardTitle>Stock Prices</MDBCardTitle>
                                    <form>
                                        <MDBInput label="Buying Price" size="sm"
                                                  value={this.state.companyName}

                                        />

                                        <MDBInput label="Selling Price" size="sm"
                                                  value={this.state.companyName}

                                        />
                                        <MDBInput label="Quantity" size="sm"
                                                  value={this.state.companyName}

                                        />
                                        <MDBInput label="Discount" size="sm"
                                                  value={this.state.companyName}

                                        />

                                        {/*{*/}
                                        {/*this.state.brandNameValidation ? <MDBAlert color="danger">*/}
                                        {/*Brand Name Field Is Empty*/}
                                        {/*</MDBAlert> : ''*/}
                                        {/*}*/}



                                        {/*{*/}
                                        {/*this.state.brandCodeValidation ? <MDBAlert color="danger">*/}
                                        {/*Brand Code Field Is Empty*/}
                                        {/*</MDBAlert> : ''*/}
                                        {/*}*/}


                                        {/*{*/}
                                        {/*this.state.brandDiscountValidation ? <MDBAlert color="danger">*/}
                                        {/*Discount Field Is Empty*/}
                                        {/*</MDBAlert> : ''*/}
                                        {/*}*/}
                                        <MDBBtn type="submit">Save</MDBBtn>
                                    </form>
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>



                    </MDBRow>
                </div>
            </div>

        );
    }
}

