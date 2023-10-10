import AuthReducer from "./features/auth/slice";
import CommentReducer from "./features/comment/slice";
import CommonReducer from "./features/common/slice";
import EbookReducer from "./features/ebook/slice";
import NotificationReducer from "./features/notification/slice";
import PostReducer from "./features/post/slice";

const reducer = {
    auth: AuthReducer,
    notification: NotificationReducer,
    comment: CommentReducer,
    common: CommonReducer,
    post:PostReducer,
    ebook:EbookReducer,
};

export default reducer;