import React, {Component} from "react";
// import './Style/Item.css'
import {MDBAlert, MDBTableBody} from "mdbreact";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default class StocksTableBody extends Component {

    render() {
        const {stocksList, noItem} = this.props;
        return (
            <MDBTableBody>
                {
                    noItem ?
                        <tr >
                            <td colSpan="2">
                                <MDBAlert color="danger" >
                                    No Stocks In List
                                </MDBAlert>
                            </td>
                        </tr>
                        :
                        stocksList.map(st => {
                            return (
                                <tr key={st.stocksId}>
                                    <td>{st.supplier.companyName}</td>
                                    <td>{st.itemcolor.itemColorId}</td>
                                    {/*<td>*/}
                                        {/*<HighlightOffIcon onClick={()=>deleteBrandCategory(item.brandCategoryId)} className="deleteIconColor" fontSize="large" />*/}
                                    {/*</td>*/}
                                </tr>
                            )
                        })
                }
            </MDBTableBody>
        );
    }
}
