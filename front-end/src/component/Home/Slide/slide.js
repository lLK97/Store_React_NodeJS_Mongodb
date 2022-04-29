import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

const slideImage = [
    {
        url: 'https://thietkelogo.edu.vn/uploads/images/thiet-ke-do-hoa-khac/banner-sach/8.png',
        caption: 'Nắng',
        des: 'Về một góc vườn xưa mà nhớ, mà thương mà mộng theo những vệt nắng tình',
        price: '299.000đ - 399.000đ',
    },
    {
        url: 'https://cdnimg.vietnamplus.vn/uploaded/fsmsy/2019_12_25/mat_biec.jpg',
        caption: 'Mắt biếc',
        des: 'Tình đầu một thời cứ ngỡ là một đời',
        price: '299.000đ - 881.300đ',
    },
    {
        url: 'https://moingay1cuonsach.com.vn/wp-content/uploads/2021/09/song-o-day-song-sbooks-8.jpg',
        caption: 'Sóng ở đáy sông',
        des: 'Sóng trong lòng người',
        price: '399.000đ - 499.000đ',
    }
]

const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    arrows: false,
    indicators: true
}

const SectionSlide = () => {
    return (
        <div className="slide-container">
            <Slide {...properties}>
                {
                    slideImage.map((slideitem, index) => (
                        <div className="each-slide" key={index}>
                            <div style={{
                                'background': `linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ) , url(${slideitem.url})`
                            }} className="image">
                                <h2 className="caption mb-3">
                                    {
                                        slideitem.caption
                                    }

                                </h2>


                                <h3 className="price">
                                    <h5> Chỉ từ: {slideitem.price}</h5>

                                    {slideitem.des}
                                </h3>
                                <br />
                                <div className="bt">
                                    Mua ngay thôi
                                </div>

                            </div>

                        </div>
                    ))
                }
            </Slide >

        </div >
    );
}

export default SectionSlide;
