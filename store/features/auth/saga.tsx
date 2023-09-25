import { setLocalItem } from "@/utils/helper";
import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import { apiLogin, apiRegister} from "./api";
import {  loginError, loginSuccess, registerError, registerSuccess  } from "./slice";

// interface IResponse {
//     data:any;
//     errors: any;
//     headers: any;
//     status: number;
//     success: boolean;
// }

function* handleLogin(action:any): Generator<any> {
    try { 
        const response:any = yield call(
            apiLogin,
            action.payload,
        );        

        if (response.success) {
            yield put(loginSuccess(response.data));
            setLocalItem("userToken",response.data)
        } 
        else{
            yield put(loginError(response));
        }
    } catch (error) {
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
            yield put(registerError(response.data));
        } 
        else{
            yield put(registerSuccess(response));

        }
    } catch (error) {
        yield put(registerSuccess(error));
    }
}

export default function* AuthSaga() {
    yield takeLatest("Auth/login", handleLogin);
    yield takeLatest("Auth/register", handleRegister);
}