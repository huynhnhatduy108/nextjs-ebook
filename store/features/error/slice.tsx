import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    notiError:{},
    errors: [],
}

const ErrorSlice = createSlice({
    name: "Error",
    initialState,
    reducers: {

        clearStoreNotiError(state){
            state.isFetching = false
            state.notiError={}
            state.errors = []
        },

        // clear ebook Error
        clearNotiError(state){
            state.notiError={}
            state.errors = []
        },

        // create post Error
        notiErrorToEbook(state, action) {
            state.isFetching = true
            state.errors = []
        },
        notiErrorToEbookSuccess(state, action) {
            state.isFetching = false
            state.notiError = action.payload
            state.errors = []
        },
        notiErrorToEbookError(state, action) {
            state.isFetching = false
            state.notiError = {}
            state.errors = action.payload
        },


}});

// ************************** Action *******************************
export const clearStoreError = ErrorSlice.actions.clearStoreNotiError;
export const clearNotiError = ErrorSlice.actions.clearNotiError;


export const notiErrorToEbook = ErrorSlice.actions.notiErrorToEbook;
export const notiErrorToEbookSuccess = ErrorSlice.actions.notiErrorToEbookSuccess;
export const notiErrorToEbookError = ErrorSlice.actions.notiErrorToEbookError;


// ************************** Store *******************************
export const getErrorSlice = (state:any) => state.error;


const ErrorReducer = ErrorSlice.reducer;
export default ErrorReducer;