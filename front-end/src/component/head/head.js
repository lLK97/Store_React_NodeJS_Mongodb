import React from 'react'
import Menu from './Menu/menu';
import Top from './Top/top';
import '../../assets/css/component/head/head.scss';


const Header = () => {
    return (
        <div className="wrapper">

            <Top />
            <Menu />

        </div>
    )
}
export default Header;
