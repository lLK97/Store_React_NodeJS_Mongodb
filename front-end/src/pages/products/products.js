import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataMenu_head, data_products } from '../../redux/actions/actions';
import '../../assets/css/component/listProduct/listProducts.scss';
import Foot from '../../component/foot/foot';
import Header from '../../component/head/head';
import Listproducts from './listProducts';
import { HIDE_NAVBAR, SHOW_NAVBAR } from '../../assets/js/util/util';

const ProductList = () => {
    const dispatch = useDispatch();
    const dataFilter = useSelector(state => state.menuReducer.menuData);
    let dataInput = useSelector(state => state.dataReducer.productData);
    const close = ['close-filter', 'innner-close', '.filter-sidebar', 'active-filter-sidebar'];
    const show = ['bars-filter', '.filter-sidebar', 'active-filter-sidebar'];
    const [data_filter, setdata_filter] = useState(dataInput);

    //CHECK BOX PRODUCTS
    const active_checkbox = () => {
        document.addEventListener('click', (e) => {
            const checkbox = document.getElementsByClassName('checkBox-cate');
            let data_checkbox = [];
            if (e.target.classList.contains('checkBox-cate')) {
                for (let i = 0; i < checkbox.length; i++) {
                    if (checkbox[i].checked == true) {
                        data_checkbox.push(...dataInput.filter(item => item.category_child == checkbox[i].value));
                    }
                }
            }
            setdata_filter(data_checkbox);
        })
    }

    const sort_data = () => {

        const sort_select = document.getElementById('sort');
        console.log(sort_select.value);
        if (sort_select.value == 'default') {
            active_checkbox();
        } else if (sort_select.value == 'alphabeta') {
            setdata_filter(data_filter.sort());
        } else if (sort_select.value == 'reverses') {
            setdata_filter(data_filter.sort());
            setdata_filter(data_filter.reverse());
        }
    }

    useEffect(() => {
        dispatch(dataMenu_head());
        dispatch(data_products());
        active_checkbox();
    }, [])
    // useEffect(() => {
    //     sort_data();
    // })

    return (
        <div className="content_page list-products">
            <Header />

            <div className="content">
                <div className="banner">
                </div>
                <h4>CÁC SẢN PHẨM</h4>
                <div className="inner_content row m-auto">
                    {/* filter desktop  */}
                    <div className="filter-products col-3">
                        <div className="inner-filter">
                            <ul>
                                <li><h3>Loại sách</h3></li>
                                {
                                    dataFilter != undefined ? (dataFilter.map((item, index) => (
                                        <li>
                                            <li className="tag">
                                                {
                                                    item.display_name
                                                }
                                            </li>
                                            <ul >
                                                {
                                                    item.dropdown ? (
                                                        item.dropdown.map((el) =>
                                                            <li> <input type="checkbox" name={`group-${index}`} className="checkBox-cate"
                                                                value={el.category_child} onClick={active_checkbox} /> {el.display_name}</li>
                                                        )
                                                    ) : []
                                                }
                                            </ul>
                                        </li>

                                    ))) : []
                                }
                            </ul>
                        </div>
                    </div>
                    {/* filter desktop  */}
                    {/* filter mobile */}
                    <div className="filter-sidebar active-filter-sidebar">
                        <div className="inner-filter-sidebar">
                            <ul>
                                <li className="tag"><h3>Bộ lọc sách</h3></li>
                                {
                                    dataFilter != undefined ? (dataFilter.map((item, index) => (
                                        <li>
                                            <li className="tag">
                                                {
                                                    item.display_name
                                                }
                                            </li>
                                            <ul >
                                                {
                                                    item.dropdown ? (

                                                        item.dropdown.map((el) =>
                                                            <li> <input type="checkbox" name={`group-${index}`} /> {el.display_name}</li>
                                                        )
                                                    ) : []
                                                }
                                            </ul>
                                        </li>

                                    ))) : []
                                }

                            </ul>
                            <div className="close-filter" onClick={HIDE_NAVBAR(...close)}>
                                <i class="fa fa-close innner-close" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    {/* filter mobile */}
                    <div className="list col-12 col-xl-9">
                        <div className="sort row">
                            <div className="sort-text col-6" onClick={SHOW_NAVBAR(...show)}>
                                <i class="fa fa-bars bars-filter" aria-hidden="true"></i>
                                Sản phẩm</div>
                            <div className="sort-cate col-6">
                                <span> Sắp xếp theo &nbsp;</span>
                                <select id="sort" onClick={sort_data}>
                                    <option value="default" >Mặc định</option>
                                    <option value="alphabeta" >Từ A-Z</option>
                                    <option value="reverses" >Từ Z-A</option>
                                    <option value="dec" >Rẻ nhất</option>
                                    <option value="asc" >Đắt nhất</option>
                                    <option value="newest" >Mới nhất</option>
                                </select>
                            </div>
                        </div>
                        {
                            data_filter == '' ? (
                                <Listproducts
                                    data={dataInput != undefined ? dataInput : []} />) :
                                (
                                    <Listproducts
                                        data={data_filter != undefined ? data_filter : []} />
                                )
                        }


                    </div>

                </div>
            </div>
            <Foot />
        </div >

    );
}

export default ProductList;
