import React, {Component} from 'react';
import axios from "axios";
import constants from "../../Constants/constants";
import WishListColumns from './WishListColumns';
import Swal from 'sweetalert2/dist/sweetalert2.js';

class Wishlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: '',
            wishList: [],
            userId: 'C001',
            Name: '',
            Price: '',
            loaderStatus: true

        }
        this.getDetails=this.getDetails.bind(this);
        this.addToCart=this.addToCart.bind(this);
        this.remove1=this.remove1.bind(this);
        this.clearWishlist=this.clearWishlist.bind(this);
    }
    componentDidMount() {
        this.getDetails();


    }
    getDetails() {
        console.log("Cart!")
        axios.get(constants.backend_url + 'api/wishlist/getDetails/'+ this.state.userId).then(response => {
            console.log("map")
            this.setState({wishList: response.data});
        }).catch(function (error) {
            console.log(error);
        })

    }
    addToCart(item){

        let cartItem=item;
       // this.decrementQuantity(cartItem.itemSizes._id,cartItem.itemSizes.quantity);
        const cartt = {
            userId:'C001',
            cartName:item.cartName,
            cartPrice:item.cartPrice,
            quantity:1,
            itemTotal:item.cartPrice
        }

        axios.post(constants.backend_url + 'api/cart/add', cartt)
            .then(res => {
                    console.log("HI")

                    if (res.data.cart === 'success') {
                        Swal.fire(
                            '',
                            'Cart Added Fail',
                            'error'
                        );

                    } else {
                        this.remove1(item._id);
                        Swal.fire(
                            '',

                            'Cart Details Added Successfully.',
                            'success'
                        )

                    }
                }
            );

        console.log(this.state.itemName);
        console.log(cartt);

    }
    remove1(id){
        console.log("remove");
        axios.get(constants.backend_url + 'api/wishlist/deleteItem/'+ id).then(response => {
            if (response.data.cart === 'success') {
                /*Swal.fire(
                    '',
                    'Cart Deleted Fail',
                    'error'

                );*/

            } else {
               /* Swal.fire(
                    '',


                    'Cart Deleted Sucessfull',
                    'success'
                )*/
            }
        })
        window.location.reload(false);
    }
    clearWishlist(){
        console.log("clear");
        axios.get(constants.backend_url + 'api/wishlist/clearWishlist/'+ this.state.userId).then(response => {

        });
        window.location.reload(false);
    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/>
                <h1>Product Wishlist</h1>
                <br/><br/>
                <WishListColumns></WishListColumns>
                <div>

                    {this.state.wishList.map(item => (

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

                            <div className="col-10 mx-auto col-lg-2">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="col-10 mx-auto col-lg-2">
                                <div className="cart-icon" >
                                    <i className="fas fa-cart-plus" aria-hidden="true" onClick={()=>this.addToCart(item)}></i>
                                </div>
                            </div>

                            <div className="col-10 mx-auto col-lg-2">
                                <div className="cart-icon" >
                                    <i className="fa fa-trash" aria-hidden="true" onClick={()=>this.remove1(item._id)}></i>
                                </div>

                            </div>



                        </div>





                    ))}

                </div>
                <br/><br/>
                <button  className="btn btn-blue" onClick={()=>this.clearWishlist()}>Clear WishList</button>
                </div>
        );
    }
}

export default Wishlist;