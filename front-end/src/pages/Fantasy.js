import React from 'react';
import Content from './page_content/content';
import Foot from '../component/foot/foot';
import Header from '../component/head/head';


const Fantasy = () => {

    return (
        <div className="content_page child">
            <Header />
            <Content top_img="https://cungdocsach.vn/wp-content/uploads/2019/07/S%C3%A1ch-phi%C3%AAu-l%C6%B0u-gi%E1%BA%A3-t%C6%B0%E1%BB%9Fng-hay-nh%E1%BA%A5t.jpg"
                category='fantasy'
                title='KỲ ẢO'
            />
            <Foot />
        </div>
    );
}

export default Fantasy;
