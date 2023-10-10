import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    data: null,
    listPostPaging: {
        items:[],
        page_size:20,
        page:1, 
        total_page:0,
        total_record:0,
    },
    listPostRelate:[],
    detailPost: {},
    errors: null,
}

const PostSlice = createSlice({
    name: "Post",
    initialState,
    reducers: {

        clearStorePost(state){
            state.isFetching = false
            state.data = null
            state.listPostPaging ={
                items:[],
                page_size:20,
                page:1, 
                total_page:0,
                total_record:0,
            }
            state.listPostRelate = []
            state.detailPost = {}
            state.errors = null
        },

        clearListPostPaging(state){
            state.listPostPaging = {
                items:[],
                page_size:20,
                page:1, 
                total_page:0,
                total_record:0,
            }
        },


        clearListPostRelate(state){
            state.listPostRelate = []
        },

        clearDetailPost(state){
            state.detailPost = {}
        },

        // list
        getListPostPaging(state, action) {
            state.isFetching = true
            state.errors = null
        },
        getListPostPagingSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.listPostPaging = action.payload
            state.errors = null
        },
        getListPostPagingError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // get list post relate
        getListPostRelate(state, action) {
            state.isFetching = true
            state.errors = null
        },
        getListPostRelateSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.listPostPaging = action.payload
            state.errors = null
        },
        getListPostRelateError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },


        // detail
        getDetailPost(state, action) {
            state.isFetching = true
            state.errors = null
        },
        getDetailPostSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload.data
            state.detailPost = action.payload
            state.errors = null
        },
        getDetailPostError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // create
        createPost(state, action) {
            state.isFetching = true
            state.errors = null
        },
        createPostSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = null
        },
        createPostError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // update
        updatePost(state, action) {
            state.isFetching = true
            state.errors = null
        },
        updatePostSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = null
        },
        updatePostError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

        // delete
        deletePost(state, action) {
            state.isFetching = true
            state.errors = null
        },
        deletePostSuccess(state, action) {
            state.isFetching = false
            state.data = action.payload
            state.errors = null
        },
        deletePostError(state, action) {
            state.isFetching = false
            state.data =null
            state.errors = action.payload
        },

}});

// ************************** Action *******************************
export const clearStorePost = PostSlice.actions.clearStorePost;
export const clearDetailPost = PostSlice.actions.clearDetailPost;
export const clearListPostPaging = PostSlice.actions.clearListPostPaging;

export const getListPostPaging = PostSlice.actions.getListPostPaging;
export const getListPostPagingSuccess = PostSlice.actions.getListPostPagingSuccess;
export const getListPostPagingError = PostSlice.actions.getListPostPagingError;

export const getListPostRelate = PostSlice.actions.getListPostRelate;
export const getListPostRelateSuccess = PostSlice.actions.getListPostRelateSuccess;
export const getListPostRelateError = PostSlice.actions.getListPostRelateError;

export const getDetailPost = PostSlice.actions.getDetailPost;
export const getDetailPostSuccess = PostSlice.actions.getDetailPostSuccess;
export const getDetailPostError = PostSlice.actions.getDetailPostError;

export const createPost = PostSlice.actions.createPost;
export const createPostSuccess = PostSlice.actions.createPostSuccess;
export const createPostError = PostSlice.actions.createPostError;

export const updatePost = PostSlice.actions.updatePost;
export const updatePostSuccess = PostSlice.actions.updatePostSuccess;
export const updatePostError = PostSlice.actions.updatePostError;

export const deletePost = PostSlice.actions.deletePost;
export const deletePostSuccess = PostSlice.actions.deletePostSuccess;
export const deletePostError = PostSlice.actions.deletePostError;

// ************************** Store *******************************
export const getPostSlice = (state:any) => state.post;
export const getPostListPagingSlice = (state:any) => state.post.listPostPaging;
export const getListPostRelateSlice = (state:any) => state.post.listPostRelate;

const PostReducer = PostSlice.reducer;
export default PostReducer;