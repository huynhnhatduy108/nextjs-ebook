import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    ebook: {
        list:[],
        comment:{}
    },  
    post: {
        list:[],
        comment:{}
    },
    errors: [],
}

const CommentSlice = createSlice({
    name: "Comment",
    initialState,
    reducers: {

        clearStoreComment(state){
            state.isFetching = false
            state.ebook = {
                list:[],
                comment:{}
            }, 
            state.post =  {
                list:[],
                comment:{}
            },
            state.errors = []
        },

        // clear ebook comment
        clearEbookComment(state){
            state.ebook =  {
                list:[],
                comment:{}
            },
            state.errors = []
        },

        // get list comment by ebook id
        getEbookComment(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getEbookCommentSuccess(state, action) {
            state.isFetching = false
            state.ebook.list = action.payload
            state.errors = []
        },
        getEbookCommentError(state, action) {
            state.isFetching = false
            state.errors = action.payload
        },

        // create ebook comment  
        ebookComment(state, action) {
            state.isFetching = true
            state.errors = []
        },
        ebookCommentSuccess(state, action) {
            state.isFetching = false
            state.ebook.comment = action.payload
            state.errors = []
        },
        ebookCommentError(state, action) {
            state.isFetching = false
            state.errors = action.payload
        },



        clearPostComment(state){
            state.post =  {
                list:[],
                comment:{}
            },
            state.errors = []
        },

         // get list comment by ebook id
         getPostComment(state, action) {
            state.isFetching = true
            state.errors = []
        },
        getPostCommentSuccess(state, action) {
            state.isFetching = false
            state.post.list = action.payload
            state.errors = []
        },
        getPostCommentError(state, action) {
            state.isFetching = false
            state.errors = action.payload
        },

        // create post comment
        postComment(state, action) {
            state.isFetching = true
            state.errors = []
        },
        postCommentSuccess(state, action) {
            state.isFetching = false
            state.post.comment = action.payload
            state.errors = []
        },
        postCommentError(state, action) {
            state.isFetching = false
            state.post.comment = {}
            state.errors = action.payload
        },





}});

// ************************** Action *******************************
export const clearStoreComment = CommentSlice.actions.clearStoreComment;

export const clearEbookComment = CommentSlice.actions.clearEbookComment;
export const ebookComment = CommentSlice.actions.ebookComment;
export const ebookCommentSuccess = CommentSlice.actions.ebookCommentSuccess;
export const ebookCommentError = CommentSlice.actions.ebookCommentError;

export const getEbookComment = CommentSlice.actions.getEbookComment;
export const getEbookCommentSuccess = CommentSlice.actions.getEbookCommentSuccess;
export const getEbookCommentError = CommentSlice.actions.getEbookCommentError;

export const clearpostComment = CommentSlice.actions.clearPostComment;
export const postComment = CommentSlice.actions.postComment;
export const postCommentSuccess = CommentSlice.actions.postCommentSuccess;
export const postCommentError = CommentSlice.actions.postCommentError;

export const getPostComment = CommentSlice.actions.getPostComment;
export const getPostCommentSuccess = CommentSlice.actions.getPostCommentSuccess;
export const getPostCommentError = CommentSlice.actions.getPostCommentError;


// ************************** Store *******************************
export const getCommentSlice = (state:any) => state.comment;
export const getEbookCommentSlice = (state:any) => state.comment.ebook;
export const getPostCommentSlice = (state:any) => state.comment.post;


const CommentReducer = CommentSlice.reducer;
export default CommentReducer;