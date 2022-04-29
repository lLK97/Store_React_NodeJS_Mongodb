import React, { useEffect, useState } from 'react';
import Card_Slide from '../../component/Home/Card_Slide/card_slide';
import Service from '../../component/Home/Service/service';
import Category from './category/category';
import { useSelector, useDispatch } from 'react-redux';
import { data_products, dataMenu_head } from '../../redux/actions/actions';
import Listproducts from '../products/listProducts';
import '../../assets/css/component/page/page_category.scss';



const Content = props => {
    const dispatch = useDispatch();
    const dataInput = useSelector(state => state.dataReducer.productData);
    const dataInputMenu = useSelector(state => state.menuReducer.menuData);
    const data_pro = dataInput != undefined ? dataInput : null;
    const data_menu = dataInputMenu != undefined ? dataInputMenu : null;

    const product = data_pro != undefined || data_pro != null ? data_pro.filter(item => item.category == props.category) : [];
    const menu = data_menu != undefined || data_menu != null ? data_menu.find(item => item.category == props.category).dropdown : [];

    useEffect(() => {
        dispatch(data_products());
        dispatch(dataMenu_head());
    }, [])
    return (
        <div className="content-page">
            <div className="section_image">
                <img src={props.top_img} alt="" />
            </div>
            <Service />
            <Category
                list_category={menu} />

            <div className="list-category-product">
                <h4 className="title_category">{props.title}</h4>
                <Listproducts
                    data={product}
                />

            </div>


            <Card_Slide />
        </div>
    );
}

export default Content;
