import React from 'react';
import logo from "../assets/Fashion_Log2.jpg";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {

    // console.log(this.props.match.params)

    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-2"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/item" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-2"/>
                        Item Management
                    </MDBListGroupItem>
                </NavLink>

                <NavLink to={'/usermanage'} activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-2"/>
                        User Management
                    </MDBListGroupItem>
                </NavLink>

                <NavLink to="/supplier" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-2"/>
                        Supplier Management
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/stock" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-2"/>
                        Stock Management
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/logout" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon=" " className="mr-2"/>
                        LogOut
                    </MDBListGroupItem>
                </NavLink>

                {/*<NavLink to="/profile" activeClassName="activeClass">*/}
                    {/*<MDBListGroupItem>*/}
                        {/*<MDBIcon icon="user" className="mr-3"/>*/}
                        {/*Profile*/}
                    {/*</MDBListGroupItem>*/}
                {/*</NavLink>*/}
                {/*<NavLink to="/tables" activeClassName="activeClass">*/}
                    {/*<MDBListGroupItem>*/}
                        {/*<MDBIcon icon="table" className="mr-3"/>*/}
                        {/*Tables*/}
                    {/*</MDBListGroupItem>*/}
                {/*</NavLink>*/}
                {/*<NavLink to="/maps" activeClassName="activeClass">*/}
                    {/*<MDBListGroupItem>*/}
                        {/*<MDBIcon icon="map" className="mr-3"/>*/}
                        {/*Maps*/}
                    {/*</MDBListGroupItem>*/}
                {/*</NavLink>*/}
                {/*<NavLink to="/404" activeClassName="activeClass">*/}
                    {/*<MDBListGroupItem>*/}
                        {/*<MDBIcon icon="exclamation" className="mr-3"/>*/}
                        {/*404*/}
                    {/*</MDBListGroupItem>*/}
                {/*</NavLink>*/}
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;
