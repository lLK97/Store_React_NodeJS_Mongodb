import React from 'react';
import { Link } from 'react-router-dom';
import BlockProduct from '../../../component/suggestion_product/tab_item/block_product';
import Slider from 'react-slick';

const Suggestion = props => {
    const properties = {
        infinite: false,
        arrows: false,
        indicators: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,

                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,

                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                },
            }
        ]
    }
    return (
        <div className="section_suggestion">
            <h4>ĐỀ XUẤT CHO BẠN</h4>
            <div className="row tag-suggestion">
                <div className="m-auto col-sm-6 row gr-tab">
                    <Slider {...properties}>
                        {
                            props.tab_product.map((item, index) => (
                                <Link className={`col-4 tab-item ${index === props.active_tab ? 'active_tab-item' : ''}`} to={item.route} key={index} >
                                    {
                                        item.display_name
                                    }
                                </Link>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <BlockProduct
                data={props.data_product}
            />

        </div>
    );
}

export default Suggestion;
