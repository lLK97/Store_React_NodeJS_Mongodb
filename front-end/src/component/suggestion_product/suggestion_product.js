import React, { useState, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { data_products } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import BlockProduct from './tab_item/block_product';
import Slider from 'react-slick';



const SuggestionProduct = () => {
    const dataInput = useSelector(state => state.dataReducer.productData);
    const menuInput = useSelector(state => state.menuReducer.menuData);
    const tab_product = menuInput != undefined ? menuInput : [];
    const product = dataInput != undefined ? dataInput : [];
    const [data_product, setDataProduct] = useState(product);
    let local_path = '/' + window.location.hash;
    const [active_tab, setActiveTab] = useState(null);
    const tab_dataProduct = path => {
        switch (path) {
            case '/#top_book':
                setDataProduct(product);
                break;
            case '/#literary':
                setDataProduct(product.filter(function (el) { return el.category == "literary" }));
                break;
            case '/#economy':
                setDataProduct(product.filter(function (el) { return el.category == "economy" }));
                break;
            case '/#fantasy':
                setDataProduct(product.filter(function (el) { return el.category == "fantasy" }));
                break;
            default:
                setDataProduct(product);
                break;
        }

    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(data_products());
    }, [])
    useEffect(() => {
        const active_tab_item = tab_product.findIndex(item => item.route_tag === local_path);
        setActiveTab(active_tab_item);
    })
    const properties = {
        slidesToShow: 4,
        slidesToScroll: 1,
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
        <div className="suggestion_product">
            <h4>ĐỀ XUẤT CHO BẠN</h4>
            <div className="row tag-suggestion">
                <div className="m-auto col-12 col-lg-6 row gr-tab">
                    <Slider {...properties}>
                        {
                            tab_product.map((item, index) => (
                                <Link className={`col-2 tab-item ${index === active_tab ? 'active_tab-item' : ''}`} to={item.route_tag} key={index} onClick={() => tab_dataProduct(item.route_tag)}>
                                    {
                                        item.display_name
                                    }
                                </Link>
                            ))
                        }
                    </Slider>
                </div>

            </div>
            {/* <BlockProduct
            data={data_product}
        /> */}
            {
                local_path == '/' || local_path == '/#top_book' ? (
                    <BlockProduct
                        data={product}
                    />
                ) : (
                    <BlockProduct
                        data={data_product}
                    />
                )
            }
        </div >);
}

export default SuggestionProduct;