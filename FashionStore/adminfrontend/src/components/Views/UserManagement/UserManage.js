import React, {Component} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
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

export default class UserDetail extends Component {




    render() {
        return (
            <div id='parallaxintro'>
                <MDBView>
                    <MDBMask className='rgba-white-light' />
                    <MDBContainer className='d-flex justify-content-center align-items-center' style={{ height: '100%', width: '100%', paddingTop: '0rem' }}>
                        <MDBRow>

                            <MDBCol md='12' className='mb-4  text-center'>
                                <h1 className='display-5 mb-0 pt-md-5 pt-5  font-weight-bold' >
                                    USER &nbsp;
                                    <span className='font-weight-bold h1col'>DETAILS</span>
                                </h1>
                            </MDBCol>
                            <MDBCol md="6" className="searchC">
                                <MDBFormInline className="md-form">
                                    <MDBIcon icon="search" />
                                    <input className="form-control form-control-sm ml-3 " type="text" placeholder="Search" aria-label="Search" />
                                    <MDBBtn outline size="sm">Search</MDBBtn>
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
                                                                <th>Date of Birth</th>
                                                                <th>Gender</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </MDBTableHead>
                                                        <MDBTableBody>
                                                            <tr>
                                                                <td>Samitha</td>
                                                                <td>Vidhanaarachchi</td>
                                                                <td>samithavidhanaarachchi@gmail.com</td>
                                                                <td>28.02.1996</td>
                                                                <td>Male</td>
                                                                <td>
                                                                    <MDBBtn tag="a" size="sm" color="danger" >
                                                                        <MDBIcon size="lg" icon="times-circle" />
                                                                    </MDBBtn>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Gnanod</td>
                                                                <td>Akalanka</td>
                                                                <td>1995Gnanod@gmail.com</td>
                                                                <td>12.05.1995</td>
                                                                <td>Male</td>
                                                                <td>
                                                                    <MDBBtn tag="a" size="sm" color="danger">
                                                                        <MDBIcon size="lg" icon="times-circle" />
                                                                    </MDBBtn>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Divyani</td>
                                                                <td>Rajapakshe</td>
                                                                <td>Divyani@gmail.com</td>
                                                                <td>12.05.1998</td>
                                                                <td>Female</td>
                                                                <td>
                                                                    <MDBBtn  tag="a" size="sm" color="danger">
                                                                        <MDBIcon size="lg" icon="times-circle" />
                                                                    </MDBBtn>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Tinali</td>
                                                                <td>Masha</td>
                                                                <td>Tinali@gmail.com</td>
                                                                <td>12.05.1997</td>
                                                                <td>Female</td>
                                                                <td>
                                                                    <MDBBtn tag="a" size="sm" color="danger">
                                                                        <MDBIcon size="lg" icon="times-circle" />
                                                                    </MDBBtn>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Gnanod</td>
                                                                <td>Akalanka</td>
                                                                <td>1995Gnanod@gmail.com</td>
                                                                <td>12.05.1995</td>
                                                                <td>Male</td>
                                                                <td>
                                                                    <MDBBtn tag="a" size="sm" color="danger">
                                                                        <MDBIcon size="lg" icon="times-circle" />
                                                                    </MDBBtn>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Samitha</td>
                                                                <td>Vidhanaarachchi</td>
                                                                <td>samithavidhanaarachchi@gmail.com</td>
                                                                <td>28.02.1996</td>
                                                                <td>Male</td>
                                                                <td>
                                                                    <MDBBtn tag="a" size="sm" color="danger" >
                                                                        <MDBIcon size="lg" icon="times-circle" />
                                                                    </MDBBtn>
                                                                </td>
                                                            </tr>
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
