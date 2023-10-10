import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {  apiGetListEbook, apiGetListEbookRelate } from "./api";
import { getListEbookPagingError, getListEbookPagingSuccess, getListEbookRelateSuccess,getListEbookRelateError } from "./slice";

function* handleGetListEbookPaging(action:any): Generator<any>  {
    try {
        const response:any= yield call(
            apiGetListEbook,
            action.payload,
        );
        if (response.success) {
            yield put(getListEbookPagingSuccess(response.data));
        } 
        else{
            yield put(getListEbookPagingError(response.data));

        }
    } catch (error) {
        yield put(getListEbookPagingError(error));
    }
}

function* handleGetListEbookRelate(action:any): Generator<any>  {
  try {
      const response:any= yield call(
          apiGetListEbookRelate,
          action.payload,
      );
      if (response.success) {
          yield put(getListEbookRelateSuccess(response.data));
      } 
      else{
          yield put(getListEbookRelateError(response.data));

      }
  } catch (error) {
      yield put(getListEbookRelateError(error));
  }
}


export default function* EbookSaga() {
    yield takeLatest("Ebook/getListEbookPaging", handleGetListEbookPaging);
    yield takeLatest("Ebook/getListEbookRelate", handleGetListEbookRelate);
    
}