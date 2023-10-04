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
    login: null,  
    register: null,
    isOpen:false,
    errors: [],
}

const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {

        clearStoreAuth(state){
            state.isFetching = false
            state.login = null
            state.register = null
            state.isOpen= false
            state.errors = []
        },

        // Login
        clearLogin(state){
            state.login = null
            state.errors = []
        },

        login(state, action) {
            state.isFetching = true
            state.errors = []
        },
        loginSuccess(state, action) {
            state.isFetching = false
            state.login = action.payload
            state.errors = []
        },
        loginError(state, action) {
            state.isFetching = false
            state.login =null
            state.errors = action.payload
        },

        // Resgister
        clearResgister(state){
            state.register = null
            state.errors = []
        },

        register(state, action) {
            state.isFetching = true
            state.errors = []
        },
        registerSuccess(state, action) {
            state.isFetching = false
            state.register = action.payload
            state.errors = []
        },
        registerError(state, action) {
            state.isFetching = false
            state.register =null
            state.errors = action.payload
        },

        // ModelAuth
        openModelAuth(state) {
            state.isOpen = true 
        },

        closeModelAuth(state) {
            state.isOpen = false
        },




}});

// ************************** Action *******************************
export const clearStoreAuth = AuthSlice.actions.clearStoreAuth;

export const clearLogin = AuthSlice.actions.clearLogin;
export const login = AuthSlice.actions.login;
export const loginSuccess = AuthSlice.actions.loginSuccess;
export const loginError = AuthSlice.actions.loginError;

export const clearRegister = AuthSlice.actions.clearResgister;
export const register = AuthSlice.actions.register;
export const registerSuccess = AuthSlice.actions.registerSuccess;
export const registerError = AuthSlice.actions.registerError;

export const openModelAuth = AuthSlice.actions.openModelAuth;
export const closeModelAuth = AuthSlice.actions.closeModelAuth;

// ************************** Store *******************************
export const getAuthSlice = (state:any) => state.auth;

const AuthReducer = AuthSlice.reducer;
export default AuthReducer;