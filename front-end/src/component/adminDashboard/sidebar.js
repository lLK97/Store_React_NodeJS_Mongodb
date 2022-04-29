import React from 'react';
import '../../assets/css/adminDashboard/sidebar/sidebar.scss';
import menu_sidebar from '../../assets/JsonData/sidebar/sidebar.json';
import { Link } from 'react-router-dom';
const Sidebar = props => {

    return (
        <div ref={props.content} className="sidebar-dashboard ">
            <div className="logo col-12">
                <img src="https://www.pngkit.com/png/full/340-3409127_dreams-come-true-dreams-come-true-png.png" alt="" />
            </div>
            <div className="item-sidebar">
                {
                    menu_sidebar.map((item, index) => (
                        <Link to={item.route} key={index}>
                            <div className="item">
                                <i className={item.icon} aria-hidden="true"></i>
                                {
                                    item.display_name
                                }
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Sidebar;
