import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import { apiListCategoryFull} from "./api";
import {  getListCategoryFull, getListCategoryFullError, getListCategoryFullSuccess  } from "./slice";


function* handleGetListCategory(action:any): Generator<any> {
    try {
        const response:any= yield call(
            apiListCategoryFull,
            action.payload,
        );
        if (response.success) {
            yield put(getListCategoryFullSuccess(response.data));
        } 
        else{            
            yield put(getListCategoryFullError(response.data));

        }
    } catch (error) {
        yield put(getListCategoryFullError(error));
    }
}

export default function* CategorySaga() {
    yield takeLatest("Category/getListCategoryFull", handleGetListCategory);
}