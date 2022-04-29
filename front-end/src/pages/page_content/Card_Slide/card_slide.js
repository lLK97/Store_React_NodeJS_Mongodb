import React from 'react';

const properties = {
    slidesToShow: 4,
    slidesToScroll: 1,
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
    indicators: false
}

const CardSlide = props => {
    return (
        <div className="section_card-blog">
            <h4 className="col-12">LOREM IPSUM</h4>
            {

                <Slide {...properties}>
                    {
                        props.card_blog_data.map((item, index) => (
                            <div className="card_item" key={index}>
                                <div className="avatar">
                                    <img src={item.url_image} alt="" />
                                </div>
                                <h5 className="title">
                                    {item.display_name}
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
                        ))
                    }
                </Slide>
            }
            <div className="bt">
                Xem thêm
            </div>
        </div>
    );
}

export default CardSlide;
