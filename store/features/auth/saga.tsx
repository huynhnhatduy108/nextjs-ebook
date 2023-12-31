import { setLocalItem } from "@/utils/helper";
import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import { setNotification } from "../notification/slice";
import { apiLogin, apiRegister} from "./api";
import {  loginError, loginSuccess, registerError, registerSuccess  } from "./slice";


function* handleLogin(action:any): Generator<any> {
    try { 
        const response:any = yield call(
            apiLogin,
            action.payload,
        );        

        if (response.success) {
            yield put(loginSuccess(response.data));
            setLocalItem("userToken",response.data);
            window.location.reload();
        } 
        else{
            yield put(setNotification({message:"Sai tên đăng nhập hoặc mật khẩu", type: "error"}));
            yield put(loginError(response.data));
        }
    } catch (error) {
        yield put(setNotification({message:"Sai tên đăng nhập hoặc mật khẩu", type: "error"}));
        yield put(loginError(error));
    }
}

function* handleRegister(action:any): Generator<any> {
    try {
        const response:any= yield call(
            apiRegister,
            action.payload,
        );
        if (response.success) {
            yield put(registerSuccess(response.data));
        } 
        else{            
            yield put(setNotification({message:response?.data?.detail, type: "error"}));
            yield put(registerError(response.data));

        }
    } catch (error) {
        yield put(setNotification({message:"Đăng ký thất bại", type: "error"}));
        yield put(registerSuccess(error));
    }
}

export default function* AuthSaga() {
    yield takeLatest("Auth/login", handleLogin);
    yield takeLatest("Auth/register", handleRegister);
}