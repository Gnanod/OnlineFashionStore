import React, {Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
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
    MDBInput, MDBBtn, MDBTableHead, MDBTableBody, MDBTable, MDBAlert, MDBBtnGroup
} from 'mdbreact';
import './UserManage.css';
import './AdminAdd.css';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import constants from "../../../constants/constants";
import axios from "axios";
import {InputGroup} from "react-bootstrap";


export default class AdminManage extends Component {
    constructor(props) {
        super(props);


        this.state = {
            AdminName:'',
            AdminNameValidation: false,
            AdminEmail: '',
            AdminEmailValidation: false,
            AdminPosition: '',
            AdminPositionValidation: false,
            AdminPassword: '',
            AdminPasswordValidation: false,
            AdminCPass: '',
            AdminCPassValidation: false,
            currentPage: 1,
            userPerPage: 5,
            adminList:[]
        }

        this.sweetalertfunction = this.sweetalertfunction.bind(this);
        this.submitAdmin = this.submitAdmin.bind(this);
        this.getDetails = this.getDetails.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPass = this.onChangeConfirmPass.bind(this);

        this.firstPage = this.firstPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.lastPage = this.lastPage.bind(this);
    }


    componentDidMount() {
        this.getDetails();
    }

    getDetails(){
        console.log("get Admin Details");
        axios.get(constants.backend_url + 'api/adminDetail/getAlldetail').then(response => {
            console.log(response.data);
            this.setState({adminList:response.data})
            this.countgender();
        }).catch(function (error) {
            console.log(error);
        })
    }


    onChangeName(e)
    {
        this.setState({
            AdminName: e.target.value,
            AdminNameValidation: false
        });
    }

    onChangeEmail(e)
    {
        this.setState({
            AdminEmail: e.target.value,
            AdminEmailValidation: false
        });

    }

    onChangePosition(e)
    {
        this.setState({
            AdminPosition: e.target.value,
            AdminPositionValidation: false
        });

    }

    onChangePassword(e)
    {
        this.setState({
            AdminPassword: e.target.value,
            AdminPasswordValidation: false
        });

    }

