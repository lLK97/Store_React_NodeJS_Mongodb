import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from '../Router';
import '../../assets/css/component/page/page.scss';

const Layout = () => {
    return (
        <BrowserRouter >
            <div className="content-wrapper">
                {/* <Header /> */}
                <div className="content-main">
                    <Routers />
                </div>

            </div>
            {/* <Foot /> */}
        </BrowserRouter>)
}

export default Layout;