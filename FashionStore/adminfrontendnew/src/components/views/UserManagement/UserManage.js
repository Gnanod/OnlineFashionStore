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
import './UserManage.css';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import constants from "../../../constants/constants";
import axios from "axios";
import {InputGroup} from 'react-bootstrap';

export default class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartitem:'',
            detailList:[],
            currentPage: 1,
            userPerPage: 5,
            empty: false
        }

        this.sweetalertfunction = this.sweetalertfunction.bind(this);
        this.getDetails = this.getDetails.bind(this);
        this.changePage = this.changePage.bind(this);
        this.firstPage = this.firstPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.lastPage = this.lastPage.bind(this);


    }
    componentDidMount() {
        this.getDetails();
    }

    sweetalertfunction(id){
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
                axios.get(constants.backend_url + 'api/userDetail/deleteUser/'+ id).then(response => {
                    if (response.data.userDelete === 'success') {
                        swalWithBootstrapButtons.fire(
                            '',
                            'Delete Failed !.',
                            'error'
                        )
                    }else {
                        Swal.fire(
                            '',
                            'Customer Deleted !',
                            'success'
                        )
                    }
                })

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

            // if(this.state.datalist.length === 0){
            //     this.setState({empty: true})
            // }else{
            //     this.setState({empty: false})
            // }
        }).catch(function (error) {
            console.log(error);
        })
    }

    changePage(event){
        this.setState({
            [event.target.name] : parseInt(event.target.value)
        });
    }

    firstPage(){
        if(this.state.currentPage > 1){
            this.setState({
                currentPage: 1
            })
        }
    }

    prevPage(){
        if(this.state.currentPage > 1){
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }

    }

    nextPage(){

        if(this.state.currentPage < Math.ceil(this.state.detailList.length / this.state.userPerPage)){
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }

    }

    lastPage(){

        if(this.state.currentPage < Math.ceil(this.state.detailList.length / this.state.userPerPage)){
            this.setState({
                currentPage: Math.ceil(this.state.detailList.length / this.state.userPerPage)
            })
        }

    }






    render() {
        const{detailList, currentPage, userPerPage} = this.state;
        const lastIndex = currentPage * userPerPage;
        const firstIndex = lastIndex - userPerPage;
        const currentUsers = detailList.slice(firstIndex, lastIndex );
        const totalPages = Math.ceil(detailList.length / userPerPage) ;


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
                                                                <th>Name</th>
                                                                <th>Email Address</th>
                                                                <th>Contact Number</th>
                                                                <th>Date of Birth</th>
                                                                <th>Gender</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </MDBTableHead>

                                                        {
                                                            currentUsers.length === 0 ?
                                                                <tr >
                                                                    <td colSpan="12" style={{textAlign : "center", fontWeight: "bold"}}>
                                                                        <MDBAlert color="danger" >
                                                                            No Users Registered
                                                                        </MDBAlert>
                                                                    </td>
                                                                </tr> :
                                                                currentUsers.map(item => {

                                                        return(
                                                        <MDBTableBody>
                                                            <tr>
                                                                <td>{item.firstName + "  " + item.lastName}</td>
                                                                <td>{item.email}</td>
                                                                <td>{item.phoneNumber}</td>
                                                                <td>{item.dob}</td>
                                                                <td>{item.gender}</td>
                                                                <td>
                                                                    <MDBBtn tag="a" size="sm" color="danger" onClick={() => this.sweetalertfunction(item._id)} >
                                                                        <MDBIcon size="lg" icon="times-circle" />
                                                                    </MDBBtn>
                                                                </td>
                                                            </tr>
                                                        </MDBTableBody>
                                                            )
                                                        })}


                                                    </MDBTable>


                                                    {/*<MDBPagination circle className="justify-content-center">*/}
                                                    {/*    <MDBPageItem disabled={currentPage === 1 ? true : false} >*/}
                                                    {/*        <MDBPageNav className="page-link " onclick={this.PrevPage}>*/}
                                                    {/*            Prev*/}
                                                    {/*        </MDBPageNav>*/}
                                                    {/*    </MDBPageItem>*/}
                                                    {/*    <MDBPageItem active >*/}



                                                    {/*            <MDBPageNav >*/}
                                                    {/*             */}
                                                    {/*            </MDBPageNav>*/}


                                                    {/*    </MDBPageItem>*/}
                                                    {/*    <MDBPageItem disabled={currentPage === totalPages ? true : false}>*/}
                                                    {/*        <MDBPageNav className="page-link "  onclick={this.NextPage}>*/}
                                                    {/*            Next*/}
                                                    {/*        </MDBPageNav>*/}
                                                    {/*    </MDBPageItem>*/}
                                                    {/*</MDBPagination>*/}
                                                    <div style={{"float" : "left" , "color" : "#007bff"}}> Showing Page {currentPage} of {totalPages} </div>
                                                    <div style={{"float" : "right" }}>
                                                        <InputGroup>
                                                            <InputGroup.Prepend></InputGroup.Prepend>
                                                            <MDBBtnGroup>
                                                                <MDBBtn color="primary" size="sm" disabled={currentPage === 1 ? true : false}  onClick={this.firstPage}>First</MDBBtn>
                                                                <MDBBtn color="primary" size="sm" disabled={currentPage === 1 ? true : false} onClick={this.prevPage} >Prev</MDBBtn>
                                                                </MDBBtnGroup>
                                                            {/*<FormControl className="pageNumCss" ></FormControl>*/}
                                                            <input type="text" className="pageNumCss" name="currentPage" value={currentPage} onChange={this.changePage} disabled/>
                                                            <InputGroup.Append>
                                                                <MDBBtnGroup>
                                                                    <MDBBtn color="primary" size="sm" disabled={currentPage === totalPages ? true : false} onClick={this.nextPage}>Next</MDBBtn>
                                                                    <MDBBtn color="primary" size="sm" disabled={currentPage === totalPages ? true : false} onClick={this.lastPage}>Last</MDBBtn>
                                                                    </MDBBtnGroup>
                                                            </InputGroup.Append>
                                                        </InputGroup>
                                                    </div>


                                                    {/*<MDBContainer >*/}
                                                    {/*        <MDBRow className='d-flex justify-content-center align-items-center'  >*/}
                                                    {/*            <MDBCol md="4">*/}
                                                    {/*                <MDBInputGroup  style={{pageNumCss}}  prepend={<>*/}
                                                    {/*                    <MDBBtn size="sm" color="primary" className="m-0 px-3 py-1 z-depth-1">First</MDBBtn>*/}
                                                    {/*                    <MDBBtn size="sm" color="primary" className="m-0 px-3 py-1 z-depth-1">Prev</MDBBtn>*/}
                                                    {/*                </>*/}
                                                    {/*                } append={<>*/}
                                                    {/*                    <MDBBtn size="sm" color="primary" className="m-0 px-3 py-1 z-depth-1">Next</MDBBtn>*/}
                                                    {/*                    <MDBBtn  size="sm" color="primary" className="m-0 px-3 py-1 z-depth-1">Last</MDBBtn>*/}
                                                    {/*                </>*/}
                                                    {/*                }*/}
                                                    {/*                />*/}
                                                    {/*            </MDBCol>*/}
                                                    {/*        </MDBRow>*/}
                                                    {/*</MDBContainer>*/}

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
