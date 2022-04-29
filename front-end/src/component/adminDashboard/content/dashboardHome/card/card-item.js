import React from 'react';

const CardItem = props => {
    return (
        <div className="card-item-inner col-12 col-sm-5 col-lg-3 p-1 ">
            <h5 className="title p-3 font-weight-bold">
                {
                    props.display_name
                }

            </h5>
            <div className="number col-12 m-0 p-3 row">
                <i className={`${props.icon} fa-2x col-3`} aria-hidden="true"></i>
                <h2 className="col-9 m-0">{props.number}</h2>
            </div>

        </div>
    );
}

export default CardItem;
