import AuthReducer from "./features/auth/slice";
import CommentReducer from "./features/comment/slice";
import CommonReducer from "./features/common/slice";
import NotificationReducer from "./features/notification/slice";

const reducer = {
    auth: AuthReducer,
    notification: NotificationReducer,
    comment: CommentReducer,
    common: CommonReducer,
};

export default reducer;