import React from 'react';
import Headinner from '../headInner';
import Sidebar from '../sidebar';
import Button from './dashboardHome/table/Button';
import Table from './dashboardHome/table/table';
import { Link } from 'react-router-dom';
import { SHOW_HIDE_ELE } from '../../../assets/js/util/util';
import { data_users } from '../../../redux/actions/actions';

const Users = () => {
    const Button_name = [
        'Add Users',
        'Edit Users',
        'Remove Users'
    ]
    const headDataUser = [
        '',
        'First Name',
        'Last Name',
        'Users Name',
        'Password',

    ]
    const renderhead = (item, index) => (
        <th key={index}>{item}</th>
    )
    const renderBodycustomer = (item, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.user_name}</td>
            <td>{item.password}</td>
        </tr>
    )


    const dropdown__toggle = React.useRef(null);
    const dropdown__content = React.useRef(null);
    SHOW_HIDE_ELE(dropdown__toggle, dropdown__content, 'active_sidebar');
    return (
        <div className="dashboard dashboard--home">
            <div ref={dropdown__content} className="left col-5 col-lg-2 m-0">
                <Sidebar />
            </div>


            <div className="right col-12 col-lg-10 m-0">
                <Headinner />
                <div className="content content--users col-12">
                    <h3 className="title">
                        USERS </h3>
                    <div className="Button-active row">
                        {
                            Button_name.map((item) => (
                                <Button
                                    display_name={item}

                                />
                            ))
                        }
                    </div>
                    <div className="search-gr row">
                        <div className="max-products_show col-6">
                            <span> Show &nbsp;
                                <select name="" id="" className="p-1 ">
                                    <option value="10">10</option>
                                    <option value="10">20</option>
                                    <option value="10">50</option>
                                    <option value="10">100</option>
                                </select>
                                &nbsp; entries
                            </span>
                        </div>
                        <div className="search-box col-6">
                            <input type="text" name="" id="" />  <span>Search: &nbsp;</span>
                        </div>

                        <Table
                            title='Top customer'
                            headData={headDataUser}
                            renderHead={(item, index) => renderhead(item, index)}
                            state={(state) => state.usersReducer.usersData}
                            action={data_users()}
                            renderBody={(item, index) => renderBodycustomer(item, index)}
                            className='users'
                            limit={8}
                        />
                        <div className='card-footer'>
                            <Link to="/">View all</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Users;
