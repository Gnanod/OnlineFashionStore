import React, {Component} from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardGroup,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol, MDBContainer,
    MDBRow
} from "mdbreact";
import SectionContainer from "../../SectionContainer/sectionContainer";


export default class Home extends Component {

    render() {
        return (

            <MDBContainer>
                <br/>
                <br/>
                <br/>
                <br/>
                <SectionContainer >

                <MDBCardGroup deck className='mt-3'>
                    <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/Photos/Others/images/16.jpg'
                            alt='MDBCard image cap'
                            top
                            hover
                            overlay='white-slight'
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color='light-blue' size='md'>
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/Photos/Others/images/14.jpg'
                            alt='MDBCard image cap'
                            top
                            hover
                            overlay='white-slight'
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color='light-blue' size='md'>
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/Photos/Others/images/15.jpg'
                            alt='MDBCard image cap'
                            top
                            hover
                            overlay='white-slight'
                        />
                        <MDBCardBody>
                            <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color='light-blue' size='md'>
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCardGroup>
                </SectionContainer>
            </MDBContainer>


        );
    }
}
