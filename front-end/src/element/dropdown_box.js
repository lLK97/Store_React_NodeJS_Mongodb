import React from 'react';
import Dropdownbox from './dropdownBox/dropdownBox';

const DropdownBox = props => {

    return (
        <div className='dropdown-box'>
            {
                props.data_dropbox.map((item, index) => (
                    <Dropdownbox
                        index={index}
                        attrib={item.attrib}
                        para={item.para}
                        min_range={item.min_range}
                        max_range={item.max_range} />
                ))
            }
        </div>
    );
}

export default DropdownBox;
