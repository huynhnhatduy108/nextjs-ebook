import { setLocalItem } from "@/utils/helper";
import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import { apiLogin, apiRegister} from "./api";
import {  login, loginError, loginSuccess, register, registerError, registerSuccess  } from "./slice";



function* handleLogin(action:any) {
    try {

        console.log("action==>", action);
        
        // const response= yield call(
        //     apiLogin,
        //     action.payload,
        // );
        // if (response.success) {
        //     yield put(loginSuccess(response.data));
        //     setLocalItem("userToken",response.data)
        // } 
        // else{
        //     yield put(loginError(response));

        // }
    } catch (error) {
        yield put(loginError(error));
    }
}

function* handleRegister(action:any) {
    try {
        // const response= yield call(
        //     apiRegister,
        //     action.payload,
        // );
        // if (response.success) {
        //     yield put(registerError(response.data));
        // } 
        // else{
        //     yield put(registerSuccess(response));

        // }
    } catch (error) {
        yield put(registerSuccess(error));
    }
}

export default function* AuthSaga() {
    yield takeLatest("Auth/login", handleLogin);
    yield takeLatest("Auth/register", handleRegister);
}