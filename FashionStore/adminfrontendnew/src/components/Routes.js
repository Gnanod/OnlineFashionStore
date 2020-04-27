import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';

import NotFoundPage from './pages/NotFoundPage';
import {Item} from "./views/Item/Item";
import BrandCategory from "./views/Item/BrandCategory";
import ItemColor from "./views/Item/ItemColor";
import {NewArrivals} from "./views/Item/NewArrivals";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/404' component={NotFoundPage} />
        <Route path='/item' component={Item} />
        <Route path='/brandcategory' component={BrandCategory} />
        <Route path='/itemcolor' component={ItemColor} />
        <Route path='/newarraivalitems' component={NewArrivals} />
      </Switch>
    );
  }
}

export default Routes;
