import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isShow:false,
    message:"",
    duration:1000,
    type:"default"
}

const NotificationSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {

        setNotification(state, action) {
            state.isShow = true
            state.message = action.payload.message
            state.duration = 1000
            state.type = action.payload.type 

        },
        
        clearNotification(state) {
            state.isShow = false
            state.message = ""
            state.duration = 1000
            state.type = "default"

        },


}});

// ************************** Action *******************************
export const setNotification = NotificationSlice.actions.setNotification;
export const clearNotification = NotificationSlice.actions.clearNotification;

// ************************** Store *******************************
export const getNotificationSlice = (state:any) => state.notification;

const NotificationReducer = NotificationSlice.reducer;
export default NotificationReducer;