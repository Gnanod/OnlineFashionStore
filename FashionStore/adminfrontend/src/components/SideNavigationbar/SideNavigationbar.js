import React, {Component} from 'react';
import {Dropdown, Icon, Nav, Sidenav} from 'rsuite';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Dashboard from "../Views/Dashboard/Dashboard";
import './SideNavigationbar.css'

export default class SideNavigationbar extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log (this.props.match.params.page);
    }

    render() {

        return (
            <Router>
                <div style={{width: 250}} >
                    <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
                        <Sidenav.Body className="navBarHeight">
                            <Nav>
                                <Nav.Item eventKey="1" icon={<Icon icon="dashboard"/>}>
                                    <Link to="/dashboard">Dashboard</Link>
                                </Nav.Item>
                                <Dropdown eventKey="2" title="User Management" icon={<Icon icon="group"/>}>
                                    <Dropdown.Item eventKey="2-1">Geo</Dropdown.Item>
                                    <Dropdown.Item eventKey="2-2">Devices</Dropdown.Item>
                                    <Dropdown.Item eventKey="2-3">Loyalty</Dropdown.Item>
                                    <Dropdown.Item eventKey="2-4">Visit Depth</Dropdown.Item>
                                </Dropdown>
                                <Dropdown eventKey="3" title="Item Management" icon={<Icon icon="gear-circle"/>}>
                                    <Dropdown.Item eventKey="3-1">Applications</Dropdown.Item>
                                    <Dropdown.Item eventKey="3-2">Channels</Dropdown.Item>
                                    <Dropdown.Item eventKey="3-3">Versions</Dropdown.Item>
                                    <Dropdown.Menu eventKey="3-5" title="Custom Action">
                                        <Dropdown.Item eventKey="3-5-1">Action Name</Dropdown.Item>
                                        <Dropdown.Item eventKey="3-5-2">Action Params</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">



                        </div>

                    </main>
                </div>



                <switch>
                    <Route path="/app/:page" exact component={Dashboard}/>
                </switch>

            </Router>
        );

    }
}

