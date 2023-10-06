import { setLocalItem } from "@/utils/helper";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { setNotification } from "../notification/slice";
import {
  apiCheckRateEbook,
  apiGeRateEbook,
  apiRateEbook
} from "./api";
import {
 rateEbook,
 rateEbookError,
 rateEbookSuccess,
 checkRateEbook,
 checkRateEbookError,
 checkRateEbookSuccess,
 getRateEbook,
 getRateEbookError,
 getRateEbookSuccess
} from "./slice";


// Rate
function* handleGetRateEbook(action: any): Generator<any> {    
    try {
      const response: any = yield call(apiGeRateEbook, action.payload);
      if (response.success) {
        yield put(getRateEbookSuccess(response.data));
      } else {
        yield put(getRateEbookError(response.data));
      }
    } catch (error) {
      yield put(getRateEbookError(error));
    }
  }

function* handleRateToEbook(action: any): Generator<any> {
    try {
        const response: any = yield call(apiRateEbook, action.payload);
    
        if (response.success) {
          yield put(rateEbookSuccess(response.data));
          yield put(setNotification({message:"Cam on ban da danh gia", type: "success"}));

        } else {
          yield put(rateEbookError(response.data));
        }
      } catch (error) {
      
        yield put(rateEbookError(error));
      }
}


function* handleCheckRateEbook(action: any): Generator<any> {
  try {
      const response: any = yield call(apiCheckRateEbook, action.payload);
  
      if (response.success) {
        yield put(checkRateEbookSuccess(response.data));
      } else {
        yield put(checkRateEbookError(response.data));
      }
    } catch (error) {
    
      yield put(checkRateEbookError(error));
    }
}

export default function* CommonSaga() {
  yield takeLatest("Common/getRateEbook", handleGetRateEbook);
  yield takeLatest("Common/rateEbook", handleRateToEbook);
  yield takeLatest("Common/checkRateEbook", handleCheckRateEbook);

}
