import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Foot from '../component/foot/foot';
import Header from '../component/head/head';
import Card_Slide from '../component/Home/Card_Slide/card_slide';
import { dataCardBlog_home } from '../redux/actions/actions';
import '../assets/css/component/blog.scss';
import Parser from "marked";

const PostInfor = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.cardBlogReducer.cardBlogData);
    const slug = window.location.pathname.split('/')[2] != undefined ? window.location.pathname.split('/')[2] : window.location.pathname.substring(1);
    const blog_data = data != undefined ? data.find(item => item.slug == slug) : [];
    const content = blog_data != undefined ? blog_data.description : null;
    const format_post = content != undefined || content != null ? content.split('/') : [];
    console.log(format_post);
    window.scroll(0, 0);
    useEffect(() => {
        dispatch(dataCardBlog_home())

    }, [])

    return (
        <div className="content_page blog">
            <Header />
            <div className="top_img" style={{ backgroundImage: `url("${blog_data != undefined ? blog_data.url_image : null}")` }}>
            </div>
            <div className="content-post">
                <h3 className="title">{blog_data != undefined ? blog_data.display_name : null}</h3>
                <div className="content-innner">

                    {
                        format_post.map((item, index) => (
                            <p key={index} style={{ textAlign: 'justify' }}>
                                {item}
                            </p>
                        ))
                    }

                </div>
            </div>
            <Card_Slide />
            <Foot />
        </div >
    );
}

export default PostInfor;
