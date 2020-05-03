import React, { Component } from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {

  render() {
    return (
        <Router>
        <div className="flexible-content">

          <SideNavigation />

          <main id="content" className="p-5">
            <Routes />
          </main>

          <Footer />

        </div>
        </Router>
    );
  }
}

export default App;