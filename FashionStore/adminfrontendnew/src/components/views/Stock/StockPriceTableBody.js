import React, {Component} from "react";
// import './Style/Item.css'
import {MDBAlert, MDBTableBody} from "mdbreact";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default class StockPriceTableBody extends Component {

    render() {
        const {stockPriceList, noItem,deleteStockPrice} = this.props;
        // console.log(stockPriceList.stockPriceId);
        // console.log(stockPriceList.buyingPrice);
        // console.log(stockPriceList.quantity);
        // console.log(stockPriceList.quantity);
        // console.log(stockPriceList.discount);
        // console.log("dddddddddd"+stockPriceList.itemColorId);
        return (
            <MDBTableBody>
                {
                    noItem ?
                        <tr >
                            <td colSpan="2">
                                <MDBAlert color="danger" >
                                    No Stock Prices In List
                                </MDBAlert>
                            </td>
                        </tr>
                        :
                        stockPriceList.map(stockP => {
                            console.log("ddddddd"+ stockP.itemColorId.itemColorsId);
                            return (
                                <tr key={stockP.stockPriceId}>
                                    <td>{stockP.itemColorId.itemColorsId}</td>
                                    <td>{stockP.buyingPrice}</td>
                                    <td>{stockP.sellingPrice}</td>
                                    <td>{stockP.quantity}</td>
                                    <td>{stockP.discount}</td>
                                    <td>{stockP.totalPrice}</td>
                                    <td>
                                        <HighlightOffIcon onClick={()=>deleteStockPrice(stockP.stockPriceId)} className="deleteIconColor" fontSize="large" />
                                    </td>
                                </tr>
                            )
                        })
                }
            </MDBTableBody>
        );
    }
}
