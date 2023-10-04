import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    rate:{
        rate:{
            size: 0,
            average_rate: 0,
        },
        info:{

        },
        check: {
            _id:"",
            rate:0,
            is_rate: false,
        },

    },
    errors: [],
}

const CommonSlice = createSlice({
    name: "Common",
    initialState,
    reducers: {

        clearStoreCommon(state){
            state.isFetching = false
            state.rate = {
                rate:{
                    size: 0,
                    average_rate: 0,
                },
                info:{
        
                },
                check: {
                    _id:"",
                    rate:0,
                    is_rate: false,
                },
            }, 

            state.errors = []
        },

        //  clear Rate
        clearRateEbook(state){
            state.rate = {
                rate:{
                    size: 0,
                    average_rate: 0,
                },
                info:{
        
                },
                check: {
                    _id:"",
                    rate:0,
                    is_rate: false,
                },
            }
        },

        // get rate by ebook id
        getRateEbook(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getRateEbookSuccess(state, action) {
            state.isFetching = false
            state.errors = []
        },
        getRateEbookError(state, action) {
            state.isFetching = false
            state.errors = action.payload
        },

         // rate to ebook
        rateEbook(state, action) {
            state.isFetching = true
            state.errors = []
        },
        rateEbookSuccess(state, action) {
            state.isFetching = false
            state.errors = []
        },
        rateEbookError(state, action) {
            state.isFetching = false
            state.errors = action.payload
        },


        // check rate ebook
        checkRateEbook(state, action) {
            state.isFetching = true
            state.errors = []
        },
        checkRateEbookSuccess(state, action) {
            state.isFetching = false
            state.rate.check = action.payload
            state.errors = []
        },
        checkRateEbookError(state, action) {
            state.isFetching = false
            state.errors = action.payload
        },


     



}});

// ************************** Action *******************************
export const clearStoreCommon = CommonSlice.actions.clearStoreCommon;

export const clearRateEbook = CommonSlice.actions.clearRateEbook;

export const getRateEbook = CommonSlice.actions.getRateEbook;
export const getRateEbookSuccess = CommonSlice.actions.getRateEbookSuccess;
export const getRateEbookError = CommonSlice.actions.getRateEbookError;

export const rateEbook = CommonSlice.actions.rateEbook;
export const rateEbookSuccess = CommonSlice.actions.rateEbookSuccess;
export const rateEbookError = CommonSlice.actions.rateEbookError;

export const checkRateEbook = CommonSlice.actions.checkRateEbook;
export const checkRateEbookSuccess = CommonSlice.actions.checkRateEbookSuccess;
export const checkRateEbookError = CommonSlice.actions.checkRateEbookError;


// ************************** Store *******************************
export const getCommonSlice = (state:any) => state.common;
export const getRateSlice = (state:any) => state.common.rate;


const CommonReducer = CommonSlice.reducer;
export default CommonReducer;