    onChangeConfirmPass(e)
    {
        this.setState({
            AdminCPass: e.target.value,
            AdminCPassValidation: false
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

        if(this.state.currentPage < Math.ceil(this.state.adminList.length / this.state.userPerPage)){
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }

    }

    lastPage(){

        if(this.state.currentPage < Math.ceil(this.state.adminList.length / this.state.userPerPage)){
            this.setState({
                currentPage: Math.ceil(this.state.adminList.length / this.state.userPerPage)
            })
        }

    }




    //
    //     sweetalertfunction(){
    //     console.log("button clicks");
    //     const swalWithBootstrapButtons = Swal.mixin({
    //         customClass: {
    //             confirmButton: 'btn btn-success',
    //             cancelButton: 'btn btn-danger'
    //         },
    //         buttonsStyling: false
    //     })
    //
    //     swalWithBootstrapButtons.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonText: 'Yes, delete it!',
    //         cancelButtonText: 'No, cancel!',
    //         reverseButtons: true
    //     }).then((result) => {
    //         if (result.value) {
    //             swalWithBootstrapButtons.fire(
    //                 'Deleted!',
    //                 'Customer deleted.',
    //                 'success'
    //             )
    //         } else if (
    //             /* Read more about handling dismissals below */
    //             result.dismiss === Swal.DismissReason.cancel
    //         ) {
    //             swalWithBootstrapButtons.fire(
    //                 'Cancelled',
    //                 'Customer details not deleted',
    //                 'error'
    //             )
    //         }
    //     })
    // }

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
                axios.get(constants.backend_url + 'api/adminDetail/deleteAdmin/'+ id).then(response => {
                    if (response.data.adminDelete === 'success') {
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




    submitAdmin(event) {
        event.preventDefault();
        // event.target.className += " was-validated";

        if(this.state.AdminPassword == this.state.AdminCPass){
            if(this.state.AdminName != ''){
                if(this.state.AdminEmail != ''){
                    if(this.state.AdminPosition != ''){
                        if(this.state.AdminPassword != ''){
                            if(this.state.AdminCPass != '' ){
                                            console.log("Validation complete");
                                const newadminDetail = {
                                    Name: this.state.AdminName,
                                    Email: this.state.AdminEmail,
                                    position: this.state.AdminPosition,
                                    password: this.state.AdminPassword

                                }
                                axios.post(constants.backend_url + 'api/adminDetail/add', newadminDetail)
                                    .then(res => {
                                            console.log(res)
                                            console.log(newadminDetail);
                                            if (res.data.AdminDetail === 'successful') {
                                                Swal.fire(
                                                    '',
                                                    'Admin added successfully !.',
                                                    'success'
                                                );
                                                this.setState({
                                                    AdminName:'',
                                                    AdminNameValidation: false,
                                                    AdminEmail: '',
                                                    AdminEmailValidation: false,
                                                    AdminPosition: '',
                                                    AdminPositionValidation: false,
                                                    AdminPassword: '',
                                                    AdminPasswordValidation: false,
                                                    AdminCPass: '',
                                                    AdminCPassValidation: false
                                                })
                                            } else {
                                                Swal.fire(
                                                    '',
                                                    'Admin not added !',
                                                    'error'
                                                )
                                            }
                                        }
                                    );
                            }else{console.log("cpass empty");
                                this.setState({
                                    AdminCPassValidation: true
                                })
                            }
                        }else{console.log("pass empty");
                            this.setState({
                                AdminPasswordValidation: true
                            })
                        }
                    }else{console.log("position empty");
                        this.setState({
                            AdminPositionValidation: true
                        })
                    }
                }else{console.log("Email empty");
                    this.setState({
                        AdminEmailValidation: true
                    })
                }
            }else{console.log("Name empty''");
                this.setState({
                    AdminNameValidation: true
                })
            }
        }else{console.log("pass != confirm pass");
            Swal.fire(
                '',
                'password and confirm password are not the same !',
                'error'
            );
        }
    };


    render() {
        const{adminList, currentPage, userPerPage} = this.state;
        const lastIndex = currentPage * userPerPage;
        const firstIndex = lastIndex - userPerPage;
        const currentUsers = adminList.slice(firstIndex, lastIndex );
        const totalPages = Math.ceil(adminList.length / userPerPage) ;
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
                                        <MDBTableHead color="secondary-color" textWhite>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email Address</th>
                                                <th>Position</th>
                                                <th>Action</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>

                                            {
                                                currentUsers.length === 0 ?
                                                    <tr >
                                                        <td colSpan="12" style={{textAlign : "center", fontWeight: "bold"}}>
                                                            <MDBAlert color="danger" >
                                                                No Admins Registered
                                                            </MDBAlert>
                                                        </td>
                                                    </tr> :
                                                    currentUsers.map(item => {
                                                    return(


                                            <tr>
                                                <td>{item.Name}</td>
                                                <td>{item.Email}</td>
                                                <td>{item.position}</td>

                                                <td>
                                                    <MDBBtn tag="a" size="sm" color="success" >
                                                        <MDBIcon size="lg" icon="pen" />
                                                    </MDBBtn>&nbsp;&nbsp;&nbsp;

                                                    <MDBBtn tag="a" size="sm" color="danger"  onClick={() => this.sweetalertfunction(item._id)}>
                                                        <MDBIcon size="lg" icon="times-circle" />
                                                    </MDBBtn>
                                                </td>
                                            </tr>

                                                    )
                                                })}


                                            {/*<tr>*/}
                                            {/*    <td>Divyani</td>*/}
                                            {/*    <td>Rajapakshe</td>*/}
                                            {/*    <td>Divyani@gmail.com</td>*/}

                                            {/*    <td>*/}
                                            {/*        <MDBBtn tag="a" size="sm" color="success"  >*/}
                                            {/*            <MDBIcon size="lg" icon="pen" />*/}
                                            {/*        </MDBBtn>&nbsp;&nbsp;&nbsp;*/}

                                            {/*        <MDBBtn tag="a" size="sm" color="danger"  onClick={this.sweetalertfunction}>*/}
                                            {/*            <MDBIcon size="lg" icon="times-circle" />*/}
                                            {/*        </MDBBtn>*/}
                                            {/*    </td>*/}
                                            {/*</tr>*/}
                                            {/*<tr>*/}
                                            {/*    <td>Tinali</td>*/}
                                            {/*    <td>Masha</td>*/}
                                            {/*    <td>Tinali@gmail.com</td>*/}

                                            {/*    <td>*/}
                                            {/*        <MDBBtn tag="a" size="sm" color="danger" onClick={this.sweetalertfunction}>*/}
                                            {/*            <MDBIcon size="lg" icon="times-circle" />*/}
                                            {/*        </MDBBtn>*/}
                                            {/*    </td>*/}
                                            {/*</tr>*/}
                                            {/*<tr>*/}
                                            {/*    <td>Gnanod</td>*/}
                                            {/*    <td>Akalanka</td>*/}
                                            {/*    <td>1995Gnanod@gmail.com</td>*/}

                                            {/*    <td>*/}
                                            {/*        <MDBBtn tag="a" size="sm" color="danger" onClick={this.sweetalertfunction}>*/}
                                            {/*            <MDBIcon size="lg" icon="times-circle" />*/}
                                            {/*        </MDBBtn>*/}
                                            {/*    </td>*/}
                                            {/*</tr>*/}
                                            {/*<tr>*/}
                                            {/*    <td>Samitha</td>*/}
                                            {/*    <td>Vidhanaarachchi</td>*/}
                                            {/*    <td>samithavidhanaarachchi@gmail.com</td>*/}
                                            {/*    <td>*/}
                                            {/*        <MDBBtn tag="a" size="sm" color="danger" onClick={this.sweetalertfunction}>*/}
                                            {/*            <MDBIcon size="lg" icon="times-circle" />*/}
                                            {/*        </MDBBtn>*/}
                                            {/*    </td>*/}
                                            {/*</tr>*/}
                                        </MDBTableBody>
                                    </MDBTable>
                                    {/*<MDBPagination circle className="justify-content-center">*/}
                                    {/*    <MDBPageItem disabled>*/}
                                    {/*        <MDBPageNav className="page-link" aria-label="Previous">*/}
                                    {/*            <span aria-hidden="true">&laquo;</span>*/}
                                    {/*            <span className="sr-only">Previous</span>*/}
                                    {/*        </MDBPageNav>*/}
                                    {/*    </MDBPageItem>*/}
                                    {/*    <MDBPageItem active >*/}
                                    {/*        <MDBPageNav className="page-link secondary-color" >*/}
                                    {/*            1 <span className="sr-only " >(current)</span>*/}
                                    {/*        </MDBPageNav>*/}
                                    {/*    </MDBPageItem>*/}
                                    {/*    <MDBPageItem>*/}
                                    {/*        <MDBPageNav className="page-link">*/}
                                    {/*            2*/}
                                    {/*        </MDBPageNav>*/}
                                    {/*    </MDBPageItem>*/}
                                    {/*    <MDBPageItem>*/}
                                    {/*        <MDBPageNav className="page-link">*/}
                                    {/*            3*/}
                                    {/*        </MDBPageNav>*/}
                                    {/*    </MDBPageItem>*/}
                                    {/*    <MDBPageItem>*/}
                                    {/*        <MDBPageNav className="page-link">*/}
                                    {/*            4*/}
                                    {/*        </MDBPageNav>*/}
                                    {/*    </MDBPageItem>*/}
                                    {/*    <MDBPageItem>*/}
                                    {/*        <MDBPageNav className="page-link">*/}
                                    {/*            5*/}
                                    {/*        </MDBPageNav>*/}
                                    {/*    </MDBPageItem>*/}
                                    {/*    <MDBPageItem>*/}
                                    {/*        <MDBPageNav className="page-link">*/}
                                    {/*            &raquo;*/}
                                    {/*        </MDBPageNav>*/}
                                    {/*    </MDBPageItem>*/}
                                    {/*</MDBPagination>*/}

                                    <div style={{"float" : "left" , "color" : "#6f42c1"}}> Showing Page {currentPage} of {totalPages} </div>
                                    <div style={{"float" : "right" }}>
                                        <InputGroup>
                                            <InputGroup.Prepend></InputGroup.Prepend>
                                            <MDBBtnGroup>
                                                <MDBBtn color="secondary" size="sm" disabled={currentPage === 1 ? true : false}  onClick={this.firstPage}>First</MDBBtn>
                                                <MDBBtn color="secondary" size="sm" disabled={currentPage === 1 ? true : false} onClick={this.prevPage} >Prev</MDBBtn>
                                            </MDBBtnGroup>
                                            {/*<FormControl className="pageNumCss" ></FormControl>*/}
                                            <input type="text" className="pageNumCss" name="currentPage" value={currentPage} onChange={this.changePage} disabled/>
                                            <InputGroup.Append>
                                                <MDBBtnGroup>
                                                    <MDBBtn color="secondary" size="sm" disabled={currentPage === totalPages ? true : false} onClick={this.nextPage}>Next</MDBBtn>
                                                    <MDBBtn color="secondary" size="sm" disabled={currentPage === totalPages ? true : false} onClick={this.lastPage}>Last</MDBBtn>
                                                </MDBBtnGroup>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </div>

                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md="4">
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={this.submitAdmin}>
                                    <p className="h4 text-center py-1">Admin Manage</p>
                                    <label htmlFor="defaultFormCardNameEx1" className="grey-text font-weight-light">Name</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon">
                                              <i className="fa fa-user prefix"></i>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            aria-label="Name"
                                            aria-describedby="basic-addon"
                                            value={this.state.AdminName}
                                            onChange={this.onChangeName}
                                        />
                                        {
                                            this.state.AdminNameValidation ? <MDBAlert color="danger">
                                                Name Field Empty
                                            </MDBAlert> : ''
                                        }
                                    </div>


                                    <label htmlFor="defaultFormCardEmailEx2" className="grey-text font-weight-light">Email Address</label>

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon">
                                             <MDBIcon far icon="envelope" />
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email Address"
                                            aria-label="Email Address"
                                            aria-describedby="basic-addon"
                                            value={this.state.AdminEmail}
                                            onChange={this.onChangeEmail}
                                        />
                                        {
                                            this.state.AdminEmailValidation? <MDBAlert color="danger">
                                                Email Field Empty
                                            </MDBAlert> : ''
                                        }
                                    </div>


                                    <label htmlFor="defaultFormCardEmailEx3" className="grey-text font-weight-light">Position</label>

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon">
                                             <MDBIcon icon="graduation-cap" />
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Position"
                                            aria-label="Position"
                                            aria-describedby="basic-addon"
                                            value={this.state.AdminPosition}
                                            onChange={this.onChangePosition}
                                        />
                                        {
                                            this.state.AdminPositionValidation ? <MDBAlert color="danger">
                                                Position Field Empty
                                            </MDBAlert> : ''
                                        }
                                    </div>


                                    <label htmlFor="defaultFormCardEmailEx4" className="grey-text font-weight-light">Password</label>

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon">
                                             <MDBIcon icon="lock" />
                                            </span>
                                        </div>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            aria-label="password"
                                            aria-describedby="basic-addon"
                                            value={this.state.AdminPassword}
                                            onChange={this.onChangePassword}
                                        />
                                        {
                                            this.state.AdminPasswordValidation ? <MDBAlert color="danger">
                                                Position Field Empty
                                            </MDBAlert> : ''
                                        }
                                    </div>

                                    <label htmlFor="defaultFormCardEmailEx5" className="grey-text font-weight-light">Confirm password</label>

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon">
                                              <MDBIcon icon="shield-alt" />
                                            </span>
                                        </div>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="ConfirmPassword"
                                            aria-label="ConfirmPassword"
                                            aria-describedby="basic-addon"
                                            value={this.state.AdminCPass}
                                            onChange={this.onChangeConfirmPass}
                                        />
                                        {
                                            this.state.AdminCPass != this.state.AdminPassword ? <MDBAlert color="danger">
                                                password and confirm password does not match
                                            </MDBAlert> : ''
                                        }
                                    </div>

                                    <div className="text-center py-4 mt-0">
                                        <MDBBtn className="btn btn-outline-purple" type="submit">
                                            <b>Add Admin</b>
                                            <MDBIcon icon="plus"className="ml-2" />
                                        </MDBBtn>
                                    </div>
                                </form>
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