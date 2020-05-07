import React, {Component} from 'react';
import CartColumns from './CartColumns';
class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartitem:'',
            cartList:[]
        }
        this.printSelected=this.printSelected.bind(this);

    }

    componentDidMount() {
        this.setState({
            cartitem: this.props.match.params.id,

        });

    }
    printSelected(){
        console.log(this.state.cartitem);
        console.log(this.state.cartList);
    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/>
                <div>
                    <ul>
                        {(this.state.list || []).map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <h1>Product cart</h1>
                <p>${this.state.cartitem}</p>
                <CartColumns></CartColumns>
                <button onClick={this.printSelected}></button>


            </div>
        );
    }
}

export default Cart;