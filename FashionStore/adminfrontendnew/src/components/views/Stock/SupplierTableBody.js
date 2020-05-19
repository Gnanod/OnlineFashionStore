import React, {Component} from "react";
// import './Style/Item.css'
import {MDBAlert, MDBTableBody} from "mdbreact";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default class SupplierTableBody extends Component {

    render() {
        const {supplierList, noItem} = this.props;
        // console.log(stockPriceList.stockPriceId);

        return (
            <MDBTableBody>
                {
                    noItem ?
                        <tr >
                            <td colSpan="2">
                                <MDBAlert color="danger" >
                                    No Suppliers In List
                                </MDBAlert>
                            </td>
                        </tr>
                        :
                        supplierList.map(sup => {

                            return (
                                <tr key={sup._id}>
                                    <td>{sup.companyName}
                                        <td>{sup.companyWebsite}</td>
                                        <td>{sup.description}</td>
                                        <td>{sup.firstName}</td>
                                        <td>{sup.lastName}</td>
                                        <td>{sup.companyNumber}</td>
                                        <td>{sup.mobileNumber}</td>
                                        <td>{sup.email}</td>
                                        <td>{sup.fax}</td>
                                        <td>{sup.address1}</td>
                                        <td>{sup.address2}</td>
                                        <td>{sup.city}</td>
                                        <td>{sup.country}</td>
                                        <td>{sup.state}</td>
                                        {/*<HighlightOffIcon onClick={()=>deleteStockPrice(stockP.stockPriceId)} className="deleteIconColor" fontSize="large" />*/}
                                    </td>
                                </tr>
                            )
                        })
                }
            </MDBTableBody>
        );
    }
}
