import FETCH_DATA from '../../api/index';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import {
    loginStart,
    loginSuccess,
    loginFalse
} from '../../redux/reducers/auth/authReducer'
export const data_products = () => async (dispatch) => {
    try {
        const res = await axios.get('https://book-store-lk.herokuapp.com/products').then(resp => resp.data);
        dispatch({
            type: 'DATA_PRODUCT',
            payload: res
        })
    } catch (err) {
        console.log(err);
    }
}
export const dataInfor_foot = () => async (dispatch) => {
    try {
        const res = await axios.get('https://book-store-lk.herokuapp.com/footInfor').then(resp => resp.data);
        dispatch({
            type: 'DATA_FOOT',
            payload: res
        })
    } catch (err) {
        console.log(err);
    }
}
export const dataMenu_head = () => async (dispatch) => {
    try {
        const res = await axios.get('https://book-store-lk.herokuapp.com/menu').then(resp => resp.data);
        dispatch({
            type: 'DATA_MENU',
            payload: res
        })
    } catch (err) {
        console.log(err);
    }
}
export const dataService_home = () => async (dispatch) => {
    try {
        const res = await axios.get('https://book-store-lk.herokuapp.com/serviceHome').then(resp => resp.data);
        dispatch({
            type: 'DATA_SERVICE',
            payload: res
        })
    } catch (err) {
        console.log(err);
    }
}
export const dataCardBlog_home = () => async (dispatch) => {
    try {
        const res = await axios.get('https://book-store-lk.herokuapp.com/cardBlog').then(resp => resp.data);
        dispatch({
            type: 'DATA_CARDBLOG',
            payload: res
        })
    } catch (err) {
        console.log(err);
    }
}
export const data_users = () => async (dispatch) => {
    try {
        const res = await axios.get('https://book-store-lk.herokuapp.com/users').then(resp => resp.data);
        dispatch({
            type: 'DATA_USERS',
            payload: res
        })
    } catch (err) {
        console.log(err);
    }
}

export const data_login = async (userData, navigate, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:3000/login', userData);
        dispatch(loginSuccess(res.data));
        navigate('/ad');
        console.log('ok')
    } catch (error) {
        dispatch(loginFalse);
    }
}
// }
// export const signin = (userNewData) => async (dispatch) => {
//     try {
//         const res = await axios.post('http://localhost:3000/signin', userNewData).then(resp => resp.data);
//         dispatch({
//             type: 'SIGNIN',
//             payload: res
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

