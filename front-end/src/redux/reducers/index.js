import dataReducer from './dataReducer';
import footReducer from './footReducer';
import menuReducer from './menuReducer';
import serviceReducer from './serviceReducer';
import cardBlogReducer from './cardBlogReducer'
import usersReducer from './usersReducer';
import authReducer from './auth/authReducer';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    dataReducer, footReducer,
    menuReducer, serviceReducer,
    cardBlogReducer, usersReducer, authReducer
})


export default rootReducer;
