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
    MDBRow
} from "mdbreact";

import 'sweetalert2/src/sweetalert2.scss'
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import constants from "../../Constants/constants";
import Swal from 'sweetalert2/dist/sweetalert2.js';


export default class StockDetails extends Component{

    constructor(props) {
        super(props);


        this.state = {
            // startDate: Date,
            // startDateValidation: false,
            // endDate: Date,
            // endDateValidation: false,
            buyingPrice: 0,
            buyingPriceValidation: false,
            sellingPrice: 0,
            sellingPriceValidation: false,
            quantity: 0,
            quantityValidation: false,
            discount: 0,
            discountValidation: false,
            totalPrice: 0,
            totalPriceValidation: false
            // suppliers: [],
            // selectedSupplierObject: ' ',
            // selectedSupplierObjectValidation: false
        }

        // this.onChangeStartDate = this.onChangeStartDate.bind(this);
        // this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeBuyingPrice = this.onChangeBuyingPrice.bind(this);
        this.onChangeSellingPrice = this.onChangeSellingPrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeDiscount = this.onChangeDiscount.bind(this);
        this.onChangeTotalPrice = this.onChangeTotalPrice.bind(this);
        this.onSubmitPrices = this.onSubmitPrices.bind(this);
        // this.getAllSuppliers = this.getAllSuppliers.bind(this);
        // this.getAllItemColourId = this.getAllItemColourId.bind(this);
        // this.onChangeGetCompanyName = this.onChangeGetCompanyName.bind(this);
    }

    // onChangeStartDate(e){
    //     this.setState({
    //         startDate: e.target.value,
    //         startDateValidation: false
    //     })
    //
    // }
    // onChangeEndDate(e){
    //     this.setState({
    //         endDate: e.target.value,
    //         endDateValidation: false
    //     })
    //
    // }
    //
    // getAllSuppliers() {
    //     axios.get(constants.backend_url + '/api/supplier/getAllSuppliers').then(response => {
    //         this.setState({suppliers: response.data});
    //     }).catch(function (error) {
    //         console.log(error);
    //     })
    //     console.log(this.state.suppliers);
    // }

    // getAllItemColourId() {
    //     axios.get(constants.backend_url + '/api/supplier/getAllSuppliers').then(response => {
    //         this.setState({suppliers: response.data});
    //     }).catch(function (error) {
    //         console.log(error);
    //     })
    //     console.log(this.state.suppliers);
    // }

    // onChangeGetCompanyName(value) {
    //     console.log(value)
    //     this.state.selectedSupplierObject = value;
    //     this.setState({
    //         selectedSupplierObject: this.state.selectedSupplierObject,
    //         selectedSupplierObjectValidation: false
    //     });
    //
    // }

    onChangeBuyingPrice(e)
    {
        this.setState({
            buyingPrice: e.target.value,
            buyingPriceValidation: false
        });

    }
    onChangeSellingPrice(e)
    {
        this.setState({
            sellingPrice: e.target.value,
            sellingPriceValidation: false
        });

    }
    onChangeQuantity(e)
    {
        this.setState({
            quantity: e.target.value,
            quantityValidation: false
        });

    }
    onChangeDiscount(e)
    {
        this.setState({
            discount: e.target.value,
            discountValidation: false
        });

    }

    onChangeTotalPrice(e)
    {
        this.setState({
            totalPrice: e.target.value,
            totalPriceValidation: false
        });

    }

    onSubmitPrices(e)
    {
        e.preventDefault();

        console.log("ABcccccc");
        console.log(this.state.buyingPrice);
        if (this.state.buyingPrice !== 0){
            console.log("xxxxxxxxxxxxxxxxx");
            if(this.state.sellingPrice !== 0){
                if(this.state.quantity !== 0){
                    if(this.state.discount !== 0){
                        if(this.state.totalPrice !== 0){
                            const stockPrices = {
                                buyingPrice: this.state.buyingPrice,
                                sellingPrice: this.state.sellingPrice,
                                quantity: this.state.quantity,
                                discount: this.state.discount,
                                totalPrice: this.state.totalPrice
                            }
                            axios.post(constants.backend_url + 'api/stockprice/add', stockPrices)
                                .then(res => {
                                        console.log(res)
                                        if (res.data.stockPrice === 'successful') {
                                            Swal.fire(
                                                '',
                                                'Stock Details Added Successfully.',
                                                'success'
                                            );
                                            this.setState({
                                                buyingPrice: 0,
                                                sellingPrice: 0,
                                                quantity: 0,
                                                discount: 0,
                                                totalPrice: 0
                                            })
                                            // this.getAllStockPrice();

                                        } else {
                                            Swal.fire(
                                                '',
                                                'Stock Details Added Fail',
                                                'error'
                                            )
                                        }
                                    }
                                );
                        }else{
                            this.setState({
                                totalPriceValidation: true
                            })
                        }
                    }else{
                        this.setState({
                            discountValidation: true
                        })
                    }
                }else{
                    this.setState({
                        quantityValidation: true
                    })
                }
            }else{
                this.setState({
                    sellingPriceValidation: true
                })
            }
        }else{
            this.setState({
                buyingPriceValidation: true
            })
        }
    }


