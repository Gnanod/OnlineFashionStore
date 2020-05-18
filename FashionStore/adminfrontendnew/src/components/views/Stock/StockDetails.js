import React, { Component } from 'react'
import './StyleSP/Stock.css'

import {
    MDBAlert,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCol,
    MDBInput,
    MDBRow, MDBTable, MDBTableHead
} from "mdbreact";

import 'sweetalert2/src/sweetalert2.scss'
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";

import Swal from 'sweetalert2/dist/sweetalert2.js';
import uuid from "react-uuid";
import StockPriceTableBody from "./StockPriceTableBody";
import constants from "../../../constants/constants";
import StocksTableBody from "./StocksTableBody";


export default class StockDetails extends Component{

    constructor(props) {
        super(props);

        this.state = {
            startDate: Date,
            startDateValidation: false,
            endDate: Date,
            endDateValidation: false,
            buyingPrice: 0,
            buyingPriceValidation: false,
            sellingPrice: 0,
            sellingPriceValidation: false,
            quantity: 0,
            quantityValidation: false,
            discount: 0,
            discountValidation: false,
            totalPrice: 0,
            totalPriceValidation: false,
            stockPriceArray: [],
            stockPriceIDArray: [],
            stocksArray:[],
            noItem: true,
            suppliers: [],
            ItemColourId: [],
            stocks: '',
            selectedSupplierObject: ' ',
            selectedSupplierObjectValidation: false,
            selectedItemColourIdObject: '',
            selectedItemColourIdObjectValidation: false
        }

        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeBuyingPrice = this.onChangeBuyingPrice.bind(this);
        this.onChangeSellingPrice = this.onChangeSellingPrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeDiscount = this.onChangeDiscount.bind(this);
        this.onChangeTotalPrice = this.onChangeTotalPrice.bind(this);
        this.onSubmitPrices = this.onSubmitPrices.bind(this);
        this.AddStockPricesToTable = this.AddStockPricesToTable.bind(this);
        // this.AddStocksToTable = this.AddStocksToTable.bind(this);
        this.deleteStockPrice = this.deleteStockPrice.bind(this);
        // this.stockPriceArray = this.stockPriceArray.bind(this);
        this.getAllSuppliers = this.getAllSuppliers.bind(this);
        this.getAllItemColourId = this.getAllItemColourId.bind(this);
        this.onChangeGetCompanyName = this.onChangeGetCompanyName.bind(this);
        this.onSubmitStock = this.onSubmitStock.bind(this);

        this.getAllSuppliers();
        this.getAllItemColourId();
    }
    onChangeStartDate(e){
        this.setState({
            startDate: e.target.value,
            startDateValidation: false
        })

    }
    onChangeEndDate(e){
        this.setState({
            endDate: e.target.value,
            endDateValidation: false
        })

    }

    getAllSuppliers() {
        axios.get(constants.backend_url + 'api/supplier/getAllSuppliers').then(response => {
            this.setState({suppliers: response.data});
            console.log("Suppler")
            console.log(response.data)
            console.log("Supplier")
        }).catch(function (error) {
            console.log(error);
        })
        console.log(this.state.suppliers);
    }

    getAllItemColourId() {
        axios.get(constants.backend_url + 'api/itemcolor/getAllItemColors').then(response => {
            this.setState({ItemColourId: response.data});
        }).catch(function (error) {
            console.log(error);
        })
        // console.log(this.state.itemColourId);
    }

    onChangeGetCompanyName(value) {
        // console.log(value);
        this.state.selectedSupplierObject = value;
        this.setState({
            selectedSupplierObject: this.state.selectedSupplierObject,
            selectedSupplierObjectValidation: false
        });

    }
    onChangeGetItemColourID(value){
        console.log(value)
        this.state.selectedItemColourIdObject = value;
        this.setState({
            selectedItemColourIdObject: this.state.selectedItemColourIdObject,
            selectedItemColourIdObjectValidation: false
        });
        console.log("SelectedItemColorID-" + this.state.selectedItemColourIdObject);
    }

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

