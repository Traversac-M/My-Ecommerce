import React from "react";

// Rooting
import { Route, Switch } from "react-router-dom";

// Components

// Navbar
import Homepage from "./components/Homepage/Homepage";
import Profile from "./components/Profile/Profile";

// Admin
import AdminCategoriesEdit from "./components/Admin/AdminCategories/AdminCategoriesEdit/AdminCategoriesEdit";
import AdminCategoriesAdd from "./components/Admin/AdminCategories/AdminCategoriesAdd/AdminCategoriesAdd";
import AdminCategories from "./components/Admin/AdminCategories/AdminCategories";

import AdminProductsEdit from "./components/Admin/AdminProducts/AdminProductsEdit/AdminProductsEdit";
import AdminProductsAdd from "./components/Admin/AdminProducts/AdminProductsAdd/AdminProductsAdd";
import AdminProducts from "./components/Admin/AdminProducts/AdminProducts";

import AdminUsersEdit from "./components/Admin/AdminUsers/AdminUsersEdit/AdminUsersEdit";
import AdminUsersAdd from "./components/Admin/AdminUsers/AdminUsersAdd/AdminUsersAdd";
import AdminUsers from "./components/Admin/AdminUsers/AdminUsers";

import Admin from "./components/Admin/Admin";

// Login/Register
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ForgotPass from "./components/ForgotPass/ForgotPass";
import ConfirmUser from "./components/ConfirmUser/ConfirmUser";

// Products
import Category from "./components/Category/Category"
import ProductPage from "./components/ProductPage/ProductPage";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

// UserInfos
import Infos from "./components/Profile/UserInfo/UserInfo";
import Address from "./components/Profile/UserAddress/UserAddress";
import Billing from "./components/Profile/Billing/Billing";


// Footer
import Faq from "./components/Faq/Faq";
import AboutUs from "./components/AboutUs/AboutUs";
import Cgu from "./components/Cgu/Cgu";
import Privacy from "./components/Privacy/Privacy";
import Contact from "./components/Contact/Contact";

import * as serviceWorker from "./serviceWorker";

    const Router = () => (
      <Switch>
     	<Route path="/admin/category/edit/:id" component={AdminCategoriesEdit} />
     	<Route path="/admin/category/add" component={AdminCategoriesAdd} />
     	<Route path="/admin/categories" component={AdminCategories} />

     	<Route path="/admin/product/edit/:id" component={AdminProductsEdit} />
     	<Route path="/admin/product/add" component={AdminProductsAdd} />
     	<Route path="/admin/products" component={AdminProducts} />

     	<Route path="/admin/user/edit/:id" component={AdminUsersEdit} />
     	<Route path="/admin/user/add" component={AdminUsersAdd} />
     	<Route path="/admin/users" component={AdminUsers} />

     	<Route path="/admin" component={Admin} />      	

        <Route exact path="/category/sales" component={Category}/>
        <Route exact path="/category/new" component={Category}/>
        <Route exact path="/category" component={Category}/>
        <Route exact path="/cart" component={Cart} />
        <Route path="/product/:id" component={ProductPage} />
        <Route exact path="/products" component={Products} />

        <Route exact  path="/password-recovery" component={ForgotPass} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/confirm-user/:id" component={ConfirmUser} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/edit-user/id" component={Infos} />
        <Route exact path="/edit-address/id" component={Address} />
        <Route exact path="/billing" component={Billing} />
        <Route exact path="/profile" component={Profile} />

        <Route exact path="/faq" component={Faq} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/cgu" component={Cgu} />
        <Route exact  path="/privacy" component={Privacy} />
        <Route exact path="/contact" component={Contact} />

        <Route path="/" component={Homepage} />
      </Switch>
    )

export default Router

serviceWorker.unregister();
