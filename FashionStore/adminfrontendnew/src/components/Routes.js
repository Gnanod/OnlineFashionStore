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
import SupplierDetails from "./views/Stock/SupplierDetails";
import StockDetails from "./views/Stock/StockDetails";

import Logout from "./views/LogOut/Logout";
import AdminManage from "./views/UserManagement/AdminAdd";
import OrderTable from "./views/Order/OrderTable";

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
        <Route exact path='/usermanage' component={UserDetails} />
        <Route exact path='/usermanage/useranalysis' component={UserAnalysis} />
        <Route exact path='/supplier' component={SupplierDetails} />
        <Route exact path='/stock' component={StockDetails} />
        <Route exact path='/order' component={OrderTable} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/usermanage/adminManage' component={AdminManage} />

      </Switch>
    );
  }
}

export default Routes;
