import AuthReducer from "./features/auth/slice";
import CommentReducer from "./features/comment/slice";
import NotificationReducer from "./features/notification/slice";

const reducer = {
    auth: AuthReducer,
    notification: NotificationReducer,
    comment: CommentReducer,

};

export default reducer;