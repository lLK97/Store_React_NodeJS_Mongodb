import React from 'react';
import { Link } from 'react-router-dom';


const DropMenu = (props) => {
    return (
        <div className="dropdown-menu">
            {
                props.renderData ? (
                    props.renderData.map((item, index) => (
                        <Link to={item.route} key={index}>
                            {item.display_name}
                        </Link>
                    ))
                ) : null

            }
        </div>

    );
}

export default DropMenu;
