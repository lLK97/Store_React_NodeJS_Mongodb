import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Listproducts = props => {
    let pages = 1;
    let range = [];
    const max_show_product = 15;
    const dataInput = props.data;
    const show_product = dataInput.slice(0, Number(max_show_product));
    const [dataShow, setDataShow] = useState(show_product);
    const [activeOption, setactiveOption] = useState(1);
    const [currPage, setCurrPage] = useState(0);
    let page = Math.floor(dataInput.length / Number(max_show_product));
    pages = dataInput.length % Number(max_show_product) === 0 ? page : page + 1
    range = [...Array(pages).keys()];
    const selectPage = page => {
        const start = Number(max_show_product) * page
        const end = start + Number(max_show_product)
        setDataShow(dataInput.slice(start, end))
        setCurrPage(page)
    }
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

    //set Data first time
    const numberPage = document.getElementById('pagination-0');


    return (
        <div className="product row" id="cards-product">

            {
                numberPage == null ? (show_product.map((item, index) => (
                    <div className="col-12 col-sm-6 col-md-3 product-inner-item list-product-item" key={index}>
                        {/* item => props.active(item.list_color_pro[0]) */}
                        <Link to={item.slug} key={index} >
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
                        </Link>
                        <div className="option row">
                            {
                                item.id && item.list_color_pro.map((it, index) => (
                                    <div className={`option_item ${it.id == activeOption ? 'option_item_active' : ''}`} style={{ backgroundImage: `url(${it.url_image})` }} onClick={() => setOption(it, item.id)} key={index}>
                                    </div>
                                ))
                            }
                            <div className=""></div>
                        </div>
                    </div >

                ))) :
                    (dataShow.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-3 product-inner-item list-product-item" key={index}>
                            {/* item => props.active(item.list_color_pro[0]) */}
                            <Link to={item.slug} key={index} >
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
                            </Link>
                            <div className="option row">
                                {
                                    item.id && item.list_color_pro.map((it, index) => (
                                        <div className={`option_item ${it.id == activeOption ? 'option_item_active' : ''}`} style={{ backgroundImage: `url(${it.url_image})` }} onClick={() => setOption(it, item.id)} key={index}>
                                        </div>
                                    ))
                                }
                                <div className=""></div>
                            </div>
                        </div>
                    )))
            }
            {
                pages > 1 ? (
                    <div className='table_pagination_page'>

                        {
                            range.map((item, index) => (
                                <div key={index} id={`pagination-${index}`} className={`table_pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    );
}

export default Listproducts;
