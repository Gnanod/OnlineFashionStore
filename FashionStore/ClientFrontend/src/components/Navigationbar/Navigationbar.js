import React, {Component} from 'react';
import {
    MDBCard, MDBCardBody,
    MDBCollapse, MDBContainer, MDBIcon, MDBInput,
    MDBMask,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem, MDBNavLink, MDBRow, MDBView
} from "mdbreact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Auxi from "../Hoc/Auxi";
import Home from "../Views/Home/Home";
import Cart from "../Views/Home/Cart";
import {TestComponent} from "../Views/Home/TestComponent";
import {HomePageImage} from "../Views/Home/HomePageImage";
import {ItemDetail} from "../Views/Item/ItemDetail";
import Wishlist from "../Views/Wishlist/Wishlist";
import './Navigationbar.css'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter , MDBCol, MDBAlert} from 'mdbreact';
import {Itemsaccordingtocategory} from "../Views/Category/Itemsaccordingtocategory";
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import styled from "styled-components";
import profile from "../Views/Profile/profile";
import axios from "axios";
import constants from "../Constants/constants";

export default class Navigationbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            modal: false,
            model2 : false,
            fname: '',
            lname: '',
            email: '',
            gender: '',
            password: '',
            phone: '',
            confirmpass: '',
            dob:''

            // options: [
            //     {
            //         text: "Option 1",
            //         value: "1"
            //     },
            //     {
            //         text: "Option 2",
            //         value: "2"
            //     },
            //     {
            //         text: "Option 3",
            //         value: "3"
            //     },
            //     {
            //         text: "Option 4",
            //         value: "4"
            //     },
            //     {
            //         text: "Option 5",
            //         value: "5"
            //     }
            // ]
        };
        this.onClick = this.onClick.bind(this);
        this.submitUser = this.submitUser.bind(this);

        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeLname = this.onChangeLname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggle2 = () => {
        this.setState({
            modal: !this.state.modal,
            modal2: !this.state.model2
        });
    }

    toggle3 = () => {
        this.setState({
            modal2: false,
            fname: "",
            lname: "",
            email: "",
            gender: "",
            password: "",
            phone: "",
            dob: '',
            confirmpass: ""

        });
    }

    onChangeFname(event){
        this.setState({
            fname:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeLname(event){
        this.setState({
            lname:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeEmail(event){
        this.setState({
            email:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeGender(event){
        this.setState({
            gender:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeDOB(event){
        this.setState({
            dob:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangePassword(event){
        this.setState({
            password:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangeConfirmPassword(event){
        this.setState({
            confirmpass:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangePhone(event){
        this.setState({
            phone:event.target.value,
            [event.target.name]: event.target.value
        })

    }



    submitUser(event) {
        event.preventDefault();
        event.target.className += " was-validated";



        if(this.state.password == this.state.confirmpass){
            if(this.state.fname != ''){
                if(this.state.lname != ''){
                    if(this.state.email != ''){
                        if(this.state.gender != ''){
                            if(this.state.phone != '' ){
                                if(this.state.password != ''){
                                    if(this.state.confirmpass != ''){
                                        if(this.state.dob != ''){
                                            console.log("Validation complete");

                                            const newuserDetail = {
                                                firstName: this.state.fname,
                                                lastName: this.state.lname,
                                                phoneNumber: this.state.phone,
                                                gender: this.state.gender,
                                                email: this.state.email,
                                                password: this.state.password,
                                                dob: this.state.dob
                                            }
                                            axios.post(constants.backend_url + 'api/userDetail/add', newuserDetail)
                                                .then(res => {
                                                        console.log(res)
                                                        console.log(newuserDetail);
                                                        if (res.data.userDetail === 'successful') {
                                                            Swal.fire(
                                                                '',
                                                                'User Details added successfully !.',
                                                                'success'
                                                            );
                                                            this.setState({
                                                                fname: '',
                                                                lname: '',
                                                                email: '',
                                                                gender: '',
                                                                password: '',
                                                                phone: '',
                                                                dob: '',
                                                                confirmpass: ''
                                                            })
                                                        } else {
                                                            Swal.fire(
                                                                '',
                                                                'User Details not added !',
                                                                'error'
                                                            )
                                                        }
                                                    }
                                                );
                                        }else{console.log("dob empty");}
                                    }else{console.log(" confirm pass empty");}
                                }else{console.log("pass empty");}
                            }else{console.log("phone empty");}
                        }else{console.log("gender empty");}
                    }else{console.log("email empty");}
                }else{console.log("lname empty");}
            }else{console.log("fname == ''");}
        }else{console.log("pass != confirm pass");
            Swal.fire(
                '',
                'password and confirm password are not the same !',
                'error'
            );
        }
    };
    //
    // changeHandler = event => {
    //     this.setState({ [event.target.name]: event.target.value });
    // };


    render() {
        return (
            <div>
                <header>

                    <MDBNavbar  color="black" fixed="top" dark expand="md"
                    >
                        <MDBNavbarBrand href="/">
                            <strong>GSTD Stores</strong>
                        </MDBNavbarBrand>
                        {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick}/>}
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem active>
                                    <MDBNavLink to="/">Home</MDBNavLink>
                                </MDBNavItem>
                                {/*<MDBNavItem>*/}
                                    {/*<MDBNavLink to="/test">Link</MDBNavLink>*/}
                                {/*</MDBNavItem>*/}
                                <MDBNavItem>
                                    <MDBNavLink to="/profile">Profile</MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBNavLink to="/cart" className="ml-auto">
                                        <ButtonContainer>
                                            <i className="fas fa-cart-plus"></i>
                                            Cart
                                        </ButtonContainer>
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBBtn color="dark" onClick={this.toggle}> <i className="fas fa-user"></i>&nbsp;&nbsp;&nbsp;Login</MDBBtn>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/Wishlist" className="ml-auto">
                                        <ButtonContainer>
                                            <i className="fas fa-heart"></i>
                                            WishList
                                        </ButtonContainer>
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>

                    <Route exact path="/" component={HomePageImage}/>

                </header>

                <main className="container-fluid">

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/test" component={TestComponent}/>
                        {/*<Route exact path="/item" component={ItemDetail}/>*/}
                        <Route exact path="/item/:id/:colorId" component={ItemDetail}/>
                        <Route exact path="/itemsaccordingtocategory/:id" component={Itemsaccordingtocategory}/>
                        <Route exact path="/Cart" component={Cart}/>
                        <Route exact path="/Wishlist" component={Wishlist}/>
                        <Route exact path="/profile" component={profile}/>
                    </Switch>

                    <MDBContainer>
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBModalHeader toggle={this.toggle} ></MDBModalHeader>
                            <MDBModalBody>
                                <MDBCard>
                                    <MDBCardBody className="mx-4">
                                        <div className="text-center">
                                            <h2 className="loginh3 mb-5">
                                                <strong className="loginh3 ">LOGIN</strong>
                                            </h2>
                                        </div>
                                        <MDBInput label="Your email" group type="email" validate error="wrong" success="right"/>
                                        <MDBInput label="Your password" group type="password" validate containerClass="mb-0"/>
                                        <div className="text-center mb-3">
                                            <MDBBtn type="button" gradient="blue" rounded className="btn-block z-depth-1a">
                                                LOGIN
                                            </MDBBtn>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Not a member?
                                        <MDBBtn outline color="info"  size="sm" onClick={this.toggle2}>Sign In</MDBBtn>
                                    </p>
                                </MDBModalFooter>
                            </MDBModalBody>
                        </MDBModal>
                    </MDBContainer>


                    <MDBContainer>
                        <MDBModal isOpen={this.state.modal2} toggle={this.toggle3}>
                            <MDBModalHeader toggle={this.toggle3} ></MDBModalHeader>
                            <MDBModalBody>
                                <MDBCard>
                                    <MDBCardBody className="mx-4">
                                        <div className="text-center">
                                            <h2 className="loginh3 mb-5">
                                                <strong className="loginh3 ">REGISTER</strong>
                                            </h2>
                                        </div>
                                        {/*<MDBInput label="Your email" group type="email" validate error="wrong" success="right"/>*/}
                                        {/*<MDBInput label="Your password" group type="password" validate containerClass="mb-0"/>*/}

                                        <form className="needs-validation" onSubmit={this.submitUser} noValidate>
                                            <MDBRow>
                                                {/*<MDBCol  md="12" className="mb-3">*/}
                                                <label htmlFor="firstnameid" className="grey-text">First name</label>
                                                <input value={this.state.fname} name="fname" onChange={this.onChangeFname} type="text" id="firstnameid" className="form-control" placeholder="First name" required/>
                                                <div className="invalid-feedback">Please provide the first name.</div>

                                                {/*</MDBCol>*/}
                                                {/*<MDBCol  md="12" className="mb-3">*/}
                                                <label htmlFor="lastnameid" className="grey-text">Last name</label>
                                                <input value={this.state.lname} name="lname" onChange={this.onChangeLname} type="text" id="lastnameid" className="form-control" placeholder="Last name" required/>
                                                <div className="invalid-feedback">Please provide the last name.</div>

                                                {/*</MDBCol>*/}
                                                {/*<MDBCol md="4" className="mb-3">*/}
                                                <label htmlFor="emailid" className="grey-text">Email</label>
                                                <input value={this.state.email} onChange={this.onChangeEmail}  type="email" id="emailid" className="form-control" name="email" placeholder="Your Email address"/>
                                                <div className="invalid-feedback">Please provide an email.</div>

                                                {/*</MDBCol>*/}
                                            </MDBRow>
                                            <MDBRow>
                                                {/*<MDBCol md="6" className="mb-0">*/}
                                                <label htmlFor="phoneid" className="grey-text">Contact number</label>
                                                <input onChange={this.onChangePhone} type="text" value={this.state.phone} id="phoneid" className="form-control" name="phone" placeholder="Contact number" required/>
                                                <div className="invalid-feedback">Please provide the contact number</div>

                                                {/*</MDBCol>*/}

                                                {/*<MDBCol md="6" className="mb-0">*/}
                                                <label htmlFor="phoneid" className="grey-text">Date of Birth</label>
                                                <input onChange={this.onChangeDOB} type="date" value={this.state.dob} id="dobid" className="form-control" name="dob"  required/>
                                                <div className="invalid-feedback">Please provide the Date of Birth</div>
                                                {/*</MDBCol>*/}

                                                {/*<MDBCol md="6" className="mb-0">*/}
                                                <label htmlFor="passwordid" className="grey-text">Password</label>
                                                <input onChange={this.onChangePassword} type="password" value={this.state.password} id="passwordid" className="form-control" name="password" placeholder="Password" required/>
                                                <div className="invalid-feedback">Please provide the password</div>

                                                {/*</MDBCol>*/}


                                                {/*<MDBCol md="6" className="mb-0">*/}
                                                <label htmlFor="conpasswordid" className="grey-text">Confirm Password</label>
                                                <input onChange={this.onChangeConfirmPassword} type="password" value={this.state.confirmpass} id="conpasswordid" className="form-control" name="confirmpass" placeholder="Confirm Password" required/>
                                                <div className="invalid-feedback">Please provide the confirm password</div>
                                                {
                                                    this.state.password != this.state.confirmpass ? <MDBAlert color="danger">
                                                        password and confirm password does not match
                                                    </MDBAlert> : ''
                                                }


                                                {/*</MDBCol>*/}

                                                {/*<MDBCol md="6" className="mb-0">*/}
                                                <label htmlFor="genderid" className="grey-text">Gender</label>
                                                <input value={this.state.gender} onChange={this.onChangeGender} type="text" id="genderid" className="form-control" name="gender" placeholder="Gender" required/>
                                                {/*<MDBSelect*/}
                                                {/*    options={this.state.options}*/}
                                                {/*    selected="Choose your option"*/}
                                                {/*    color="primary"*/}
                                                {/*    label="Example label"*/}
                                                {/*/>*/}
                                                <select id="cars"  onChange={this.changeHandler}>
                                                    <option value="volvo">Volvo</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="opel">Opel</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                                <div className="invalid-feedback">Please provide your gender.</div>
                                                {/*</MDBCol>*/}
                                            </MDBRow>
                                            <br></br>
                                            <MDBBtn  gradient="blue" rounded className="btn-block z-depth-1a" type="submit">
                                                REGISTER
                                            </MDBBtn>
                                        </form>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBModalBody>
                        </MDBModal>
                    </MDBContainer>

                </main>
            </div>
        );


    }
}
const ButtonContainer = styled.button`
 text-transform:capitalize;
 font-size:1rem;
 background:transparent; 
 color:#fff;
 border-radius:0.4rem;
 border:0rem;
 cursor:pointer;
 transition:all 0.5s ease-in-out;
 &:hover{
    background-color: black;
 }
  &:focus{
    outline:none;
 }
 
`;
