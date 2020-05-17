
import React, {Component} from 'react';
import CartColumns from './CartColumns';
import axios from "axios";
import constants from "../../Constants/constants";
import Loader from "react-loader-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import './CartStyle.css';
import 'sweetalert2/src/sweetalert2.scss';

import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBNavLink} from "mdbreact";

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartitem:'',
            cartList:[],
            userId:'C001',
            cartName:'',
            cartPrice:'',
            quantity:'',
            itemTot:'',
            fullTot:0,
            orderId:'',
            loaderStatus :true

        }
        this.printSelected=this.printSelected.bind(this);
        this.getDetails=this.getDetails.bind(this);
        this.decrement=this.decrement.bind(this);
        this.remove1=this.remove1.bind(this);
        this.increment=this.increment.bind(this);
        this.clearCart=this.clearCart.bind(this);
        this.getSubTotal=this.getSubTotal.bind(this);
        this.confirmPurchase=this.confirmPurchase.bind(this);
        this.getLastId=this.getLastId.bind(this);

    }

    componentDidMount() {
        this.getDetails();


    }
    printSelected(){
        console.log(this.state.cartitem);
        console.log(this.state.cartList);
    }
    getDetails() {
        console.log("Cart!")
        axios.get(constants.backend_url + 'api/cart/getDetails/'+ this.state.userId).then(response => {
            console.log(response.data)
            this.setState({cartList: response.data});
        }).catch(function (error) {
            console.log(error);
        })
        this.getSubTotal(this.state.userId);
    }
    decrement(id,quantity){

        if(quantity != 1 ){
            console.log("dec");
            axios.get(constants.backend_url + 'api/cart/decQuantity/'+ id+'/'+(quantity-1)).then(response => {

            });
            this.getDetails();

            // window.location.reload(false);
        }else{
            Swal.fire(
                '',
                'Item quantity is not valid!!',
                'error'

            );
        }


    }
    increment(id,quantity){
        console.log("inc");
        axios.get(constants.backend_url + 'api/cart/incQuantity/'+ id+'/'+(quantity+1)).then(response => {

        })
        window.location.reload(false);


    }

    remove1(id){
        console.log("remove");
        axios.get(constants.backend_url + 'api/cart/deleteItem/'+ id).then(response => {
            if (response.data.cart === 'success') {
                Swal.fire(
                    '',
                    'Cart Deleted Fail',
                    'error'

                );

            } else {
                Swal.fire(
                    '',


                    'Cart Deleted Sucessfull',
                    'success'
                )
            }
        })
        window.location.reload(false);
    }
    clearCart(userId){
        console.log("clear");
        axios.get(constants.backend_url + 'api/cart/clearCart/'+ userId).then(response => {

        });
        window.location.reload(false);
    }
    getSubTotal(userId){
        console.log("subbb");
        axios.get(constants.backend_url + 'api/cart/getSub/'+ userId).then(response => {
            this.setState({
                fullTot:response.data
            })
        });
    }
    confirmPurchase(){
            let a=this.getLastId();
            console.log(this.state.orderId)
        this.state.cartList.map(item => {
            let order={
                orderId:a,
                userId: this.state.userId,
                itemTotal:this.state.fullTot,
                itemName:item.cartName,
                itemId:item.itemId,
                itemPrice:item.cartPrice,
                oderTime: new Date().toLocaleString()
            }
            axios.post(constants.backend_url + 'api/cart/addOrder', order)
                .then(res => {
                        console.log("HI")

                        if (res.data.cart === 'success') {
                            Swal.fire(
                                '',
                                'Cart Added Fail',
                                'error'
                            );

                        } else {
                            Swal.fire(
                                '',

                                'Cart Details Added Successfully.',
                                'success'
                            )
                        }
                    }
                );
        })



    }
    getLastId(){


       let a=Math.floor(Math.random() * Date.now());
       console.log(a);
        this.setState({
            orderId:a
        })
        return a;

    }

    render() {
        return (
            <div>
            <br/><br/><br/><br/>
            <h1>Product Cart</h1>
        <br/><br/>
        <CartColumns></CartColumns>
        <div>

        {this.state.cartList.map(item => {
                const base64String = btoa(new Uint8Array(item.image.data).reduce(function (data, byte) {
                    return data + String.fromCharCode(byte);
                }, ''));
            return(
                <div className="row my-1 text-capitalize text-center">
                    <div className="col-10 mx-auto col-lg-2" >
                        <MDBCard style={{height: "13rem"}}>
                        <MDBCardImage className="img-fluid"
                                      src={`data:image/jpeg;base64,${base64String}`}
                                      waves/>
                        </MDBCard>

                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <span>{item.cartName}</span>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <span>Rs. {item.cartPrice}</span>
                    </div>

                    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                        <div className="d-flex justify-content-center">
                            <div>
                                <button className="btn1 mx-1" onClick={() => this.increment(item._id, item.quantity)}>+
                                </button>
                            </div>
                            <span className="btn11">{item.quantity}</span>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <button className="btn1 mx-1"
                                            onClick={() => this.decrement(item._id, item.quantity)}>-
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <span>Rs. {item.cartPrice * (item.quantity)}</span>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <div className="cart-icon">
                            <i className="fa fa-trash" aria-hidden="true" onClick={() => this.remove1(item._id)}></i>
                        </div>

                    </div>




                </div>

            )




        })}


    <br/>
        <button  className="btn btn-blue" onClick={()=>this.clearCart(this.state.userId)}>Clear Cart</button>
        <div>
        <span>Full Total     :</span>
        <span>{this.state.fullTot}</span>
        </div>
            <button  className="btn btn-blue" onClick={()=>this.confirmPurchase()}>Confirm Purchase</button>
        </div>


        </div>
    );
    }
}

export default Cart;
