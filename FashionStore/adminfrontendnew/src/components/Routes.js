import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';

import NotFoundPage from './pages/NotFoundPage';
import {Item} from "./views/Item/Item";
import BrandCategory from "./views/Item/BrandCategory";
import ItemColor from "./views/Item/ItemColor";
import {NewArrivals} from "./views/Item/NewArrivals";
import UserDetails from "./views/UserManagement/UserManage";
import UserAnalysis from "./views/UserManagement/UserAnalysis";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/404' component={NotFoundPage} />
        <Route exact path='/item' component={Item} />
        <Route exact path='/item/brandcategory' component={BrandCategory} />
        <Route exact path='/item/itemcolor' component={ItemColor} />
        <Route exact path='/item/newarraivalitems' component={NewArrivals} />
        <Route path='/item' component={Item} />
        <Route path='/brandcategory' component={BrandCategory} />
        <Route path='/itemcolor' component={ItemColor} />
        <Route path='/newarraivalitems' component={NewArrivals} />
        <Route path='/usermanage' component={UserDetails} />
        <Route path='/useranalysis' component={UserAnalysis} />

      </Switch>
    );
  }
}

export default Routes;
