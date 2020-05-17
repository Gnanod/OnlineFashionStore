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
    MDBInput, MDBBtn, MDBTableHead, MDBTableBody, MDBTable, MDBAlert
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
            cartitem: '',
            orderList: []

        }
        this.getDetails = this.getDetails.bind(this);
    }
    componentDidMount() {
        this.getDetails();
    }
    getDetails() {

        axios.get(constants.backend_url + 'api/cart/getOrders').then(response => {
            console.log(response.data)
            this.setState({orderList: response.data});
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
                        <NavLink exact={true} to="/usermanage/useranalysis" >
                            <button type="button" className="btn btn-success "> User Analysis</button>
                        </NavLink>
                        <NavLink exact={true} to="/usermanage/adminmanage" >
                            <button type="button" className="btn btn-success "> Admin Manage</button>
                        </NavLink>

                        {/*<MDBFormInline className="md-form m-0">*/}
                        {/*    <input className="form-control form-control-sm" type="search" placeholder="Type your query" aria-label="Search"/>*/}
                        {/*    <MDBBtn size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>*/}
                        {/*</MDBFormInline>*/}
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
                                        <MDBBtn size="sm" color="secondary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
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
                                            {this.state.orderList.map(item => {

                                                return (
                                                    <tr>
                                                        <td>{item.orderId}</td>
                                                        <td>2020.05.18</td>
                                                        <td>{item.itemTotal}</td>
                                                        <td>{item.userId}</td>
                                                        <td>
                                                            <MDBBtn tag="a" size="sm" color="success" >
                                                                <MDBIcon size="lg" icon="pen" />
                                                            </MDBBtn>&nbsp;&nbsp;&nbsp;
                                                        </td>
                                                        <td>
                                                            <MDBBtn tag="a" size="sm" color="danger" >
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
                                            <MDBPageNav className="page-link secondary-color" >
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