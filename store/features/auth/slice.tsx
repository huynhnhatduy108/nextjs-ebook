import {createSlice, PayloadAction} from "@reduxjs/toolkit";
export const AUTH_ACTION ={
    LOGIN:"LOGIN",
    REGISTER:"REGISTER"
}

// Action creator
export const loginAction = (payload:any) => ({
  type: AUTH_ACTION.LOGIN,
  payload,
});

const initialState = {
    isFetching: false,
    data: null,  
    detailAuth: null,
    errors: [],
}

const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {

        clearStoreAuth(state){
            state.isFetching = false
            state.data = null
            state.detailAuth = null
            state.errors = []
        },

        // Login
        login(state, action) {
            state.isFetching = true
            state.errors = []
        },
        loginSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        loginError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // Resgister
        register(state, action) {
            state.isFetching = true
            state.errors = []
        },
        registerSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = []
        },
        registerError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },


}});

// ************************** Action *******************************
export const clearStoreAuth = AuthSlice.actions.clearStoreAuth;

export const login = AuthSlice.actions.login;
export const loginSuccess = AuthSlice.actions.loginSuccess;
export const loginError = AuthSlice.actions.loginError;

export const register = AuthSlice.actions.register;
export const registerSuccess = AuthSlice.actions.registerSuccess;
export const registerError = AuthSlice.actions.registerError;


// ************************** Store *******************************
export const getAuthSlice = (state:any) => state.auth;

const AuthReducer = AuthSlice.reducer;
export default AuthReducer;