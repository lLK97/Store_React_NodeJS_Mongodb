import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import '../assets/css/login/login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { data_login } from '../redux/actions/actions';

const Login = () => {
    const dispatch = useDispatch();
    const [userData, setuserData] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate();

    // const data = useSelector(state => state);
    const handleChange = (e) => {
        const value = e.target.value;
        setuserData({
            ...userData,
            [e.target.name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setuserData({
            username: userData.username,
            password: userData.password
        })
        data_login(userData, navigate, dispatch);
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit} className='form-login'>
                <h3 className="title">LOGIN</h3>
                <input type="text" placeholder="Username" className='item item--input' name='username' onChange={handleChange} />
                <input type="text" placeholder="Password" className='item item--input' name='password' onChange={handleChange} />
                <Link to='/signin'>
                    <span>Sign in</span>
                </Link>
                <input className="item btn-login" type="submit" value='Sign in' />
            </form>
        </div>
    );

}

export default Login;