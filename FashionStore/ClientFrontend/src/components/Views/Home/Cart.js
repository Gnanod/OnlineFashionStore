import React, {Component} from 'react';
import CartColumns from './CartColumns';
import axios from "axios";
import constants from "../../Constants/constants";
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
            fullTot:''

        }
        this.printSelected=this.printSelected.bind(this);
        this.getDetails=this.getDetails.bind(this);

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
            response.data.product.map(item => {
                const newItem = {
                    itemSizes: item
                }
                const array = [newItem, ...this.state.cartList]
                this.setState({
                    cartList: array
                })
            })
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/>
         <h1>Hi Cart</h1>


            </div>
        );
    }
}

export default Cart;