import React from 'react';
import '../../assets/css/adminDashboard/headInner/headInner.scss';


const Headinner = proos => {
    return (
        <div ref={proos.toggle} className="head-inner col-12 col-lg-12 row">
            <i className="fa fa-bars fa-2x col-1 nav-sidebar" aria-hidden="true"></i>
            <div className="search-box col-9">
                <div className="searchbar ">
                    <input className="search_input" type="text" name="" placeholder="Search..." />
                    <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                </div>
            </div>
            <div className="notifi col-1">
                <div className="badge"></div>
                <i className="fa fa-bell fa-2x" aria-hidden="true"></i>
            </div>
            <div className="user col-1">
                <img src="https://freenice.net/wp-content/uploads/2021/11/hinh-anh-avatar-dep-cho-con-gai-1.jpg" alt="" />
            </div>
        </div>
    );
}

export default Headinner;
