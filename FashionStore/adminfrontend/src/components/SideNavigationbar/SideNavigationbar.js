import React, {Component} from 'react';
import {Dropdown, Icon, Nav, Sidenav} from 'rsuite';

import './SideNavigationbar.css'
import {Link} from "react-router-dom";


export default class SideNavigationbar extends Component {


    render() {
        return (

            <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
                <Sidenav.Body className="navBarHeight">
                    <Nav>
                        <Nav.Item eventKey="1" icon={<Icon icon="dashboard"/>}>
                            <Link to='/'> Dashboard </Link>
                        </Nav.Item>
                        <Dropdown eventKey="2" title="User Management" icon={<Icon icon="group"/>}>

                            <Dropdown.Item eventKey="2-4">
                                <Link to='/item/brandcategory'> Brand & Category </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2-3">Loyalty</Dropdown.Item>
                            <Dropdown.Item eventKey="2-4">Visit Depth</Dropdown.Item>
                        </Dropdown>
                        <Dropdown  title="Item Management" icon={<Icon icon="gear-circle"/>}>

                            <Dropdown.Item >
                                <Link to='/item/brandcategory'> Brand & Category </Link>
                            </Dropdown.Item>

                            <Dropdown.Item >
                            <Link to='/item/newitem'> New Item </Link>
                            </Dropdown.Item>
                            <Dropdown.Item >
                            <Link to='/item/itemcolor'> Item Color </Link>

                            </Dropdown.Item>

                            <Dropdown.Item >
                            <Link to='/item/SearchItem'> Search Item </Link>
                            </Dropdown.Item>
                        </Dropdown>

                        <Dropdown title="Stock Management" icon={<Icon icon="gear-circle"/>}>

                            <Dropdown.Item eventKey="2-4">
                                <Link to='/stock/suppliers'> Suppliers </Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2-3">
                                <Link to='/stock/stock'> Stock </Link></Dropdown.Item>

                        </Dropdown>

                        {/*<Dropdown eventKey="4" title="Item Management" icon={<Icon icon="gear-circle"/>}>*/}
                            {/*<Dropdown.Item eventKey="4-2">*/}
                                {/*<Link to='/item/brandcategory'> Brand & Category </Link>*/}
                            {/*</Dropdown.Item>*/}

                        {/*</Dropdown>*/}

                        {/*<Dropdown eventKey="3" title="Item Management" icon={<Icon icon="gear-circle"/>}>*/}
                            {/*<Dropdown.Item eventKey="3-1">*/}
                                {/*<Link to='/item/brandcategory'> Brand & Category </Link>*/}

                            {/*</Dropdown.Item>*/}
                            {/*<Dropdown.Item eventKey="3-2">*/}
                                {/*<Link to='/item/newitem'> New Item </Link>*/}
                            {/*</Dropdown.Item>*/}
                            {/*<Dropdown.Item eventKey="3-3">*/}
                                {/*<Link to='/item/itemcolor'> Item Color </Link>*/}

                            {/*</Dropdown.Item>*/}

                            {/*<Dropdown.Item eventKey="3-5">*/}
                                {/*<Link to='/item/SearchItem'> Search Item </Link>*/}
                            {/*</Dropdown.Item>*/}

                            {/*<Dropdown.Menu eventKey="3-6" title="Custom Action">*/}
                                {/*<Dropdown.Item eventKey="3-6-1">Action Name</Dropdown.Item>*/}
                                {/*<Dropdown.Item eventKey="3-6-2">Action Params</Dropdown.Item>*/}
                            {/*</Dropdown.Menu>*/}
                        {/*</Dropdown>*/}
                        <Nav.Item eventKey="4" icon={<Icon icon="dashboard"/>}>
                            <Link to='/logout'> LogOut </Link>
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>


        );

    }
}

