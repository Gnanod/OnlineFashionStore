import React, { Component } from 'react';
import {
    MDBAlert,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCol, MDBIcon,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from "mdbreact";
import {NavLink} from "react-router-dom";
import TextField from "@material-ui/core/TextField/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import uuid from "react-uuid";
import axios from "axios";
import constants from "../../../constants/constants";

export  class Discount extends Component{

    constructor(props){
        super(props);

        this.state={
            itemCodes :[],
            newArraivalId :'',
            itemCodeObject :''
        }
        this.getAllItems = this.getAllItems.bind(this);
        this.onChangeGetItemCode = this.onChangeGetItemCode.bind(this);
    }

    getAllItems() {
        axios.get(constants.backend_url + 'api/itemcolor/getAllNewArraivalItems').then(response => {
            console.log(response.data)
            this.setState({
                newArraivalItems: response.data,
                newArrailvaItemStatus :false
            });
        }).catch(function (error) {
            console.log(error);
        })
    }

    onChangeGetItemCode(value) {
        if(value !==null){
            this.state.itemCodeObject = value;
            const newArraivalItem = {
                itemCode: value.itemCode,
                itemName: value.itemName,
                newArraivalId: uuid(),
            }

            // const newItemCodeObj = {
            //     itemCode: value,
            //
            // }
            // const array = [newArraivalItem, ...this.state.newArraivalItemArray];
            // const array2 = [newItemCodeObj, ...this.state.newItemCodeArray];
            //
            // this.setState({
            //     itemCodeObject: this.state.itemCodeObject,
            //     itemCodeObjectValidation: false,
            //     newArraivalItemArray: array,
            //     newItemCodeArray: array2,
            //     noItem :false,
            //     newArraivalId: uuid(),
            // });
        }

    }

    render() {
        return (
            <div>
                <MDBCard className="mb-5">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        <NavLink exact={true} to="/item/discount" >
                            <button type="button" className="btn btn-primary ">Discount</button>

                        </NavLink>
                        <NavLink exact={true} to="/item" activeClassName="activeClass">
                            <button type="button" className="btn btn-success">New Item</button>
                        </NavLink>
                        {
                            localStorage.getItem("Position") ==="Admin" ?
                                <NavLink exact={true} to="/item/brandcategory" >
                                    <button type="button" className="btn btn-success"> Brand & Category</button>
                                </NavLink>
                                :
                                ''
                        }

                        <NavLink exact={true} to="/item/itemcolor" >
                            <button type="button" className="btn btn-success"> ItemColor</button>
                        </NavLink>

                        <NavLink exact={true} to="/item/newarraivalitems" >
                            <button type="button" className="btn btn-success"> New Arrivals</button>

                        </NavLink>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </MDBCardBody>
                </MDBCard>

                <MDBRow>
                    <MDBCol size="8">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Update Discount</MDBCardTitle>

                                <MDBCol size="5">
                                    <Autocomplete
                                        id="combo-box-demo"
                                        options={this.state.itemCodes}
                                        getOptionLabel={(option) => option.itemCode}
                                        style={{width: 300}}
                                        onChange={(event, value) => this.onChangeGetItemCode(value)}
                                        renderInput={(params) => <TextField {...params} label="Item Code"/>}
                                    />
                                    {
                                        this.state.itemCodeObjectValidation ?
                                            <MDBAlert color="danger">
                                                Item Code Field Is Empty
                                            </MDBAlert> : ''
                                    }
                                </MDBCol>
                                <br/>


                                <br/>
                                <br/>
                                {/*<MDBRow>*/}
                                    {/*<MDBCol size="6">*/}
                                        {/*<MDBTable>*/}
                                            {/*<MDBTableHead color="primary-color" textWhite>*/}
                                                {/*<tr>*/}
                                                    {/*<th>Item Code</th>*/}
                                                    {/*<th>Item Name</th>*/}

                                                {/*</tr>*/}
                                            {/*</MDBTableHead>*/}
                                            {/*<MDBTableBody>*/}
                                                {/*{*/}
                                                    {/*this.state.noItem ?*/}
                                                        {/*<tr >*/}
                                                            {/*<td colSpan="2">*/}
                                                                {/*<MDBAlert color="danger" >*/}
                                                                    {/*No Items In List*/}
                                                                {/*</MDBAlert>*/}
                                                            {/*</td>*/}
                                                        {/*</tr>*/}
                                                        {/*:*/}

                                                        {/*this.state.newArraivalItemArray.map(newItem => {*/}
                                                            {/*return (*/}
                                                                {/*<tr key={newItem.newArraivalId}>*/}
                                                                    {/*<td>{newItem.itemCode}</td>*/}
                                                                    {/*<td>{newItem.itemName}</td>*/}
                                                                    {/*<MDBBtn tag="a" size="sm" color="danger"*/}
                                                                            {/*onClick={()=>this.deletenewArrailavls(newItem.newArraivalId)}>*/}
                                                                        {/*<MDBIcon size="lg" icon="times-circle"/>*/}
                                                                    {/*</MDBBtn>*/}

                                                                {/*</tr>*/}
                                                            {/*)*/}
                                                        {/*})*/}
                                                {/*}*/}


                                            {/*</MDBTableBody>*/}
                                        {/*</MDBTable>*/}
                                    {/*</MDBCol>*/}


                                {/*</MDBRow>*/}
                                <MDBRow>
                                    <form onSubmit={this.saveDetails}>
                                        <MDBCol size="4">
                                            <MDBBtn type="submit">Save</MDBBtn>
                                        </MDBCol>
                                    </form>

                                </MDBRow>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>


                </MDBRow>

            </div>
        );
    }
}
