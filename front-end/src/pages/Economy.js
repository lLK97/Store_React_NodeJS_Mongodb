import React from 'react';
import Content from './page_content/content';
import Foot from '../component/foot/foot';
import Header from '../component/head/head';


const Economy = () => {
    return (
        <div className="content_page child">
            <Header />
            <Content top_img="https://hbr.edu.vn/public/files/upload/06_2019/images/banner-combo-5c-cho-doanh-nghiep-0911.jpg"
                category='economy'
                title='KINH TẾ'
            />
            <Foot />
        </div>
    );
}

export default Economy;
