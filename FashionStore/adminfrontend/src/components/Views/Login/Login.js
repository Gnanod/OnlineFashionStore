
import React,{Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


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
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="grey-text">
                                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                          success="right" />
                                <MDBInput label="Type your password" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                                <MDBBtn onClick={this.login}>Login</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}




