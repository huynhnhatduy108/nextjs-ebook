import {all} from "redux-saga/effects";
import AuthSaga from "./features/auth/saga";
import CommentSaga from "./features/comment/saga";

export default function* rootSaga() {
    yield all([
        AuthSaga(),
        CommentSaga(),
    ]);
}