import React, {Component} from 'react';
import {
    MDBCollapse,
    MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon,
    MDBLink,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem
} from "mdbreact";

export default class Navigationbar extends Component {

    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    render() {
        const {isOpen, collapseID} = this.state;

        return (
            <MDBNavbar
                color='indigo' dark expand='md'
                style={{marginTop: '20px'}}
            >
                <MDBNavbarBrand>
                    <strong className='white-text'>GSTD Stores</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    onClick={this.toggleCollapse('navbarCollapse3')}
                />
                <MDBCollapse id='navbarCollapse3' isOpen={collapseID} navbar >
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBLink to='#!'>Home</MDBLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <div className='d-none d-md-inline'>Product</div>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className='dropdown-default' right>
                                    <MDBDropdownItem href='#!'>Action</MDBDropdownItem>
                                    <MDBDropdownItem href='#!'>
                                        Another Action
                                    </MDBDropdownItem>
                                    <MDBDropdownItem href='#!'>
                                        Something else here
                                    </MDBDropdownItem>
                                    <MDBDropdownItem href='#!'>
                                        Something else here
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBLink to='#!'>Promotions</MDBLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBLink className='waves-effect waves-light' to='#!'>
                                <i className="fas fa-cart-arrow-down"></i>
                            </MDBLink>
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <MDBIcon icon='user'/>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className='dropdown-default' right>
                                    <MDBDropdownItem href='#!'>Action</MDBDropdownItem>
                                    <MDBDropdownItem href='#!'>
                                        Another Action
                                    </MDBDropdownItem>
                                    <MDBDropdownItem href='#!'>
                                        Something else here
                                    </MDBDropdownItem>
                                    <MDBDropdownItem href='#!'>
                                        Something else here
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );

    }
}
