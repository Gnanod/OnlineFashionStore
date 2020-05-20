import React,{Component} from "react";
import {MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBAnimation, MDBAlert} from 'mdbreact';
import './Login.css';
import { MDBCard, MDBCardBody, MDBInput} from 'mdbreact';
import axios from "axios";
import constants from "../../Constants/constants";
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default  class NewLogin extends Component {
    constructor(props){
        super(props);
        // this.login = this.login.bind(this);

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
            dob:'',
            MaleCount:0,
            FemaleCount:0,
            loginEmail:'',
            loginPass: '',
            loginEmailV: false,
            loginPassV: false
        };

        this.onClick = this.onClick.bind(this);
        this.submitUser = this.submitUser.bind(this);
        this.validateUser = this.validateUser.bind(this);
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeLname = this.onChangeLname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onChangeEmailV = this.onChangeEmailV.bind(this);
        this.onChangePassV = this.onChangePassV.bind(this);

    }

    // login(){
    //     localStorage.setItem("userLogged","userLog");
    //     this.props.history.push('/');
    //     window.location.reload();
    // }

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

    onChangeEmailV(event){
        this.setState({
            loginEmail:event.target.value,
            [event.target.name]: event.target.value
        })
    }

    onChangePassV(event){
        this.setState({
            loginPass:event.target.value,
            [event.target.name]: event.target.value
        })
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
                                            if(this.state.gender == 'Male' || this.state.gender == 'Female' ){
                                                if(this.state.gender == 'Male'){
                                                    this.state.MaleCount = this.state.MaleCount + 1;
                                                }else{
                                                    this.state.FemaleCount = this.state.FemaleCount + 1;
                                                }
                                                const newuserDetail = {
                                                    firstName: this.state.fname,
                                                    lastName: this.state.lname,
                                                    phoneNumber: this.state.phone,
                                                    gender: this.state.gender,
                                                    email: this.state.email,
                                                    password: this.state.password,
                                                    dob: this.state.dob,
                                                    male:this.state.MaleCount,
                                                    female:this.state.FemaleCount
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

                                            } else{
                                                Swal.fire(
                                                    '',
                                                    'Enter correct gender !.',
                                                    'error');
                                            }


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


    validateUser(event){
        event.preventDefault();

        if(this.state.loginEmail != '' ){
            this.setState({
                loginEmailV: false
            })
            if(this.state.loginPass != '' ){
                this.setState({
                    loginPassV: false
                })

                axios.get(constants.backend_url + 'api/userDetail/validateUser/' + this.state.loginEmail + '/' + this.state.loginPass)
                    .then(res => {
                            if (res.data.Message !== 'unsuccessful') {
                                localStorage.setItem("CustomerLogged","CustomerLogged");
                                localStorage.setItem("CustomerId",res.data.Message._id);
                                // this.context.router.push('/');
                                this.props.history.push('/');
                                // browserHistory
                                // const history = useHistory()
                                // this.history.pushState(null, '/');
                                // history.push('/');
                                window.location.reload();

                                this.setState({
                                    loginEmail: '',
                                    loginPass:'',
                                    loginEmailV: false,
                                    loginPassV:false
                                });

                            } else {
                                Swal.fire(
                                    '',
                                    'Login unsuccessful  !',
                                    'error'
                                )
                            }
                        }
                    );


            }else{
                console.log('email field empty');
                this.setState({
                    loginPassV: true
                })
            }
        }else{
            console.log('email field empty');
            this.setState({
                loginEmailV: true
            })


        }
    };


    render() {
        return (
            <div id='apppage'>
                <MDBView>
                    <MDBMask className='white-text gradient' />
                    <MDBContainer
                        style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                        className='d-flex justify-content-center white-text align-items-center'
                    >
                        <MDBRow>
                            <MDBCol md='12' className='text-center text-md-left mt-xl-5 mb-5'>
                                <MDBAnimation type='fadeInLeft' delay='.3s'>
                                    <MDBCard className="loginContainer" >
                                        <form className="needs-validation" onSubmit={this.validateUser} >
                                            <MDBCardBody className="mx-4">
                                                <div className="text-center">
                                                    <h3 className="dark-grey-text mb-5">
                                                        <strong>Admin Login</strong>
                                                    </h3>
                                                </div>
                                                <MDBInput label="Your email" group type="email" validate error="wrong" success="right" value={this.state.loginEmail} onChange={this.onChangeEmailV}/>
                                                {
                                                    this.state.loginEmailV  ?
                                                        <MDBAlert color="danger">
                                                            Please enter a value for email !
                                                        </MDBAlert> : ''
                                                }

                                                {/*<input value={this.state.loginPass} onChange={this.onChangePassV}/>*/}
                                                <MDBInput label="Your password" group type="password" validate containerClass="mb-0" value={this.state.loginPass} onChange={this.onChangePassV}/>
                                                {
                                                    this.state.loginPassV  ?
                                                        <MDBAlert color="danger">
                                                            Please enter a value for email !
                                                        </MDBAlert> : ''
                                                }

                                                <div className="text-center mb-3">
                                                    <MDBBtn type="submit" color='pink' className="btn-block z-depth-1a buttonSign " onClick={this.login}>
                                                        LOGIN
                                                    </MDBBtn>
                                                </div>
                                            </MDBCardBody>
                                        </form>

                                    </MDBCard>
                                </MDBAnimation>
                            </MDBCol>

                            <MDBCol md='6' xl='6' className='mt-xl-5'>
                                <MDBAnimation type='fadeInRight' delay='.3s'>
                                    <img src='/image/Bag.png' alt='' className='img-fluid'/>
                                </MDBAnimation>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        );
    }
}
