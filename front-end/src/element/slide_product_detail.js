import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../assets/css/element/slide_product_detail.scss';
const SlideProductDetail = props => {
    // const imageDefault = props.image_slide[0].image_slide;
    const [nav1, setNav1] = useState('');
    const [nav2, setNav2] = useState('');

    console.log(nav1)
    return (
        <div className="Product_Slide_Detail row">
            <div className="thumb-image-slide col-2">
                <Slider asNavFor={nav1}
                    ref={item => setNav2(item)}
                    slidesToShow={5}
                    slideToSlide={true}
                    focusOnSelect={true}
                    dots={false}
                    arrows={true}

                >
                    {
                        props.image_slide != undefined ? (props.image_slide.map((item, index) => (
                            <div key={index} className="box-slide">
                                <div className="item-slide" style={{ backgroundImage: `url(${item.image})` }} alt="" ></div>
                            </div>
                        ))) : []

                    }
                </Slider>
            </div>
            <div className="large-image col-10">
                <Slider asNavFor={nav2}

                    cssEase={'linear'}
                    ref={item => setNav1(item)}>
                    {
                        props.image_slide != undefined ? (props.image_slide.map((item, index) => (
                            <div key={index} className="box-slide">
                                <div className="item-slide" style={{ backgroundImage: `url(${item.image})` }} alt="" ></div>
                            </div>
                        ))) : []

                    }
                </Slider>
            </div>
        </div >
    );
}

export default SlideProductDetail;
