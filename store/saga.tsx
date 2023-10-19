import {all} from "redux-saga/effects";
import AuthSaga from "./features/auth/saga";
import CategorySaga from "./features/category/saga";
import CommentSaga from "./features/comment/saga";
import CommonSaga from "./features/common/saga";
import EbookSaga from "./features/ebook/saga";
import ErrorSaga from "./features/error/saga";
import PostSaga from "./features/post/saga";

export default function* rootSaga() {
    yield all([
        AuthSaga(),
        CommentSaga(),
        CommonSaga(),
        PostSaga(),
        EbookSaga(),
        ErrorSaga(),
        CategorySaga(),
    ]);
}