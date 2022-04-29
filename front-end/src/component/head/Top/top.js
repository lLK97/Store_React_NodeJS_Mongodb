import React from 'react';
import menu_brand from '../../../assets/JsonData/header/menu_brands.json';

const Top = () => {
    return (
        <div className="navbar-infor">
            {
                menu_brand.map((item, index) => (
                    <div className="navbar-item" key={index}>
                        <a className="link" src="#">
                            <i className={item.icon}></i>
                            <span>{item.display_name}</span></a>
                    </div>
                ))
            }

        </div>
    );
}

export default Top;
