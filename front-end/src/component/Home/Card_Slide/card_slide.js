import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { dataCardBlog_home } from '../../../redux/actions/actions';

const properties = {

    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
    indicators: false,
    responsive: [

        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        }
    ]
}

const Card_Slide = () => {
    const card_blog_data = useSelector(state => state.cardBlogReducer.cardBlogData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dataCardBlog_home());
    }, []);
    return (
        <div className="section_card-blog">
            <h4 className="col-12">TIN TỨC</h4>
            <Slide {...properties}>
                {
                    card_blog_data != undefined ? card_blog_data.map((item, index) => (
                        <Link to={`/post/${item.slug}`}>
                            <div className="card_item" key={index}>
                                <div className="avatar" style={{ backgroundImage: `url("${item.url_image}")` }}>

                                </div>
                                <h5 className="title">
                                    <div>{item.display_name}</div>
                                </h5>
                                <div className="description">
                                    {item.description}
                                </div>
                                <div className="date_release">
                                    <i className="fa-regular fa-clock mr-3"></i>
                                    {
                                        item.date_release
                                    }
                                </div>
                            </div>
                        </Link>
                    )) : []
                }
            </Slide>
            <div className="bt">
                <Link to="/product"> Xem thêm</Link>
            </div>
        </div>
    );
}

export default Card_Slide;
