import React, {Component} from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle} from "mdbreact";
import './Item.css'
import axios from "axios";
import constants from "../../Constants/constants";

export class ItemDetail extends Component {


    constructor(props){
        super(props)
        this.state ={
            itemColorId :''
        }
        this.getNewItemColorDetails = this.getNewItemColorDetails.bind(this);
    }

    componentDidMount(){
       this.setState({
           itemColorId : this.props.match.params.id,
           itemColorDetail : ''
       });
       this.getNewItemColorDetails();

    }

    getNewItemColorDetails(){
        axios.get(constants.backend_url + 'api/itemcolor/getItemColorDetail/'+this.props.match.params.id).then(response => {
            this.setState({itemColorDetail: response.data});
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        })
    }


    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div >

                    <div className="row ">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-8 ">

                            <MDBCard >
                                <MDBCardBody>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <MDBCardImage className="imageClass "
                                                          src="https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/gallery/3f96cff1fc0f29e3afa3fb39f54423132db94900.jpg"
                                                          waves/>
                                        </div>
                                        <div className="col-sm-6">
                                            <MDBCardTitle className="itemNameText">Item Name</MDBCardTitle>
                                            <h2 className="textAligns">Price</h2>
                                            <h2 className="textAligns">Color</h2>
                                            <h2 className="textAligns">Color</h2>
                                            <h2 className="textAligns">Size</h2>
                                            <h2 className="textAligns">Qty</h2>
                                            <h2 >Add To Cart</h2>
                                            <h2 >Add To wishlist</h2>
                                        </div>

                                    </div>
                                </MDBCardBody>
                            </MDBCard>

                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
