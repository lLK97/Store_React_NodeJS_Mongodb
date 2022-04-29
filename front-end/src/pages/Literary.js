import React from 'react';
import Content from './page_content/content';
import Foot from '../component/foot/foot';
import Header from '../component/head/head';




const Literary = () => {

    return (
        <div className="content_page child">
            <Header />
            <Content top_img="https://newshop.vn/public/uploads/news/nhung-cuon-sach-van-hoc-nhat-ban-dang-mua-nhat-min.jpg"
                category='literary'
                title='VĂN HỌC'
            />
            <Foot />
        </div>
    );
}

export default Literary;
