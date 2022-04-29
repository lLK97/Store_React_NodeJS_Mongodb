import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { data_products } from '../../../redux/actions/actions';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const Saleup = () => {
    const properties = {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        indicators: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: true,

                },
            },
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
    const dispatch = useDispatch();
    const dataInput = useSelector(state => state.dataReducer.productData);
    const product_saleup = dataInput != undefined ? dataInput : [];
    const max_show_product = 6;
    const product_show = product_saleup.slice(0, Number(max_show_product));

    useEffect(() => {
        dispatch(data_products());
    }, [])
    return (<div className="section_sale-up">
        <h4 className="title">SALE UP TO 50%</h4>
        <div className="row img_brand m-auto"> <img src="https://theme.hstatic.net/1000245066/1000433415/14/ms_banner_img1.jpg?v=1170" alt="" className="col-12 m-auto img" /> </div>
        <div className="row product">
            <Slider {...properties}>
                {
                    product_show.map((item, index) => (
                        <div className=" col-8 col-sm-2 product-inner-item" key={index}>
                            <Link to={item.slug} key={index}>
                                <div className="avatar">
                                    <div className="thumbnail">
                                        {
                                            item.thumbnail
                                        }
                                    </div>
                                    <div className="avatar-bg" style={{ backgroundImage: `url("${item.url_image_default}")` }} alt="" ></div>

                                </div>
                                <h5 className="display_name"> {item.display_name}</h5>
                                <h6 className="price"> {item.price}</h6>
                            </Link>
                        </div>))
                }
            </Slider>
        </div>
        <h5 className="show_more">
            <Link to='/product'> Xem tất cả {Object.keys(product_saleup).length} sản phẩm </Link></h5>
    </div >);
}

export default Saleup;