import React, { useEffect } from 'react';
import { dataService_home } from '../../../redux/actions/actions'
import { Slide } from 'react-slideshow-image';
import { useDispatch, useSelector } from 'react-redux';

const Service = () => {

    const properties = {
        slidesToScroll: 1,
        slidesToShow: 1,
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        arrows: false,
        indicators: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 976,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            }
        ]
    }
    const service_home = useSelector(state => state.serviceReducer.serviceData);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dataService_home());
    }, []);

    return (
        <div className="section_service row">
            <Slide {...properties}>
                {
                    service_home != undefined ? service_home.map((item, index) => (
                        <div className="item col-12 col-md-6 col-lg-3 row m-0" key={index}>
                            <div className="img_service col-2">
                                <img src={item.url_image} alt="" />
                            </div>
                            <div className="display_name col-9">
                                <h5 className="">{item.display_name}</h5>
                                <h6 className="">{item.description}</h6>
                            </div>
                        </div>
                    )) : []
                }
            </Slide>
        </div>
    );
}

export default Service;
