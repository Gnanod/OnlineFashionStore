import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "./components/layout/Layout";





function App() {



    return (


        <Router>
            <Layout/>
        </Router>


    )

}

export default App;
