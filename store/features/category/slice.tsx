import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    listCategoryPaging: {
        items:[],
        page_size:20,
        page:1, 
        total_page:0,
        total_record:0,
    },
    listCategoryFull:[],
    detailCategory: {},
    errors: null,
}

const CategorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {

        clearStoreCategory(state){
            state.isFetching = false
            state.listCategoryPaging ={
                items:[],
                page_size:20,
                page:1, 
                total_page:0,
                total_record:0,
            }
            state.listCategoryFull = []
            state.detailCategory = {}
            state.errors = null
        },

        clearListCategoryPaging(state){
            state.listCategoryPaging = {
                items:[],
                page_size:20,
                page:1, 
                total_page:0,
                total_record:0,
            }
        },


        clearListCategoryFull(state){
            state.listCategoryFull = []
        },

        clearDetailCategory(state){
            state.detailCategory = {}
        },

        // list
        getListCategoryPaging(state, action) {
            state.isFetching = true
            state.errors = null
        },
        getListCategoryPagingSuccess(state, action) {
            state.isFetching = false
            state.listCategoryPaging = action.payload
            state.errors = null
        },
        getListCategoryPagingError(state, action) {
            state.isFetching = false
            state.errors = action.payload
        },

        // get list Category full
        getListCategoryFull(state, action) {
            state.isFetching = true
            state.errors = null
        },
        getListCategoryFullSuccess(state, action) {
            state.isFetching = false
            state.listCategoryFull = action.payload
            state.errors = null
        },
        getListCategoryFullError(state, action) {
            state.isFetching = false
            state.errors = action.payload
        },


}});

// ************************** Action *******************************
export const clearStoreCategory = CategorySlice.actions.clearStoreCategory;
export const clearDetailCategory = CategorySlice.actions.clearDetailCategory;
export const clearListCategoryPaging = CategorySlice.actions.clearListCategoryPaging;

export const getListCategoryPaging = CategorySlice.actions.getListCategoryPaging;
export const getListCategoryPagingSuccess = CategorySlice.actions.getListCategoryPagingSuccess;
export const getListCategoryPagingError = CategorySlice.actions.getListCategoryPagingError;

export const getListCategoryFull = CategorySlice.actions.getListCategoryFull;
export const getListCategoryFullSuccess = CategorySlice.actions.getListCategoryFullSuccess;
export const getListCategoryFullError = CategorySlice.actions.getListCategoryFullError;


// ************************** Store *******************************
export const getCategorySlice = (state:any) => state.category;
export const getCategoryListPagingSlice = (state:any) => state.category.listCategoryPaging;
export const getListCategoryFullSlice = (state:any) => state.category.listCategoryFull;

const CategoryReducer = CategorySlice.reducer;
export default CategoryReducer;