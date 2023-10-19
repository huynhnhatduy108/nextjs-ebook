import { setLocalItem } from "@/utils/helper";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { setNotification } from "../notification/slice";
import {
  apiNotiErrorToEbook
} from "./api";
import {
 notiErrorToEbook,
 notiErrorToEbookSuccess,
 notiErrorToEbookError
} from "./slice";


function* handleNotiErrorToEbook(action: any): Generator<any> {
    try {
        const response: any = yield call(apiNotiErrorToEbook, action.payload);
    
        if (response.success) {
          yield put(notiErrorToEbookSuccess(response.data));
          yield put(setNotification({message:"Cảm ơn bạn đã gửi thông báo", type: "success"}));

        } else {
          yield put(notiErrorToEbookError(response.data));
        }
      } catch (error) {
      
        yield put(notiErrorToEbookError(error));
      }
}



export default function* ErrorSaga() {
  yield takeLatest("Error/notiErrorToEbook", handleNotiErrorToEbook);

}
