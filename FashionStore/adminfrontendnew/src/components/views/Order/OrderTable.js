import React, {Component} from 'react';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBView,
    MDBContainer, MDBPagination, MDBPageItem, MDBPageNav,
    MDBNavbar,
    MDBIcon, MDBDataTable, MDBFormInline,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBInput, MDBBtn, MDBTableHead, MDBTableBody, MDBTable, MDBAlert, MDBListGroup, MDBListGroupItem
} from 'mdbreact';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import axios from "axios";
import '../UserManagement/UserManage.css';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import constants from "../../../constants/constants";



class OrderTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedId:'',
            resultArray : [],
            item:[],
            orderList: []


        }
        this.getDetails = this.getDetails.bind(this);
        this.SortData = this.SortData.bind(this);
        this.viewItem = this.viewItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }
    componentDidMount() {
        this.getDetails();
    }
    getDetails() {

        axios.get(constants.backend_url + 'api/cart/getOrders').then(response => {
            console.log(response.data)
            this.setState({orderList: response.data});
            this.SortData();
        }).catch(function (error) {
            console.log(error);
        })

    }
    SortData(){
        const result = [];
        const map = new Map();
        for (const item of this.state.orderList) {
            if(!map.has(item.orderId)){
                map.set(item.orderId, true);    // set any value to Map
                result.push({
                    orderId: item.orderId,
                    itemTotal: item.itemTotal,
                    userId:item.userId,
                    oderTime:item.oderTime
                });
            }
        }
        this.setState({resultArray:result})
    }
    viewItem(id){
       console.log(id)
        this.setState({selectedId:id})
        axios.get(constants.backend_url + 'api/cart/viewOrders/'+id).then(response => {

            this.setState({item: response.data});

        }).catch(function (error) {
            console.log(error);
        })
    }
    deleteItem(id){
        console.log(id)

        axios.get(constants.backend_url + 'api/cart/deleteOrders/'+id).then(res => {

            if (res.data.order === 'successful') {
                Swal.fire(
                    '',
                    ' Item Deleted Successfully.',
                    'success'
                );
                this.getDetails();

            } else {
                Swal.fire(
                    '',
                    'Item Deleted Fail',
                    'error'

                )
            }

        }).catch(function (error) {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                <MDBCard className="mb-5">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">

                        <NavLink exact={true} to="/order" activeClassName="activeClass">
                            <button type="button" className="btn btn-primary">Order Details</button>
                        </NavLink>



                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </MDBCardBody>
                </MDBCard>

                <MDBRow>
                    <MDBCol size="8">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCol md="4" className="searchC">
                                    <MDBFormInline className="md-form m-0">
                                        <input className="form-control form-control-sm" type="search" placeholder="Search..." aria-label="Search"/>
                                        <MDBBtn size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
                                    </MDBFormInline>
                                </MDBCol>
                                <br></br>

                                <form>
                                    <MDBTable responsive>
                                        <MDBTableHead color="primary-color" textWhite>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Date</th>
                                                <th>Total</th>
                                                <th>User ID</th>
                                                <th>View</th>
                                                <th>Remove</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            {this.state.resultArray.map(item => {

                                                return (
                                                    <tr>
                                                        <td>{item.orderId}</td>
                                                        <td>{item.oderTime}</td>
                                                        <td>{item.itemTotal}</td>
                                                        <td>{item.userId}</td>
                                                        <td>
                                                            <MDBBtn tag="a" size="sm" color="success"  onClick={()=>this.viewItem(item.orderId)}>
                                                                <MDBIcon size="lg" icon="pen" />
                                                            </MDBBtn>&nbsp;&nbsp;&nbsp;
                                                        </td>
                                                        <td>
                                                            <MDBBtn tag="a" size="sm" color="danger" onClick={()=>this.deleteItem(item.orderId)}>
                                                                <MDBIcon size="lg" icon="times-circle" />
                                                            </MDBBtn>
                                                        </td>
                                                    </tr>
                                                )




                                            })}

                                        </MDBTableBody>
                                    </MDBTable>
                                    <MDBPagination circle className="justify-content-center">
                                        <MDBPageItem disabled>
                                            <MDBPageNav className="page-link" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </MDBPageNav>
                                        </MDBPageItem>
                                        <MDBPageItem active >
                                            <MDBPageNav className="page-link primary-color" >
                                                1 <span className="sr-only " >(current)</span>
                                            </MDBPageNav>
                                        </MDBPageItem>
                                        <MDBPageItem>
                                            <MDBPageNav className="page-link">
                                                2
                                            </MDBPageNav>
                                        </MDBPageItem>
                                        <MDBPageItem>
                                            <MDBPageNav className="page-link">
                                                3
                                            </MDBPageNav>
                                        </MDBPageItem>
                                        <MDBPageItem>
                                            <MDBPageNav className="page-link">
                                                4
                                            </MDBPageNav>
                                        </MDBPageItem>
                                        <MDBPageItem>
                                            <MDBPageNav className="page-link">
                                                5
                                            </MDBPageNav>
                                        </MDBPageItem>
                                        <MDBPageItem>
                                            <MDBPageNav className="page-link">
                                                &raquo;
                                            </MDBPageNav>
                                        </MDBPageItem>
                                    </MDBPagination>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md="4">
                        <MDBCard>
                            <MDBCardBody>
                                <p className="h4 text-center py-1">Order Details</p>
                                <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-light">Order ID</label>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon">
                                              <i className="fa fa-table prefix"></i>
                                            </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Order ID"
                                        aria-label="Name"
                                        aria-describedby="basic-addon"
                                        value={this.state.selectedId}

                                    /></div>
                                <MDBTable responsive>
                                    <MDBTableHead color="grey-color" textBlack>
                                        <tr>
                                            <th>Item Name</th>
                                            <th>Price</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>

                                {this.state.item.map(item => {

                                    return (


                                        <tr>
                                            <td>{item.itemName}</td>
                                            <td>{item.itemPrice}</td>

                                        </tr>




                                    )})}
                                    </MDBTableBody>
                                </MDBTable>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    {/*<MDBContainer>*/}
                    {/*    <MDBRow>*/}
                    {/*       */}
                    {/*    </MDBRow>*/}
                    {/*</MDBContainer>*/}




                </MDBRow>

            </div>
        );
    }
}

export default OrderTable;