import React, {Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBInputGroup,
    MDBContainer,MDBPagination, MDBPageItem, MDBPageNav,
    MDBNavbar,
    MDBAvatar,
    MDBIcon,MDBDataTable,MDBFormInline,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBInput, MDBBtn, MDBTableHead, MDBTableBody, MDBTable
} from 'mdbreact';
import './profile.css';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import {colors} from "@material-ui/core";


export default class profile extends Component {

    constructor(props) {
        super(props);
        this.sweetalertfunction = this.sweetalertfunction.bind(this);
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



    render() {
        return (
            <div id='parallaxintro'>

                <MDBCard className="my-5 px-5 pb-5">
                    <MDBCardBody>
                        {/*<MDBRow>*/}
                        {/*    <MDBCol md="12">*/}
                        {/*        <MDBCard reverse>*/}
                        {/*            <MDBView hover cascade waves>*/}
                        {/*                <img*/}
                        {/*                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg"*/}
                        {/*                    alt=""*/}
                        {/*                    className="img-fluid"*/}
                        {/*                />*/}
                        {/*                <MDBMask overlay="white-slight" className="waves-light" />*/}
                        {/*            </MDBView>*/}
                        {/*            <MDBCardBody cascade className="text-center">*/}
                        {/*                <h2 className="font-weight-bold">*/}
                        {/*                    <a href="#!">Title of the news</a>*/}
                        {/*                </h2>*/}
                        {/*                <p>*/}
                        {/*                    Written by*/}
                        {/*                    <a href="#!">*/}
                        {/*                        <strong>Abby Madison</strong>*/}
                        {/*                    </a>*/}
                        {/*                    , 26/08/2018*/}
                        {/*                </p>*/}
                        {/*                <MDBBtn className="btn-fb waves-light">*/}
                        {/*                    <MDBIcon fab icon="facebook-f" className="pr-2" />*/}
                        {/*                    Facebook*/}
                        {/*                </MDBBtn>*/}
                        {/*                <span className="counter">46</span>*/}
                        {/*                <MDBBtn className="btn-tw waves-light">*/}
                        {/*                    <MDBIcon fab icon="twitter" className="pr-2" />*/}
                        {/*                    Twitter*/}
                        {/*                </MDBBtn>*/}
                        {/*                <span className="counter">22</span>*/}
                        {/*                <MDBBtn className="btn-gplus waves-light">*/}
                        {/*                    <MDBIcon fab icon="google-plus-g" className="pr-2" />*/}
                        {/*                    Google*/}
                        {/*                </MDBBtn>*/}
                        {/*                <span className="counter">31</span>*/}
                        {/*                <MDBBtn color="default" className="waves-light">*/}
                        {/*                    <MDBIcon icon="comments" className="pr-2" />*/}
                        {/*                    Comments*/}
                        {/*                </MDBBtn>*/}
                        {/*                <span className="counter">18</span>*/}
                        {/*            </MDBCardBody>*/}
                        {/*        </MDBCard>*/}
                        {/*        <MDBContainer className="mt-5">*/}
                        {/*            <p>*/}
                        {/*                At vero eos et accusamus et iusto odio dignissimos ducimus qui*/}
                        {/*                praesentium voluptatum deleniti atque corrupti quos dolores et*/}
                        {/*                quas molestias excepturi sint occaecati cupiditate non*/}
                        {/*                provident, similique sunt in culpa nemo enim ipsam voluptatem*/}
                        {/*                quia voluptas sit qui officia deserunt mollitia animi, id est*/}
                        {/*                laborum et dolorum fuga quidem rerum facilis est distinctio.*/}
                        {/*            </p>*/}
                        {/*            <p>*/}
                        {/*                Nam libero tempore, cum soluta nobis est eligendi optio cumque*/}
                        {/*                nihil impedit quo minus id quod maxime placeat facere*/}
                        {/*                possimus, omnis voluptas assumenda est, omnis dolor*/}
                        {/*                repellendus. Quis autem vel eum iure reprehenderit qui in ea*/}
                        {/*                voluptate velit esse quam nihil molestiae consequatur.*/}
                        {/*                Temporibus autem quibusdam et aut officiis debitis aut rerum*/}
                        {/*                necessitatibus saepe eveniet ut et voluptates repudiandae sint*/}
                        {/*                et molestiae non recusandae itaque earum rerum.*/}
                        {/*            </p>*/}
                        {/*        </MDBContainer>*/}
                        {/*    </MDBCol>*/}
                        {/*</MDBRow>*/}
                        {/*<hr className="mb-5 mt-4" />*/}
                        <MDBRow>
                            <MDBCol md="12">
                                <MDBCard reverse>
                                    {/*<MDBView hover cascade waves>*/}
                                    {/*    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg" alt="" className="img-fluid"/>*/}
                                    {/*    <MDBMask overlay="white-slight" className="waves-light" />*/}
                                    {/*</MDBView>*/}
                                    <MDBCardBody cascade className="text-center">




                                        <h2 className="font-weight-bold h2col"  >Welcome USER</h2>
                                        <MDBBtn className="btn-fb waves-light">
                                            <i className="fas fa-user"></i>&nbsp;&nbsp;&nbsp;
                                            Profile
                                        </MDBBtn>

                                        <MDBBtn className="btn-tw waves-light">
                                            <i className="fas fa-user-edit"></i>&nbsp;&nbsp;&nbsp;
                                            Edit Profile
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBContainer className="mt-5">

                                    <section className="my-5">
                                        <MDBRow>
                                            <MDBCol lg="5" className="text-center text-lg-left">
                                                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt=""/>
                                            </MDBCol>
                                            <MDBCol lg="7">
                                                <MDBRow className="mb-3">
                                                    <MDBCol size="1">
                                                        <MDBIcon icon="user" size="lg" className="indigo-text" />
                                                    </MDBCol>
                                                    <MDBCol xl="10" md="11" size="10">
                                                        <h5 className="font-weight-bold mb-3">Name</h5>
                                                        <p className="grey-text">
                                                            Samitha Vidhanaarachchci
                                                        </p>
                                                    </MDBCol>
                                                </MDBRow>
                                                <MDBRow className="mb-3">
                                                    <MDBCol size="1">
                                                        <MDBIcon icon="envelope" size="lg" className="indigo-text" />
                                                    </MDBCol>
                                                    <MDBCol xl="10" md="11" size="10">
                                                        <h5 className="font-weight-bold mb-3">Email Address</h5>
                                                        <p className="grey-text">
                                                            samithavidhanaarachchi@gmail.com
                                                        </p>
                                                    </MDBCol>
                                                </MDBRow>
                                                <MDBRow className="mb-3">
                                                    <MDBCol size="1">
                                                        <MDBIcon icon="calendar-alt" size="lg" className="indigo-text" />
                                                    </MDBCol>
                                                    <MDBCol xl="10" md="11" size="10">
                                                        <h5 className="font-weight-bold mb-3">Date of Birth</h5>
                                                        <p className="grey-text">
                                                            02.28.1996
                                                        </p>
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBCol>
                                        </MDBRow>
                                    </section>

                                    <MDBRow className="Feedbakadmin">
                                        <MDBCol md="12">
                                            <form>
                                                <br></br>
                                                <h2 className="font-weight-bold h2col2"  >Feedback</h2>
                                                <MDBInputGroup prepend="Your feedback" type="textarea" />
                                                <div className="text-center mt-4">
                                                    <MDBBtn type="button" color="danger" rounded className="btn-block z-depth-1a">
                                                        <i className="fas fa-envelope" > </i> &nbsp;&nbsp;&nbsp;<b>Submit</b>
                                                    </MDBBtn>
                                                </div>
                                                <br></br>
                                            </form>
                                        </MDBCol>
                                    </MDBRow>

                                </MDBContainer>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}