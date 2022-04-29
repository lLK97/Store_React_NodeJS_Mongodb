import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { data_products } from '../redux/actions/actions';
import Post from '../post/post_detail_product';
import Header from '../component/head/head';
import Foot from '../component/foot/foot';

const Productdetail = () => {
    const dispatch = useDispatch();
    const dataInput = useSelector(state => state.dataReducer.productData);
    console.log(dataInput);
    const product_detail = dataInput != undefined ? dataInput : [];
    const slug = window.location.pathname.split('/')[2] != undefined ? window.location.pathname.split('/')[2] : window.location.pathname.substring(1);
    const get_detail_product = product_detail.filter(function (el) { return el.slug == slug });
    // const get_detail_product_default = dataInput.filter(function (el) { return el.slug == slug });
    useEffect(() => {
        dispatch(data_products())
    }, [])
    return (
        <div className="product-main">
            <Header />
            <Post
                data={get_detail_product[0] != undefined ? get_detail_product[0].bread_crumb : []}
                title={get_detail_product[0] != undefined ? get_detail_product[0].display_name : []}
                id={get_detail_product[0] != undefined ? get_detail_product[0].id : []}
                price={get_detail_product[0] != undefined ? get_detail_product[0].price : []}
                option_title={get_detail_product[0] != undefined ? get_detail_product[0].option_title : []}
                list_color_pro={get_detail_product[0] != undefined ? get_detail_product[0].list_color_pro : []}
                option_size={get_detail_product[0] != undefined ? get_detail_product[0].option_size : []}
                list_size_pro={get_detail_product[0] != undefined ? get_detail_product[0].list_size_pro : []}
                description={get_detail_product[0] != undefined ? get_detail_product[0].description : []}
                content_product_detail={get_detail_product[0] != undefined ? get_detail_product[0].content_detail : []}
                image_slide={get_detail_product[0] != undefined ? get_detail_product[0].image_slide : []}
                top_product={product_detail}
            />
            <Foot />
        </div>
    )
}

export default Productdetail;
