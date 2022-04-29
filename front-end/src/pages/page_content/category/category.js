import React from 'react';
import { Slide } from 'react-slideshow-image';

const properties = {

    slidesToScroll: 1,
    duration: 3000,
    transitionDuration: 500,
    infinite: false,
    arrows: false,
    indicators: false,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,

            },
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        }
    ]
}

const Category = props => {
    return (<div className="section_category row">
        <h4>THỂ LOẠI</h4>
        <Slide {...properties}>
            {
                props.list_category.map((item, index) => (<div className="item_category col-12 col-sm-6 col-md-2 row " key={index}>
                    <div className="avatar col-5 m-auto">
                        <img src={item.url_image} alt="" /> </div>
                    <div className="display_name col-7 m-auto text-left">
                        {item.display_name}
                    </div>
                </div>))
            }
        </Slide>
    </div >);

}

export default Category;