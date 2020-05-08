
import React, {Component} from 'react';
import CartColumns from './CartColumns';
import axios from "axios";
import constants from "../../Constants/constants";
import Loader from "react-loader-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
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
            console.log("map")
            this.setState({cartList: response.data});
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/>
         <h1>Hi Cart</h1>

            <button onClick={this.printSelected}></button>
            </div>
        );
    }
}

export default Cart;