        if(this.state.stocks.length !== 0){
                    if(this.state.stockPriceArray.length !== 0){
                        // if(this.state.totalPrice !== 0){
                        console.log(this.state.stockPriceArray.length);
                        this.state.stockPriceArray.map(stockP => {
                            const stockPriceObj = {
                                itemColorId: stockP.selectedItemColourIdObject,
                                buyingPrice: stockP.buyingPrice,
                                sellingPrice: stockP.sellingPrice,
                                quantity: stockP.quantity,
                                discount: stockP.discount,
                                totalPrice: stockP.totalPrice

                            }
                            console.log("ItemColourId" + stockP.selectedItemColourIdObject);
                            console.log("stockPrice" + stockP.buyingPrice);
                            console.log("stockPrice" + stockP.sellingPrice);
                            console.log("stockPrice" + stockP.quantity);
                            console.log("stockPrice" + stockP.discount);
                            console.log("TotalPrice" + stockP.totalPrice);
                            this.state.stockPriceIDArray.push(stockPriceObj);
                            // console.log("stockArray" + this.state.stockPriceIDArray.push(stockPriceObj));
                            // console.log("stockArray22" + this.state.stockPriceIDArray);
                        });

                        //     const stockPrices = {
                        //         buyingPrice: this.state.buyingPrice,
                        //         sellingPrice: this.state.sellingPrice,
                        //         quantity: this.state.quantity,
                        //         discount: this.state.discount,
                        //         totalPrice: this.state.quantity * this.state.buyingPrice
                        //     }
                            axios.post(constants.backend_url + 'api/stockprice/add', this.state.stockPriceIDArray)
                                .then(res => {
                                        console.log("response"+res)
                                        if (res.data.stockPrice === 'successful') {
                                            Swal.fire(
                                                '',
                                                'Stock Prices Added Successfully.',
                                                'success'
                                            );
                                            this.setState({
                                                stockPriceIDArray: ' ',
                                                stockPriceArray :'',
                                                noItem:true
                                            })
                                            // this.getAllStockPrice();

                                        } else {
                                            Swal.fire(
                                                '',
                                                'Stock Prices Added Fail',
                                                'error'
                                            )
                                        }
                                    }
                                );
                        axios.post(constants.backend_url + 'api/stockdetails/add', this.state.stocks)
                            .then(res => {
                                    console.log("response"+res)
                                    if (res.data.stockPrice === 'successful') {
                                        Swal.fire(
                                            '',
                                            'Stock Details Added Successfully.',
                                            'success'
                                        );
                                        this.setState({
                                            stocks: ' ',
                                            noItem:true
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

                    }else {
                        Swal.fire(
                            '',
                            'Table is Empty Please Add Stock Prices To Table',
                            'error'
                        )
                    }
        }else {
            Swal.fire(
                '',
                'Add Stock Details',
                'error'
            )
        }
    }

    onSubmitStock(e){

        e.preventDefault();

        if (this.state.supplier !== ''){
            console.log("xxxxxxxxxxxxxxxxx");
            if(this.state.itemColorId !== ''){
                if(this.state.startDate !== ''){
                    if(this.state.endDate !== ''){
                            const stock = {
                                supplier: this.state.supplier,
                                itemColorId: this.state.itemColorId,
                                startDate: this.state.startDate,
                                endDate: this.state.endDate

                            }

                            axios.post(constants.backend_url + 'api/stockdetails/add', stock)
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
                           endDateValidation: true
                        })
                    }
                }else{
                    this.setState({
                        startDateValidation: true
                    })
                }
            }else{
                this.setState({
                    selectedItemColourIdObjectValidation: true
                })
            }
        }else{
            this.setState({
                selectedSupplierObjectValidation: true
            })
        }

    }

    AddStockPricesToTable(e)
    {
        console.log("inside");
        e.preventDefault();
        if(this.state.selectedSupplierObject !== '') {
            if (this.state.startDate !== '') {
                if(this.state.endDate !== '') {
                    if (this.state.selectedItemColourIdObject !== '') {
                        console.log("checkedItemcolourID");
                        if (this.state.buyingPrice != 0) {
                            if (this.state.sellingPrice != 0) {
                                if (this.state.quantity != 0) {
                                    if (this.state.discount != 0) {
                                        // if (this.state.totalPrice != 0) {
                                        const newStockPrice = {
                                            itemColorId: this.state.selectedItemColourIdObject,
                                            buyingPrice: this.state.buyingPrice,
                                            sellingPrice: this.state.sellingPrice,
                                            quantity: this.state.quantity,
                                            discount: this.state.discount,
                                            totalPrice: this.state.quantity * this.state.buyingPrice,
                                            stockPriceId: uuid()
                                        }
                                        const newStocks = {
                                            supplier: this.state.selectedSupplierObject,
                                            startDate: this.state.startDate,
                                            endDate: this.state.endDate
                                        }
                                        // console.log(this.state.discount);
                                        // console.log("itemcolourid" + this.state.selectedItemColourIdObject);
                                        const array = [newStockPrice, ...this.state.stockPriceArray];
                                        this.setState({
                                            stockPriceArray: array,
                                            stocks: newStocks,
                                            noItem: false,
                                            stockPriceId: uuid()
                                        })
                                        // console.log("Stock Price Array:" + this.state.stockPriceArray);
                                        this.getAllItemColourId();
                                        this.getAllSuppliers();

                                    } else {
                                        this.setState({
                                            discountValidation: true
                                        })

                                    }
                                } else {
                                    this.setState({
                                        quantityValidation: true
                                    })

                                }
                            } else {
                                this.setState({
                                    sellingPriceValidation: true
                                })

                            }
                        } else {
                            this.setState({
                                buyingPriceValidation: true
                            })

                        }
                    } else {
                        this.setState({
                            selectedItemColourIdObjectValidation: true
                        })
                    }
                }else {
                    this.setState({
                        endDateValidation: true
                    })
                }
            } else {
                this.setState({
                    startDateValidation: true
                })
            }
        }else {
            this.setState({
                selectedSupplierObjectValidation: true

            })
        }
    }

    deleteStockPrice(id){
        const nonDeletedItems = this.state.stockPriceArray.filter(stockP => stockP.stockPriceId !== id);
        this.setState({
            stockPriceArray: nonDeletedItems,
                stockPriceId: id
            }
        )
        if (nonDeletedItems.length === 0) {
            this.setState({
                noItem: true
            })
        }
    }

    // deleteStocks(id){
    //     const nonDeletedItems = this.state.stocksArray.filter(stocks => stocks.stocksId !== id);
    //     this.setState({
    //         stocksArray: nonDeletedItems,
    //         stocksId: id
    //         }
    //     )
    //     if (nonDeletedItems.length === 0) {
    //         this.setState({
    //             noItem: true
    //         })
    //     }
    // }

    // AddStocksToTable(e)
    // {
    //     e.preventDefault();
    //
    //     if(this.state.selectedSupplierObject != '') {
    //         if (this.state.selectedItemColourIdObject != '') {
    //             if (this.state.startDate != '') {
    //                 if (this.state.endDate != '') {
    //                     const newStocks = {
    //                         selectedSupplierObject: this.state.selectedSupplierObject,
    //                         selectedItemColourIdObject: this.selectedItemColourIdObject,
    //                         startDate: this.state.startDate,
    //                         endDate: this.endDate,
    //                         stocksId: uuid()
    //                     }
    //                     const array = [newStocks, ...this.state.stocksArray];
    //                     this.setState({
    //                         stocksArray: array,
    //                         noItem: false,
    //                         stocksId: uuid()
    //                     })
    //
    //                     this.getAllSuppliers();
    //                     this.getAllItemColourId();
    //
    //                 }else {
    //                     this.setState({
    //                         endDateValidation: true
    //                     })
    //
    //                 }
    //             }else {
    //                 this.setState({
    //                     startDateValidation: true
    //                 })
    //
    //             }
    //         }else {
    //             this.setState({
    //                 selectedItemColourIdObjectValidation: true
    //             })
    //
    //         }
    //     }else {
    //         this.setState({
    //             selectedSupplierObjectValidation: true
    //         })
    //
    //     }
    // }


    updateStocks(id,quantity,price){
        axios.get(constants.backend_url + 'api/stockprice/updateQuantityPrice/'+id+'/'+quantity+'/'+price).then(res => {
            if(res.data.stockPrice === 'success'){
                console.log("Updated Successfully")
            }else{
                console.log("updated fail")
            }
        });
    }

    render(){
        return(
            <div className="bg">

                <div><h1 className="font-weight-bold text-center">Stock Details</h1></div>

                <div className=" container-fluid BrandCategoryMain" >

                    <br/>
                    <br/>


                            <div className="card">
                                <MDBCard className="card">
                                    <MDBCardBody>
                                        <form onSubmit={this.AddStockPricesToTable}>
                                            <MDBRow>
                                                <MDBCol size="6">
                                            <MDBCardTitle>Stock Details</MDBCardTitle>
                                            <Autocomplete
                                                id="combo-box-demo"
                                                options={this.state.suppliers}
                                                getOptionLabel={(option) => option.companyName}
                                                style={{width: 300}}
                                                onChange={(event, value) => this.onChangeGetCompanyName(value)}
                                                renderInput={(params) => <TextField {...params} label="Supplier"/>}
                                                size="sm"
                                            />
                                            {
                                                this.state.selectedSupplierObjectValidation ? <MDBAlert color="danger">
                                                    Supplier Field Is Empty
                                                </MDBAlert> : ''
                                            }



                                            <div className="md-form">
                                                <input placeholder="Start date" type="date" id="date-picker-example"
                                                       className="form-control datepicker"
                                                       value={this.state.startDate}
                                                       onChange={this.onChangeStartDate}/>

                                            </div>
                                            {
                                                this.state.startDateValidation ? <MDBAlert color="danger">
                                                    Start Date Field Is Empty
                                                </MDBAlert> : ''
                                            }

                                            <div className="md-form">
                                                <input placeholder="End date" type="date" id="date-picker-example"
                                                       className="form-control datepicker"
                                                       value={this.state.endDate}
                                                       onChange={this.onChangeEndDate}/>

                                            </div>
                                            {
                                            this.state.endDateValidation ? <MDBAlert color="danger">
                                            End Date Field Is Empty
                                            </MDBAlert> : ''
                                            }
                                                </MDBCol>
                                            <MDBCol size="6">
                                                    <MDBCardTitle>Stock Prices</MDBCardTitle>
                                                        <Autocomplete
                                                            id="combo-box-demo"
                                                            options={this.state.ItemColourId}
                                                            getOptionLabel={(option) => option.itemColorsId}
                                                            style={{width: 300}}
                                                            onChange={(event, value) => this.onChangeGetItemColourID(value)}
                                                            renderInput={(params) => <TextField {...params} label="Item ColourID"/>}
                                                            size="sm"
                                                        />

                                                        {
                                                            this.state.selectedItemColourIdObjectValidation ? <MDBAlert color="danger">
                                                                Item Colour ID Field Is Empty
                                                            </MDBAlert> : ''
                                                        }


                                                        <MDBInput label="Buying Price" size="sm"
                                                                  pattern="[0-9]*"
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
                                                        {/*<MDBInput label="Total Price" size="sm"*/}
                                                        {/*value={this.state.totalPrice}*/}
                                                        {/*onChange={this.onChangeTotalPrice}*/}
                                                        {/*/>*/}
                                                        {/*{*/}
                                                        {/*this.state.totalPriceValidation ? <MDBAlert color="danger">*/}
                                                        {/*Total Price Field Is Empty*/}
                                                        {/*</MDBAlert> : ''*/}
                                                        {/*}*/}

                                                        <MDBBtn type="submit">ADD</MDBBtn>
                                            </MDBCol>
                                            </MDBRow>
                                        </form>

                                    </MDBCardBody>
                                </MDBCard>
                            </div>

                            <br/>
                            <br/>
                            <MDBTable>
                                <MDBTableHead color="primary-color" textWhite>
                                    <tr>
                                        <th>Item Colour ID</th>
                                        <th>Buying Price</th>
                                        <th>Selling Price</th>
                                        <th>Quantity</th>
                                        <th>Discount</th>
                                        <th>Total Price</th>

                                    </tr>
                                </MDBTableHead>
                                <StockPriceTableBody
                                    stockPriceList={this.state.stockPriceArray}
                                    noItem={this.state.noItem}
                                    deleteStockPrice={this.deleteStockPrice}

                                />
                            </MDBTable>
                            <form onSubmit={this.onSubmitPrices}>
                                <MDBBtn type="submit">Save</MDBBtn>
                            </form>

                </div>
            </div>

        );
    }
}



