import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/css/foot/foot.scss';
import { dataInfor_foot } from '../../redux/actions/actions';

const Foot = () => {
    const dispatch = useDispatch();
    const footData = useSelector(state => state.footReducer.footData);
    //Show, Hide 

    useEffect(() => {
        dispatch(dataInfor_foot());
    }, [])
    return (
        <div className="footer">
            <div className="content row">
                <div className="contact col-12 col-md-4">
                    <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="registration_box">
                        <h5 className="title">
                            ĐĂNG KÝ NHẬN THÔNG TIN
                        </h5>
                        <div className="box col-12 row">
                            <input type="text" placeholder="Nhập email đăng ký của bạn" />
                            <div className="bt">
                                Đăng ký
                            </div>
                        </div>
                    </div>
                </div>
                <div className="information col-12 col-md-4">
                    <h5 className="title">
                        Về chúng tôi
                    </h5>
                    <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue.
                    </div>
                </div>
                <div className="location col-12 col-md-4 row">
                    {
                        footData != undefined ? (footData.map((item, index) => (
                            <div className="item row" key={index}>
                                <div className="col-1 icon">
                                    <i className={`${item.icon}`}></i>
                                </div>

                                <div className="display_name col-10">
                                    {item.display_name}
                                </div>
                            </div>
                        ))) : null
                    }
                </div>
            </div>

        </div >
    );
}

export default Foot;
