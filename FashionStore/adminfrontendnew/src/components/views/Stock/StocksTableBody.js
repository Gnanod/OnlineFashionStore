import React, {Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBView,
    MDBContainer,
    MDBBtnGroup,
    MDBIcon,  MDBFormInline,
    MDBCard,
    MDBCardBody,
    MDBBtn, MDBTableHead, MDBTableBody, MDBTable, MDBAlert,MDBPagination,MDBPageItem,MDBPageNav,
} from 'mdbreact';
// import './UserManage.css';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import constants from "../../../constants/constants";
import axios from "axios";
import {InputGroup} from 'react-bootstrap';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import StockPriceTableBody from "./StockPriceTableBody";


export default class ItemTable extends Component{

    constructor(props) {
        super(props);


        this.state = {
            itemsCL: [],
            empty: false,
            ItemColourId: []

        }

        this.getAllItemsCL = this.getAllItemsCL.bind(this);
        this.getAllItemsCL();

    }

    componentDidMount(){
        if(localStorage.getItem("userLogged")!=="userLogged"){
            this.props.history.push('/');
        }
    }

    // getAllItemsCL() {
    //     console.log("Inside of itemCL method");
    //     axios.get(constants.backend_url + 'api/itemcolor/getAllItemColors').then(response => {
    //         this.setState({itemsCL: response.data});
    //         console.log("Inside Inside of itemCL method");
    //         // console.log(this.state.itemsCL);
    //     }).catch(function (error) {
    //         console.log(error);
    //     })
    //     console.log("ddddddd:"+this.state.itemsCL);
    //     console.log(this.state.itemsCL);
    // }

    getAllItemsCL() {
        axios.get(constants.backend_url + 'api/itemcolor/getAllItemColors').then(response => {
            this.setState({ItemColourId: response.data});
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        })
        console.log(this.state.ItemColourId);

    }


    render() {
        // const {itemsCL} = this.props;
        const  itemsArr = this.state.ItemColourId;
        // let itemsArr = this.state.itemsCL || {};
        // const itemsArr = this.state.itemsCL;
        // console.log("aaaaa:"+itemsArr);


        return (

            <div>

                <MDBCard className="mb-5">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">

                        <NavLink exact={true} to="/stockmanage" activeClassName="activeClass">
                            <button type="button" className="btn btn-primary">Stock Details</button>
                        </NavLink>
                        <NavLink exact={true} to="/stockmanage/stockanalysis" >
                            <button type="button" className="btn btn-success ">Items</button>
                        </NavLink>

                        {/*<MDBFormInline className="md-form m-0">*/}
                        {/*    <input className="form-control form-control-sm" type="search" placeholder="Type your query" aria-label="Search"/>*/}
                        {/*    <MDBBtn size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>*/}
                        {/*</MDBFormInline>*/}
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </MDBCardBody>
                </MDBCard>


                <MDBCard className="card">
                    <MDBCardBody>
                        <MDBTable responsive>
                            <MDBTableHead color="primary-color" textWhite>
                                <tr>
                                    <th>Item Code</th>
                                    <th>Item Name</th>
                                    <th>Size</th>
                                    <th>Colour</th>
                                    <th>Quantity</th>
                                    <th>Price</th>


                                </tr>

                            </MDBTableHead>
                            {
                                itemsArr.length === 0 ?
                                    <tr >
                                        <td colSpan="12" style={{textAlign : "center", fontWeight: "bold"}}>
                                            <MDBAlert color="danger" >
                                                No Items
                                            </MDBAlert>
                                        </td>
                                    </tr> :
                                    itemsArr.map(itm => {
                                        console.log("ItemCode:"+itm.itemCode.itemCode);
                                        console.log("ItemCode11:"+itm.itemCode.itemName);
                                        return(
                                            <MDBTableBody>
                                                 <tr>
                                                     <td>{itm.itemCode.itemCode}</td>
                                                     <td>{itm.itemCode.itemName}</td>
                                                     <td>{itm.itemSize}</td>
                                                     <td>{itm.itemColor}</td>
                                                     <td>{itm.quantity}</td>
                                                    <td>{itm.price}</td>

                                                 </tr>
                                             </MDBTableBody>
                                        )
                                    })}
                        </MDBTable>
                    </MDBCardBody>
                </MDBCard>

            </div>
        );
    }
}
