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
function* handleGetCommentPost(action: any): Generator<any> {    
  try {
    const response: any = yield call(apiGetCommentPost, action.payload);
    if (response.success) {
      yield put(getPostCommentSuccess(response.data));
    } else {
      yield put(getPostCommentError(response.data));
    }
  } catch (error) {
    yield put(getPostCommentError(error));
  }
}

function* handleCommentPost(action: any): Generator<any> {
  try {
      const response: any = yield call(apiCommentPost, action.payload);
  
      if (response.success) {
        yield put(postCommentSuccess(response.data));
        yield put(getPostComment(action.payload.post_id));
      } else {
        yield put(postCommentError(response.data));
      }
    } catch (error) {
    
      yield put(postCommentError(error));
    }
}



export default function* CommentSaga() {
  yield takeLatest("Comment/getEbookComment", handleGetCommentEbook);
  yield takeLatest("Comment/ebookComment", handleCommentEbook);

  yield takeLatest("Comment/getPostComment", handleGetCommentPost);
  yield takeLatest("Comment/postComment", handleCommentPost);
}