    render(){
        return(
            <div className="bg">

                <div><h1 className="font-weight-bold text-center">Stock Details</h1></div>

                <div className=" container-fluid BrandCategoryMain" >

                    <br/>
                    <br/>
                    <MDBRow>
                        {/*<MDBCol size="6">*/}
                        {/*    <div className="card">*/}
                        {/*        <MDBCard>*/}
                        {/*            <MDBCardBody>*/}
                        {/*                <MDBCardTitle>Stock Details</MDBCardTitle>*/}
                        {/*                <form>*/}
                        {/*                    <Autocomplete*/}
                        {/*                        id="combo-box-demo"*/}
                        {/*                        options={this.state.supplier}*/}
                        {/*                        getOptionLabel={(option) => option.companyName}*/}
                        {/*                        style={{width: 300}}*/}
                        {/*                        onChange={(event, value) => this.onChangeGetCompanyName(value)}*/}
                        {/*                        renderInput={(params) => <TextField {...params} label="Supplier"/>}*/}
                        {/*                        size="sm"*/}
                        {/*                    />*/}
                        {/*                    <MDBInput label="Item ColourID" size="sm"*/}
                        {/*                              value={this.state.itemColorId}*/}

                        {/*                    />*/}
                        {/*                    <Autocomplete*/}
                        {/*                        id="combo-box-demo"*/}
                        {/*                        options={this.state.itemColorId}*/}
                        {/*                        getOptionLabel={(option) => option.brandName}*/}
                        {/*                        style={{width: 300}}*/}
                        {/*                        onChange={(event, value) => this.onChangeGetBrandName(value)}*/}
                        {/*                        renderInput={(params) => <TextField {...params} label="Item ColourID"/>}*/}
                        {/*                        size="sm"*/}
                        {/*                    />*/}


                        {/*                    {*/}
                        {/*                    this.state.brandNameValidation ? <MDBAlert color="danger">*/}
                        {/*                    Brand Name Field Is Empty*/}
                        {/*                    </MDBAlert> : ''*/}
                        {/*                    }*/}



                        {/*                    {*/}
                        {/*                    this.state.brandCodeValidation ? <MDBAlert color="danger">*/}
                        {/*                    Brand Code Field Is Empty*/}
                        {/*                    </MDBAlert> : ''*/}
                        {/*                    }*/}


                        {/*                    <div className="md-form">*/}
                        {/*                        <input placeholder="Start date" type="text" id="date-picker-example"*/}
                        {/*                               className="form-control datepicker" value={this.state.startDate}/>*/}

                        {/*                    </div>*/}


                        {/*                    <div className="md-form">*/}
                        {/*                        <input placeholder="End date" type="text" id="date-picker-example"*/}
                        {/*                               className="form-control datepicker" value={this.state.endDate}/>*/}

                        {/*                    </div>*/}
                        {/*                    {*/}
                        {/*                    this.state.brandDiscountValidation ? <MDBAlert color="danger">*/}
                        {/*                    Discount Field Is Empty*/}
                        {/*                    </MDBAlert> : ''*/}
                        {/*                    }*/}
                        {/*                    <MDBBtn type="submit">Save</MDBBtn>*/}
                        {/*                </form>*/}
                        {/*            </MDBCardBody>*/}
                        {/*        </MDBCard>*/}
                        {/*    </div>*/}
                        {/*</MDBCol>*/}


                        <MDBCol size="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardTitle>Stock Prices</MDBCardTitle>
                                    <form onSubmit={this.onSubmitPrices}>
                                        <MDBInput label="Buying Price" size="sm"
                                                  value={this.state.buyingPrice}
                                                  onChange={this.onChangeBuyingPrice}

                                        />
                                        {
                                            this.state.buyingPriceValidation ? <MDBAlert color="danger">
                                                Buying Price Field Is Empty
                                            </MDBAlert> : ''
                                        }

                                        <MDBInput label="Selling Price" size="sm"
                                                  value={this.state.sellingPrice}
                                                  onChange={this.onChangeSellingPrice}

                                        />
                                        {
                                            this.state.sellingPriceValidation ? <MDBAlert color="danger">
                                                Selling Price Field Is Empty
                                            </MDBAlert> : ''
                                        }
                                        <MDBInput label="Quantity" size="sm"
                                                  value={this.state.quantity}
                                                  onChange={this.onChangeQuantity}
                                        />
                                        {
                                            this.state.quantityValidation ? <MDBAlert color="danger">
                                                Quantity Field Is Empty
                                            </MDBAlert> : ''
                                        }
                                        <MDBInput label="Discount" size="sm"
                                                  value={this.state.discount}
                                                  onChange={this.onChangeDiscount}
                                        />
                                        {
                                            this.state.discountValidation ? <MDBAlert color="danger">
                                                Discount Field Is Empty
                                            </MDBAlert> : ''
                                        }
                                        <MDBInput label="Total Price" size="sm"
                                                  value={this.state.totalPrice}
                                                  onChange={this.onChangeTotalPrice}
                                        />
                                        {
                                            this.state.totalPriceValidation ? <MDBAlert color="danger">
                                                Total Price Field Is Empty
                                            </MDBAlert> : ''
                                        }

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



