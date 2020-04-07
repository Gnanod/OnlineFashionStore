import React,{Component} from "react";
import './Style/Item.css'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCol,
    MDBInput,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from "mdbreact";

import { SwatchesPicker} from 'react-color';
export default  class ItemColor extends Component{

    state = {
        background: '#fff',
    };

   ;

    handleChange(color, event) {
        // color = {
        //   hex: '#333',
        //   rgb: {
        //     r: 51,
        //     g: 51,
        //     b: 51,
        //     a: 1,
        //   },
        //   hsl: {
        //     h: 0,
        //     s: 0,
        //     l: .20,
        //     a: 1,
        //   },
        // }

        console.log(color.hex)
    }
    render(){

        return(

            <div className=" container-fluid itemColorMain">
                <br/>
                <br/>
                <MDBRow>
                    <MDBCol size="8">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Add New Item</MDBCardTitle>
                                <form>
                                    <MDBInput label="Item Code" size="sm"/>
                                    <MDBInput label="Item Size" size="sm"/>
                                    <SwatchesPicker onChange={ this.handleChange } />

                                    <MDBBtn href="#">Save</MDBBtn>

                                    <br/>
                                    <br/>
                                    <MDBTable>
                                        <MDBTableHead color="primary-color" textWhite>
                                            <tr>
                                                <th>Item Id</th>
                                                <th>Color Id</th>
                                                <th>Size</th>

                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td>Mark</td>

                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Jacob</td>
                                                <td>Jacob</td>

                                            </tr>

                                        </MDBTableBody>
                                    </MDBTable>
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
