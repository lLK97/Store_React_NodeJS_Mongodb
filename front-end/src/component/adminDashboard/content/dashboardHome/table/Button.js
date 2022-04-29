import React from 'react';

const Button = props => {
    return (
        <div className="btn btn-primary col-12 col-lg-2 p-3 btn-dashboard">
            {
                props.display_name
            }
        </div>
    );
}

export default Button;
