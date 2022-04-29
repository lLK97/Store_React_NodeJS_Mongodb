import React, { useEffect, useRef } from 'react';
import DropMenu from './Dropdown/drop_menu';
import { Dropdown, Navbar } from 'react-bootstrap';
import { MDBCol, MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dataMenu_head } from '../../../redux/actions/actions';
import { HIDE_NAVBAR, SHOW_NAVBAR } from '../../../assets/js/util/util';



const Menu = () => {
    const menu_route = useSelector(state => state.menuReducer.menuData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dataMenu_head());
    }, [])
    return (

        <Navbar>
            <div className="logo">
                <img src="https://icolor.vn/wp-content/uploads/2021/04/Untitled-4-04.png" alt="" />
            </div>
            {/* menu */}
            {
                menu_route != undefined ? (menu_route.map((item, index) => (
                    <Dropdown key={index}>
                        <Link to={item.route} className="item-menu">
                            {item.display_name}
                        </Link>
                        {
                            item.dropdown ? (<DropMenu
                                renderData={item.dropdown}
                            />) : null
                        }
                    </Dropdown>)
                )) : null
            }
            {/* search box */}
            <MDBCol md="2" className="search-gr">
                <form className="form-inline mt-4 mb-4 row">

                    <input className="form-control form-control-sm w-75" type="text" placeholder="Search" aria-label="Search" />
                    <MDBIcon icon="search" className="col-1" />
                </form>
            </MDBCol>
            {/* // group icon */}
            <div className="icon">
                <i className="fa fa-user" aria-hidden="true"></i>
                <i className="fa fa-heart" aria-hidden="true"></i>
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <i className="fas fa-bars fa-2x bars" onClick={SHOW_NAVBAR('bars', '.navbar-mobile', 'active_navbar')}> </i>
            <div className="navbar-mobile active_navbar" >

                {
                    menu_route != undefined ? (menu_route.map((item, index) => (
                        <div key={index}>
                            <Link to={item.route} className="item-menu">
                                {item.display_name}
                            </Link>
                            {
                                item.dropdown ? (<DropMenu
                                    renderData={item.dropdown}
                                />) : null
                            }
                        </div>)
                    )) : null
                }
                <div className="close" onClick={HIDE_NAVBAR('close', 'innner-close', '.navbar-mobile', 'active_navbar')}>
                    <i class="fa fa-close innner-close" aria-hidden="true"></i>
                </div>
            </div>
        </Navbar >
    );
}

export default Menu;
