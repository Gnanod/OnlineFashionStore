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

export default class SupplierDetails extends Component{

    constructor(props) {
        super(props);


        this.state = {
            companyName: '',
            companyWebsite: '',
            description: '',
            firstName: '',
            lastName: '',
            companyNumber: '',
            mobileNumber: '',
            email: '',
            fax: '',
            address1: '',
            address2: '',
            city: '',
            country: '',
            state: ''

        }

}
    render(){
        return(
<div className="bg">

    <div><h1 className="font-weight-bold text-center">Supplier Details</h1></div>
            <div className=" container-fluid BrandCategoryMain" >

                <br/>
                <br/>
                <MDBRow>
                    <MDBCol size="6">

                        <MDBCard className="card">
                            <MDBCardBody>
                                <MDBCardTitle>Supplier</MDBCardTitle>
                                <form>
                                    <MDBInput label="Company Name" size="sm"
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

                                    <MDBInput label="Website" size="sm"

                                              value={this.state.description}
                                    />
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea2">Description</label>
                                        <textarea className="form-control rounded-0" id="exampleFormControlTextarea2"
                                                  rows="3"></textarea>
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

                    </MDBCol>


                    <MDBCol size="6">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Contact Infromation</MDBCardTitle>
                                <form>
                                    <MDBInput label="First Name" size="sm"
                                              value={this.state.companyName}

                                    />

                                    <MDBInput label="Last Name" size="sm"
                                              value={this.state.companyName}

                                    />
                                    <MDBInput label="Company Number" size="sm"
                                              value={this.state.companyName}

                                    />
                                    <MDBInput label="Mobile Number" size="sm"
                                              value={this.state.companyName}

                                    />
                                    <MDBInput label="Email" size="sm"
                                              value={this.state.companyName}

                                    />
                                    <MDBInput label="Fax" size="sm"
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


                    <MDBCol size="6">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Address Infromation</MDBCardTitle>
                                <form>
                                    <MDBInput label="Address 1" size="sm"
                                              value={this.state.companyName}

                                    />

                                    <MDBInput label="Address 2" size="sm"
                                              value={this.state.companyName}

                                    />
                                    <MDBInput label="Town/City" size="sm"
                                              value={this.state.companyName}

                                    />
                                    <MDBInput label="Country" size="sm"
                                              value={this.state.companyName}

                                    />
                                    <MDBInput label="State" size="sm"
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

