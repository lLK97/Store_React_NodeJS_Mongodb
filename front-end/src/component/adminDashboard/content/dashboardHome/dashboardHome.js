import React, { useRef, useEffect } from 'react';
import '../../../../assets/css/adminDashboard/admin.scss';
import Headinner from '../../headInner';
import Sidebar from '../../sidebar';
import CardItem from './card/card-item';
import CardChart from './chart/chart';
import Table from './table/table';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import card_top from '../../../../assets/JsonData/dashboardAdmin/card_top.json';
import { SHOW_HIDE_ELE } from '../../../../assets/js/util/util';
import { data_users, data_products } from '../../../../redux/actions/actions';

const DashboardHome = () => {
    const user = useSelector(state => state.authReducer.login);
    const navigate = useNavigate();
    const headDataProducts = [
        'ID',
        'Name',
        'Category',
        'Price',
        'Sale'
    ]
    const headDataCustormer = [
        'Firstname',
        'Lastname',
        'Username',
        'Password'
    ]
    const renderBodycustomer = (item, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.user_name}</td>
            <td>{item.password}</td>
        </tr>
    )
    const renderhead = (item, index) => (
        <th key={index}>{item}</th>
    )
    const renderBodyLatesOrder = (item, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.id}</td>
            <td>{item.display_name}</td>
            <td>{item.option_title}</td>
            <td>{item.price}</td>
            <td>{item.thumbnail}</td>
        </tr>
    )

    const dropdown__toggle = useRef(null);
    const dropdown__content = useRef(null);
    SHOW_HIDE_ELE(dropdown__toggle, dropdown__content, 'active_sidebar');
    useEffect(() => {
        if (user.currentUser == null) {
            navigate('/login');
        }
    }, []);
    return (
        <div className="dashboard dashboard--home">
            <div ref={dropdown__content} className="left col-5 col-lg-2 m-0">
                <Sidebar />
            </div>

            <i className="" aria-hidden="true"></i>
            <div className="right col-12 col-lg-10 m-0">
                <Headinner
                    toggle={dropdown__toggle} />
                <div className="content content--home">
                    <h3 className="title">
                        DASHBOARD </h3>
                    {/* card */}
                    <div className="card-item col-12 row">
                        {
                            card_top.map((item, index) =>
                            (
                                <CardItem
                                    display_name={item.display_name}
                                    icon={item.icon}
                                    number={item.number}
                                    key={index}></CardItem>

                            ))
                        }

                    </div>
                    {/* card */}
                    {/* chart group */}
                    <CardChart />
                    <div className="table-group row">
                        <div className="table-innner col-12 col-lg-6">
                            <Table
                                title='Top customer'
                                headData={headDataCustormer}
                                renderHead={(item, index) => renderhead(item, index)}
                                state={(state) => state.usersReducer.usersData}
                                action={data_users()}
                                renderBody={(item, index) => renderBodycustomer(item, index)}
                                className='custormerDashboard'
                            />
                            <div className='card-footer'>
                                <Link to="/">View all</Link>
                            </div>
                        </div>
                        <div className="table-innner col-12 col-lg-6">
                            <Table
                                title='Last Orders'
                                headData={headDataProducts}
                                renderHead={(item, index) => renderhead(item, index)}
                                state={(state) => state.dataReducer.productData}
                                action={data_products()}
                                renderBody={(item, index) => renderBodyLatesOrder(item, index)}
                                className='productsDashboard'
                            />
                            <div className='card-footer'>
                                <Link to="/">View all</Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default DashboardHome;
