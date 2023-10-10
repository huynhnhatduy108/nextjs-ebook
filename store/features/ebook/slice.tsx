import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    data: null,
    listEbookPaging: {
        items:[],
        page_size:20,
        page:1, 
        total_page:0,
        total_record:0,
    },
    listEbookRelate:[],
    detailEbook: {},
    errors: null,
}

const EbookSlice = createSlice({
    name: "Ebook",
    initialState,
    reducers: {

        clearStoreEbook(state){
            state.isFetching = false
            state.data = null
            state.listEbookPaging ={
                items:[],
                page_size:20,
                page:1, 
                total_page:0,
                total_record:0,
            }
            state.listEbookRelate = []
            state.detailEbook = {}
            state.errors = null
        },

        clearListEbookPaging(state){
            state.listEbookPaging = {
                items:[],
                page_size:20,
                page:1, 
                total_page:0,
                total_record:0,
            }
        },


        clearListEbookRelate(state){
            state.listEbookRelate = []
        },

        clearDetailEbook(state){
            state.detailEbook = {}
        },

        // list
        getListEbookPaging(state, action) {
            state.isFetching = true
            state.errors = null
        },
        getListEbookPagingSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.listEbookPaging = action.payload
            state.errors = null
        },
        getListEbookPagingError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // get list Ebook relate
        getListEbookRelate(state, action) {
            state.isFetching = true
            state.errors = null
        },
        getListEbookRelateSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.listEbookPaging = action.payload
            state.errors = null
        },
        getListEbookRelateError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },



}});

// ************************** Action *******************************
export const clearStoreEbook = EbookSlice.actions.clearStoreEbook;
export const clearDetailEbook = EbookSlice.actions.clearDetailEbook;
export const clearListEbookPaging = EbookSlice.actions.clearListEbookPaging;

export const getListEbookPaging = EbookSlice.actions.getListEbookPaging;
export const getListEbookPagingSuccess = EbookSlice.actions.getListEbookPagingSuccess;
export const getListEbookPagingError = EbookSlice.actions.getListEbookPagingError;

export const getListEbookRelate = EbookSlice.actions.getListEbookRelate;
export const getListEbookRelateSuccess = EbookSlice.actions.getListEbookRelateSuccess;
export const getListEbookRelateError = EbookSlice.actions.getListEbookRelateError;


// ************************** Store *******************************
export const getEbookSlice = (state:any) => state.ebook;
export const getEbookListPagingSlice = (state:any) => state.ebook.listEbookPaging;
export const getListEbookRelateSlice = (state:any) => state.ebook.listEbookRelate;

const EbookReducer = EbookSlice.reducer;
export default EbookReducer;