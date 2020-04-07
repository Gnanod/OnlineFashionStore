import React,{Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBModalFooter } from 'mdbreact';
import './Login.css';





export default  class Login extends Component{


    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login(){
        localStorage.setItem("userLogged","userLog");
        this.props.history.push('/');
        window.location.reload();
    }

    render(){
        return(
            <MDBContainer >
                <MDBRow >
                    <MDBCol md="6" >
                        <MDBCard className='card-image'
                                 style={{
                                     backgroundImage:
                                         'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)',
                                     width: '28rem'
                                 }}>
                            <MDBCardBody className="mx-4">
                                <div className="text-center">
                                    <h3 className="dark-grey-text mb-5">
                                        <strong>Admin Login</strong>
                                    </h3>
                                </div>
                                <MDBInput label="Username" group type="email"  validate error="wrong" success="right" />
                                <MDBInput label="Password" group type="password" validate containerClass="mb-0"/>
                                <div className="text-center mb-3">
                                    <MDBBtn type="button" gradient="blue" className="btn-block z-depth-1a buttonSign" onClick={this.login}>
                                        LOGIN
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}




