import React, {Component} from "react";
import './Style/Item.css'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBInput,
    MDBRow, MDBTable,
    MDBTableBody, MDBTableHead
} from "mdbreact";
import {AutoComplete} from "rsuite";

export default class BrandCategory extends Component {

    render() {

        return (

            <div className=" container-fluid BrandCategoryMain">

                <br/>
                <br/>
                <MDBRow>
                    <MDBCol size="6">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Add New Brand</MDBCardTitle>
                                <form>
                                    <MDBInput label="Brand Name" size="sm"/>
                                    <MDBInput label="Brand Code" size="sm"/>
                                    <MDBInput label="Selling Discount" size="sm"/>
                                    <MDBBtn href="#">Save</MDBBtn>
                                </form>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                    <MDBCol size="6">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Add New Category</MDBCardTitle>
                                <form>
                                    <MDBInput label="Category Name" size="sm"/>
                                    <MDBInput label="Category Code" size="sm"/>
                                    <MDBBtn href="#">Save</MDBBtn>
                                </form>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

                <br/>
                <MDBRow>

                    <MDBCol>

                        <MDBCard size="6">
                            <MDBCardBody>
                                <MDBCardTitle>Add New Category</MDBCardTitle>
                                <form>
                                    <AutoComplete data={''} placeholder="BrandName"/>
                                    <br/>
                                    <AutoComplete data={''} placeholder="Category Name"/>
                                    <br/>
                                    <MDBBtn href="#">Add</MDBBtn>


                                <br/>
                                <br/>
                                <MDBTable>
                                    <MDBTableHead color="primary-color" textWhite>
                                        <tr>
                                            <th>Brand Name</th>
                                            <th>Category Name</th>

                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>

                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>

                                        </tr>

                                    </MDBTableBody>
                                </MDBTable>
                                <MDBBtn href="#">Save</MDBBtn>
                            </form>

                            </MDBCardBody>
                        </MDBCard>


                    </MDBCol>
                    <MDBCol size="6"/>
                </MDBRow>

            </div>
        );
    }
}
