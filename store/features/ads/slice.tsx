import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isShow:false,
    content:"",
    duration:1000,
    type:"default"
}

const AdsSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {

        setAds(state, action) {
            state.isShow = true
            state.content = action.payload.message
            state.duration = 1000
            state.type = action.payload.type 

        },
        
        clearAds(state) {
            state.isShow = false
            state.content = ""
            state.duration = 1000
            state.type = "default"

        },


}});

// ************************** Action *******************************
export const setAds = AdsSlice.actions.clearAds;
export const clearAds = AdsSlice.actions.clearAds;

// ************************** Store *******************************
export const getAdsSlice = (state:any) => state.ads;

const AdsReducer = AdsSlice.reducer;
export default AdsReducer;