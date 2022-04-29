// import { INIT_STATE, AUTH_LOGIN } from "../../../constant"
import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFeatching: false,
            error: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFeatching = true
        },
        loginSuccess: (state, action) => {
            state.login.isFeatching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFalse: (state, action) => {
            state.login.isFeatching = false;
            state.login.error = true;
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFalse
} = authSlice.actions;

export default authSlice.reducer;