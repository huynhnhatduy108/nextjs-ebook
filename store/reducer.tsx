import AuthReducer from "./features/auth/slice";
import NotificationReducer from "./features/notification/slice";

const reducer = {
    auth: AuthReducer,
    notification: NotificationReducer,

};

export default reducer;