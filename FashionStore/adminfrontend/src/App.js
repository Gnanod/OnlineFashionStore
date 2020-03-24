import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import Layout from "./components/layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import SideNavigationbar from "./components/SideNavigationbar/SideNavigationbar";

function App() {
    return (
        <Router>

            <switch>
                <Route path="/app/:page" exact component={SideNavigationbar}>

                </Route>
            </switch>
        </Router>
    )
}

export default App;
