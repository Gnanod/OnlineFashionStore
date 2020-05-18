import React, {Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBView,
    MDBContainer,MDBPagination, MDBPageItem, MDBPageNav,
    MDBNavbar,
    MDBIcon,MDBDataTable,MDBFormInline,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBInput, MDBBtn, MDBTableHead, MDBTableBody, MDBTable
} from 'mdbreact';
import './UserManage.css';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import constants from "../../../constants/constants";
import axios from "axios";

export default class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartitem:'',
            detailList:[]
        }

        this.sweetalertfunction = this.sweetalertfunction.bind(this);
        this.getDetails = this.getDetails.bind(this);
    }
    componentDidMount() {
        this.getDetails();
    }

    sweetalertfunction(){
        console.log("button clicks");
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Customer deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Customer details not deleted',
                    'error'
                )
            }
        })
    }



    getDetails(){
        console.log("get user details");
        axios.get(constants.backend_url + 'api/userDetail/getAllusers').then(response => {
            // console.log("getdetails")
            // console.log(response.data);
          this.setState({detailList:response.data})
        }).catch(function (error) {
            console.log(error);
        })
    }





    render() {
        return (
            <div id='parallaxintro'>

                <MDBCard className="mb-5">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">

                        <NavLink exact={true} to="/usermanage" activeClassName="activeClass">
                            <button type="button" className="btn btn-primary">User Details</button>
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



                <MDBView>
                    <MDBMask className='rgba-white-light' />
                    <MDBContainer className='d-flex justify-content-center align-items-center' style={{ height: '100%', width: '100%', paddingTop: '0rem' }}>
                        <MDBRow>

                            {/*<MDBCol md='12' className='  text-center'>*/}
                            {/*    <h1 className='display-5 mb-0 pt-md-5 font-weight-bold' >*/}
                            {/*        USER &nbsp;*/}
                            {/*        <span className='font-weight-bold h1col'>DETAILS</span>*/}
                            {/*    </h1>*/}
                            {/*</MDBCol>*/}
                            <MDBCol md="6" className="searchC">
                                <MDBFormInline className="md-form m-0">
                                    <input className="form-control form-control-sm" type="search" placeholder="Search..." aria-label="Search"/>
                                    <MDBBtn size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
                                </MDBFormInline>
                            </MDBCol>
                            <div className=" container-fluid AddItemHeight">
                                <MDBRow>
                                    <MDBCol size="12">
                                        <MDBCard>
                                            <MDBCardBody>
                                                <form>
                                                    <MDBTable responsive>
                                                        <MDBTableHead color="primary-color" textWhite>
                                                            <tr>
                                                                <th>First Name</th>
                                                                <th>Last Name</th>
                                                                <th>Email Address</th>
                                                                <th>Contact Number</th>
                                                                <th>Date of Birth</th>
                                                                <th>Gender</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </MDBTableHead>

                                                        {
                                                            this.state.detailList.map(item => {

                                                        return(
                                                        <MDBTableBody>
                                                            <tr>
                                                                <td>{item.firstName}</td>
                                                                <td>{item.lastName}</td>
                                                                <td>{item.email}</td>
                                                                <td>{item.phoneNumber}</td>
                                                                <td>{item.dob}</td>
                                                                <td>{item.gender}</td>
                                                                <td>
                                                                    <MDBBtn tag="a" size="sm" color="danger"  onClick={this.sweetalertfunction}>
                                                                        <MDBIcon size="lg" icon="times-circle" />
                                                                    </MDBBtn>
                                                                </td>
                                                            </tr>
                                                        </MDBTableBody>
                                                            )
                                                        })}

                                                    </MDBTable>



                                                    <MDBPagination circle className="justify-content-center">
                                                        <MDBPageItem disabled>
                                                            <MDBPageNav className="page-link" aria-label="Previous">
                                                                <span aria-hidden="true">&laquo;</span>
                                                                <span className="sr-only">Previous</span>
                                                            </MDBPageNav>
                                                        </MDBPageItem>
                                                        <MDBPageItem active >
                                                            <MDBPageNav className="page-link default-color" >
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
                                </MDBRow>
                            </div>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        );
    }
}
