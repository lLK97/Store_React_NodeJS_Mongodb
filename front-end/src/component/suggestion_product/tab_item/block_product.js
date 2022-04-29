import React, { useState } from 'react';
import { Link, Navigate, NavLink, Route } from 'react-router-dom';
import '../../../assets/css/component/suggestProduct/suggestProduct.scss';
import Slider from 'react-slick';


const BlockProduct = props => {
    // const dataProduct = props.data != undefined ? props.data : [];
    const max_show_product = 12;
    const show_product = props.data != undefined ? (props.data.slice(0, Number(max_show_product))) : [];
    const [activeOption, setactiveOption] = useState(1);
    const setImage = (active_id, id_product) => {
        let image;
        const Obj = [...show_product.map((item) => (item.list_color_pro).find(item => item.id == active_id))]

        for (let i = 0; i <= show_product.length; i++) {
            if (Obj[i]) {
                image = Obj[i].url_image;
                const obj_image = document.getElementsByClassName('avatar-bg-' + id_product);
                obj_image[0].style.backgroundImage = 'url(' + image + ')';
            }
        }
    }

    const setOption = (active, id) => {
        setactiveOption(active.id)
        setImage(active.id, id)

    }
    ///setting slide
    const properties = {
        slidesToShow: 6,
        slidesToScroll: 1,
        rows: 1,
        slidesPerRow: 1,
        infinite: false,
        arrows: false,
        indicators: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 1,
                    slidesPerRow: 1
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    slidesPerRow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    slidesPerRow: 1,
                },
            }
        ]
    }

    return (
        <div>
            <div className="row product" id="cards-product">
                <Slider {...properties}>
                    {
                        show_product.map((item, index) => (
                            <div className="col-8 col-sm-6 col-md-3 col-lg-2 product-inner-item" key={index}>
                                {/* item => props.active(item.list_color_pro[0]) */}
                                <a href={item.slug} replace key={index} className='link-block'>
                                    <div className="avatar">
                                        <div className="thumbnail">
                                            {
                                                item.thumbnail
                                            }
                                        </div>
                                        <div className={`avatar-bg avatar-bg-${item.id}`} style={{ backgroundImage: `url("${item.list_color_pro[0].url_image}")` }} src=""></div>
                                    </div>
                                    <h5 className="display_name"> {item.display_name}</h5>
                                    <h6 className="price"> {item.price}</h6>

                                    <div className="option row">
                                        {
                                            item.id && item.list_color_pro.map((it, index) => (
                                                <div className={`option_item ${it.id == activeOption ? 'option_item_active' : ''}`} style={{ backgroundImage: `url(${it.url_image})` }} onClick={() => setOption(it, item.id)} key={index}>
                                                </div>
                                            ))
                                        }
                                        <div className=""></div>
                                    </div>
                                </a>
                            </div >

                        ))

                    }
                </Slider>
            </div>
            <div className="bt col-2 col-sm-2 ">
                <Link to='/product'>Xem thêm</Link>
            </div>

        </div >
    );
}

export default BlockProduct;