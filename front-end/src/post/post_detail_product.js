import React, { useEffect, useState } from 'react';
import service from '../assets/JsonData/home/service_homes.json';
import { Link } from 'react-router-dom';
import ContentProductDetail from './content_product_detail';
import SlideProductDetail from '../element/slide_product_detail';
import ButtonCount from '../element/buttonCount';
import '../assets/css/component/post/post.scss';
import BlockProduct from '../component/suggestion_product/tab_item/block_product';

import '../assets/css/element/slide_product_detail.scss';

const Post = props => {
    const [optionColor, setoptionColor] = useState(...props.list_color_pro.map((item) => item.image_slide));
    const optionColorDefault = props.list_color_pro.map((item) => item.image_slide);
    // console.log(optionColorDefault)
    const setColor = color => {
        setoptionColor(color.image_slide);
    }
    const active_slide = () => {
        document.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('avatar-bg')) {
                let local_path = e.target.closest('a').getAttribute('href');
                let local_slug = local_path.split('/')[2] != undefined ? local_path.split('/')[2] : local_path.substring(1);
                setoptionColor(props.top_product.find(item => item.slug == local_slug).list_color_pro[0].image_slide)
            }
        })
    }
    useEffect(() => {
        active_slide();
    }, [])
    return (
        <div className="row posts">
            <ul className="bread-crumbs col-12 ">
                <li className="Home">
                    <span>/</span>
                    <Link to="/">Home</Link ></li>

                {props.data.map((item, index) => (
                    <li key={index}>
                        <span> / </span>
                        <Link to={item.link}>
                            {
                                item.name
                            }
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="product-detail col-12 row">
                {/* left */}
                <div className="gallery-slide col-12 col-xl-7">
                    <SlideProductDetail
                        image_slide={optionColor != undefined ? optionColor : optionColorDefault[0]}
                    />
                </div>
                {/* left */}
                {/* right */}
                <div className="description-area col-12 col-xl-5">

                    <h3 className="title">{props.title}
                        <span>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </span>
                    </h3>


                    <div className="infor">
                        <div className="top-infor">
                            <h5 className="code-infor"> Mã {props.id}</h5>
                        </div>
                        <div className="price h4">
                            {
                                props.price
                            } đ
                        </div>
                    </div>
                    <div className="form-detail">

                        <div className="option_list option_list--color">
                            <h5>Thể loại: {props.option_title}</h5>
                            <ul>
                                {
                                    props.list_color_pro.map((item, index) => (
                                        <li className="color-ele" key={index} onClick={() => (setColor(item))} style={{ backgroundImage: `url(${item.url_image})` }}>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* <div className="option_list option_list--size">
                            <h5 className="title_list-size">Kích cỡ: {props.option_size}</h5>
                            <ul className="row box-size">
                                {
                                    props.list_size_pro.map((item, index) => (
                                        <li className="size-ele col-2" key={index}>
                                            {
                                                item.size_name
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div> */}
                        <ButtonCount />
                    </div>

                    {/* <div className="size-guide">
                        <div className="top row col-12">
                            <div className="left col-8">
                                <i class="fas fa-ruler"></i>
                                <span>Gợi ý tìm size</span>
                                <i className="fas fa-angle-down anggle" ref={dropdown_toggle}></i>
                            </div>
                            <div className="right col-4">
                                <a href="#" className="">
                                    Bảng size chuẩn
                                </a>
                            </div>
                        </div>
                        <div className="size-box" ref={dropdown_content}>
                            <DropdownBox
                                data_dropbox={data_dropdowm_box}
                            />

                        </div>
                    </div> */}
                    <div className="bt-buy row">
                        <div className="btn btn-addcart col-6">
                            <i class="fa fa-shopping-bag shop-bag" aria-hidden="true"></i>
                            Thêm vào giỏ hàng
                        </div>
                        <div className="btn btn-buy col-6">
                            Mua ngay
                        </div>
                    </div>
                    <div className="list-service row">
                        {
                            service.map((item, index) => (
                                <div className="item col-12 col-sm-6 row" key={index}>
                                    <div className="img_service col-2">
                                        <img src={item.url_image} alt="" />
                                    </div>
                                    <div className="display_name col-10">
                                        <h5 className="">{item.display_name}</h5>
                                        <h6 className="">{item.description}</h6>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="description">
                        <h5 className="title">Đặc điểm sản phẩm</h5>
                        <p>
                            {
                                props.description
                            }
                        </p>
                    </div>
                    {/* right */}
                </div>
            </div>
            {/* description product */}
            <div className="product-content">

                <ContentProductDetail
                    title={props.title}
                    content={props.content_product_detail}
                />
            </div>
            {/* <div className="product-review">
            </div> */}
            <div className="suggest_product-detail">
                <h4 className="text-center title">
                    CÓ THỂ BẠN MUỐN MUA
                </h4>
                <BlockProduct data={props.top_product}
                />

            </div>
        </div >
    );
}

export default Post;
