import React, {Component} from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardGroup,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle, MDBCol,
} from "mdbreact";
import axios from "axios";
import constants from "../../Constants/constants";
import uuid from 'react-uuid';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.getAllCategories = this.getAllCategories.bind(this);
        this.getAllNewItems = this.getAllNewItems.bind(this);
        this.getAllItemDetails = this.getAllItemDetails.bind(this);
        this.getDetailsOfNewItems = this.getDetailsOfNewItems.bind(this);
        this.state = {
            categories: [],
            newItems: [],
            itemColors: [],
            newItemArray: [],
            arrayId: []
        }
    }

    componentDidMount() {
        this.getAllCategories();
         this.getAllNewItems();
        // this.getAllItemDetails();
        // this.getDetailsOfNewItems();
    }


    getAllNewItems() {
        axios.get(constants.backend_url + 'api/category/getAllCategories').then(response => {
            this.setState({categories: response.data});
           this.getAllItemDetails();
        }).catch(function (error) {
            console.log(error);
        })
    }

    getAllCategories() {
        axios.get(constants.backend_url + 'api/itemcolor/getAllNewItems').then(response => {
            this.setState({newItems: response.data});
        }).catch(function (error) {
            console.log(error);
        })
    }

    getAllItemDetails() {
        axios.get(constants.backend_url + 'api/itemcolor/getNewItemDetailsById').then(response => {
            this.setState({itemColors: response.data});
            this.getDetailsOfNewItems();
        }).catch(function (error) {
            console.log(error);
        })

    }

    getDetailsOfNewItems() {

        this.state.newItems.map(item => {
            this.state.itemColors.map(response => {

                if (item.itemCode[0]._id === response.itemCode[0]._id) {
                    const newArray = {
                        itemArray: response,
                        arrayId: uuid()
                    }
                    const array = [newArray, ...this.state.newItemArray];
                    this.setState({
                        newItemArray: array
                    })


                }
            });
        })
    }


    render() {
        return (

            <div>
                <br/>
                <br/>
                <br/>
                <br/>

                <div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10 textAlign">
                            <h1> New Arrivals</h1>
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>

                    <br/>
                    <div className="row ">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10 ">
                            <div className="row">

                                {
                                    this.state.newItemArray.map(items => {
                                        console.log(items);
                                         // = btoa(String.fromCharCode(...new Uint8Array(items.image.data)));
                                        const base64String   =btoa(new Uint8Array(items.itemArray.image.data).reduce(function (data, byte) {
                                            return data + String.fromCharCode(byte);
                                        }, ''));
                                        return (
                                            <div className="col-sm-4 cardMarginTop">
                                                <MDBCard style={{width: "22rem"}}>
                                                    <MDBCardImage className="img-fluid"
                                                                  src={`data:image/jpeg;base64,${base64String}`}
                                                                  waves/>
                                                    <MDBCardBody>
                                                        <MDBCardTitle>{items.itemArray.itemCode[0].itemName}</MDBCardTitle>
                                                        <MDBCardText>
                                                         LKR  : {items.itemArray.price}
                                                        </MDBCardText>
                                                        <div className="row">
                                                            <div className="col-sm-2">
                                                                <MDBBtn href="#"
                                                                        className="btnSize">View</MDBBtn>
                                                            </div>
                                                        </div>

                                                    </MDBCardBody>
                                                </MDBCard>
                                            </div>
                                        );
                                    })
                                }


                            </div>
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10 textAlign">
                            <h1> Categories</h1>
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>
                    <br/>
                    <div className="row ">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10 ">
                            <div className="row">
                                {
                                    this.state.categories.map(category => {
                                        return (
                                            <div className="col-sm-4 cardMarginTop">
                                                <MDBCard style={{width: "22rem"}}>
                                                    <MDBCardBody>
                                                        <MDBCardTitle>{category.categoryName}</MDBCardTitle>

                                                        <MDBBtn outline color="primary">View</MDBBtn>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </div>
                                        )

                                    })
                                }


                            </div>


                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>

                </div>


            </div>


        );
    }
}
