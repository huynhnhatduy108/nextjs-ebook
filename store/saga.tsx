import {all} from "redux-saga/effects";
import AuthSaga from "./features/auth/saga";
import CommentSaga from "./features/comment/saga";
import CommonSaga from "./features/common/saga";
import PostSaga from "./features/post/saga";

export default function* rootSaga() {
    yield all([
        AuthSaga(),
        CommentSaga(),
        CommonSaga(),
        PostSaga(),
    ]);
}