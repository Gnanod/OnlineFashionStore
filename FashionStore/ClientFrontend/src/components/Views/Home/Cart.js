
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
            fullTot:[],
            loaderStatus :true

        }
        this.printSelected=this.printSelected.bind(this);
        this.getDetails=this.getDetails.bind(this);
        this.decrement=this.decrement.bind(this);
        this.calculate=this.calculate.bind(this);
        this.remove=this.remove.bind(this);

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
            console.log("map")
            this.setState({cartList: response.data});
        }).catch(function (error) {
            console.log(error);
        })
    }
    decrement(id){

    }
    calculate(price,quantity){
        let tot=price*quantity;
        this.setState({
            fullTot:[tot,...this.state.fullTot]
        })

       console.log(tot);

    }
    remove(id){

}

    render() {
        return (
            <div>
                <br/><br/><br/><br/>
         <h1>Product Cart</h1>
                <br/><br/>
                <CartColumns></CartColumns>
                <div>

                        {this.state.cartList.map(item => (

                            <div className="row my-1 text-capitalize text-center">
                                <div className="col-10 mx-auto col-lg-2">
                                    <span>{item.cartName}</span>
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
                                            <button  className="btn1 mx-1" onClick={()=>this.decrement(item._id)}>+</button>
                                        </div>
                                        <span className="btn11" >{item.quantity}</span>
                                        <div className="d-flex justify-content-center">
                                            <div>
                                                <button  className="btn1 mx-1" onClick={()=>this.decrement(item._id)}>-</button>
                                            </div>
                                    </div>
                                    </div>
                                </div>
                                        <div className="col-10 mx-auto col-lg-2">
                                            <div className="cart-icon" onClick={this.remove(item._id)}>
                                                <i className="fas fa-trash"></i>
                                            </div>

                                        </div>

                                    <div className="col-10 mx-auto col-lg-2">
                                        <span>Rs. {item.cartPrice*(item.quantity)}</span>
                                    </div>

                                    </div>





                        ))}

                </div>


            </div>
        );
    }
}

export default Cart;