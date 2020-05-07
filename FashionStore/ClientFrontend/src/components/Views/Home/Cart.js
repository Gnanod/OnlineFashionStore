import React, {Component} from 'react';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartitem:'',
            cartList:''
        }
        this.printSelected=this.printSelected.bind(this);
        this.addtoList=this.addtoList.bind(this);
    }

    componentDidMount() {
        this.setState({
            cartitem: this.props.match.params.id
        });
        this.addtoList();
    }
    printSelected(){
        console.log(this.state.cartitem);
        console.log(this.state.cartList);
    }
    addtoList(){
        this.setState({
            cartList:this.state.cartitem
        })
    }
    render() {
        return (
            <div>
                <br/><br/><br/><br/>
                <h1>Product cart</h1>
                <p>${this.state.cartitem}</p>
                <button onClick={this.printSelected}></button>
            </div>
        );
    }
}

export default Cart;