import { setLocalItem } from "@/utils/helper";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { setNotification } from "../notification/slice";
import {
  apiCommentEbook,
  apiCommentPost,
  apiGetCommentEbook,
  apiGetCommentPost,
} from "./api";
import {
  getEbookComment,
  getEbookCommentError,
  getEbookCommentSuccess,
  getPostComment,
  getPostCommentError,
  getPostCommentSuccess,
  ebookComment,
  ebookCommentError,
  ebookCommentSuccess,
  postComment,
  postCommentError,
  postCommentSuccess,
} from "./slice";

// Ebook

// Ebook
function* handleGetCommentEbook(action: any): Generator<any> {    
    try {
      const response: any = yield call(apiGetCommentEbook, action.payload);
      if (response.success) {
        yield put(getEbookCommentSuccess(response.data));
      } else {
        yield put(getEbookCommentError(response.data));
      }
    } catch (error) {
      yield put(getEbookCommentError(error));
    }
  }

function* handleCommentEbook(action: any): Generator<any> {
    try {
        const response: any = yield call(apiCommentEbook, action.payload);
    
        if (response.success) {
          yield put(ebookCommentSuccess(response.data));
          yield put(getEbookComment(action.payload.ebook_id));
        } else {
          yield put(ebookCommentError(response.data));
        }
      } catch (error) {
      
        yield put(ebookCommentError(error));
      }
}

// post



export default function* CommentSaga() {
  yield takeLatest("Comment/getEbookComment", handleGetCommentEbook);
  yield takeLatest("Comment/ebookComment", handleCommentEbook);
}
