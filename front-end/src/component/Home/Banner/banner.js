import React from 'react';
import dataBanner from '../../../assets/JsonData/home/banners.json';

const Banner = () => {
    return (
        <div className="section_banner">
            <h4>SHOP BOOK</h4>
            {
                dataBanner.map((item, index) => (
                    <div className="row img_banner" key={index}>
                        <img src={item.url_brand} alt="" className="col-12 m-auto img" />
                    </div>

                ))
            }
        </div>
    );
}

export default Banner;
