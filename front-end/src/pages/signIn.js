import React, { useState, useEffect } from 'react';
import '../assets/css/login/login.scss';
import { useDispatch, useSelector } from 'react-redux';


const Signin = () => {
    const dispatch = useDispatch();

    const [userData, setNewUserData] = useState({
        fristname: '',
        lastname: '',
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        const value = e.target.value;
        setNewUserData({
            ...userData,
            [e.target.name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setNewUserData({
            firstname: userData.firstname,
            lastname: userData.lastname,
            username: userData.username,
            password: userData.password
        })
        // dispatch(aut);
    }
    return (
        <div className="login">
            <form className='form-login' onSubmit={handleSubmit}>
                <h3 className="title">Sign In</h3>
                <input type="text" placeholder="First name" className='item item--input' name='firstname' onChange={handleChange} />
                <input type="text" placeholder="Last name" className='item item--input' name='lastname' onChange={handleChange} />
                <input type="text" placeholder="User name" className='item item--input' name='username' onChange={handleChange} />
                <input type="text" placeholder="Password" className='item item--input' name='password' onChange={handleChange} />
                <input className="item btn-login" type="submit" value='Sign in' />
            </form>
        </div>
    );
}

export default Signin;
