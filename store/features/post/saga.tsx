import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {  apiGetListPost, apiGetListPostRelate } from "./api";
import { getListPostPagingError, getListPostPagingSuccess, getListPostRelateSuccess,getListPostRelateError } from "./slice";

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

function* handleGetListPostRelate(action:any): Generator<any>  {
  try {
      const response:any= yield call(
          apiGetListPostRelate,
          action.payload,
      );
      if (response.success) {
          yield put(getListPostRelateSuccess(response.data));
      } 
      else{
          yield put(getListPostRelateError(response.data));

      }
  } catch (error) {
      yield put(getListPostRelateError(error));
  }
}


export default function* PostSaga() {
    yield takeLatest("Post/getListPostPaging", handleGetListPostPaging);
    yield takeLatest("Post/getListPostRelate", handleGetListPostRelate);
    
}