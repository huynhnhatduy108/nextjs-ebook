import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {  apiGetListPost } from "./api";
import { getListPostPagingError, getListPostPagingSuccess } from "./slice";

function* handleGetListPostPaging(action:any): Generator<any>  {
    try {
        const response:any= yield call(
            apiGetListPost,
            action.payload,
        );
        if (response.success) {
            yield put(getListPostPagingSuccess(response.data));
        } 
        else{
            yield put(getListPostPagingError(response.data));

        }
    } catch (error) {
        yield put(getListPostPagingError(error));
    }
}


export default function* PostSaga() {
    yield takeLatest("Post/getListPostPaging", handleGetListPostPaging);
    
}