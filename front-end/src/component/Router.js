import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Fantasy from '../pages/Fantasy';
import Economy from '../pages/Economy'
import Literary from '../pages/Literary';
import ProductDetail from '../pages/ProductDetail';
import DashboardHome from './adminDashboard/content/dashboardHome/dashboardHome';
import Products from './adminDashboard/content/products'
import Users from './adminDashboard/content/users';
import ProductList from '../pages/products/products'
import PostInfor from '../post/post_infor';
import Login from '../pages/login';
import Signin from '../pages/signIn';

const Routers = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/product' element={<ProductList />} />
            <Route exact path='/product/:slug' element={<ProductDetail />} />
            {/* admin dashboard */}
            <Route exact path='/ad' element={<DashboardHome />} />
            <Route path='/ad/dashboard' element={<DashboardHome />} />
            <Route path='/ad/products' element={<Products />} />
            <Route path='/ad/user' element={<Users />} />

            <Route exact path='/fan' element={<Fantasy />} />
            <Route path='/fan/epic' element={<Fantasy />} />
            <Route path='/fan/hero' element={<Fantasy />} />
            <Route path='/fan/history' element={<Fantasy />} />
            <Route path='/fan/:slug' element={<ProductDetail />} />

            <Route exact path='/eco' element={<Economy />} />
            <Route path='/eco/finance' element={<Economy />} />
            <Route path='/eco/startup' element={<Economy />} />
            <Route path='/eco/story' element={<Economy />} />

            <Route path='/login' element={<Login />} />
            <Route path='/signin' element={<Signin />} />

            <Route path='/eco/:slug' element={<ProductDetail />} />

            <Route exact path='/lite' element={<Literary />} />
            <Route path='/lite/novel' element={<Literary />} />
            <Route path='/lite/epic' element={<Literary />} />
            <Route path='/lite/romantic' element={<Literary />} />
            <Route path='/lite/:slug' element={<ProductDetail />} />

            <Route path='/post/:slug' element={<PostInfor />} />
            <Route path='/:slug' element={<ProductDetail />} />

        </Routes>

    );
}

export default Routers;