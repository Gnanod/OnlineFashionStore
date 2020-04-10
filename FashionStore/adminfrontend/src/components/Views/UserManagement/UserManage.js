import React, {Component} from "react";
import './Style/Item.css'
import {MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBInput, MDBRow} from "mdbreact";

export default class NewItem extends Component {

    render() {

        return (

            <div className=" container-fluid AddItemHeight">

                <br/>
                <br/>
                <MDBRow>
                    <MDBCol size="6">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Add New Item</MDBCardTitle>
                                <form>
                                    <MDBInput label="Item Code" size="sm"/>
                                    <MDBInput label="Item Name" size="sm"/>
                                    <MDBInput label="Brand Name" size="sm"/>
                                    <MDBInput label="Category Name" size="sm"/>
                                    <MDBInput label="Description" size="sm"/>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01">
                                                Upload
                                        </span>
                                        </div>
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="inputGroupFile01"
                                                aria-describedby="inputGroupFileAddon01"
                                            />
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                Choose file
                                            </label>
                                        </div>
                                    </div>
                                    <MDBBtn href="#">Save</MDBBtn>
                                </form>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                    <MDBCol size="4">


                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}
