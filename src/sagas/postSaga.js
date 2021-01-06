import {all,call,takeLatest,put, takeEvery} from "redux-saga/effects"
import {
    ADD_POST_REQUEST,ADD_POST_SUCCESS,ADD_POST_ERROR,
    ADD_COMMENT_REQUEST,ADD_COMMENT_SUCCESS,ADD_COMMENT_ERROR,
    REMOVE_POST_REQUEST,REMOVE_POST_SUCCESS,REMOVE_POST_ERROR,
} from "../reducers/postReducer"

function* addPost(action){//{data:{title,description,key,name}}
    try{
        // const result = yield call addPostApi(action.data);
        yield put({
            type:ADD_POST_SUCCESS,
            data:action.data,
        })
    } catch(err){
        yield put({
            type:ADD_POST_ERROR,
            data:err.response.data
        })
    }
}

function* addComment(action){//{data:{postId,user:{id,name},description}}
    try{
        // const result = yield call addPostApi(action.data);
        yield put({
            type:ADD_COMMENT_SUCCESS,
            data:action.data,
        })
    } catch(err){
        yield put({
            type:ADD_COMMENT_ERROR,
            data:err.response.data
        })
    }
}

function* removePost(action){//{data:{id}}
    try{
        // const result = yield call addPostApi(action.data);
        yield put({
            type:REMOVE_POST_SUCCESS,
            data:action.data,
        })
    } catch(err){
        yield put({
            type:REMOVE_POST_ERROR,
            data:err.response.data
        })
    }
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST,addPost);
}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST,addComment);
}

function* watchRemovePost(){
    yield takeLatest(REMOVE_POST_REQUEST,removePost);
}

function* postSaga(){
    yield all([
        call(watchAddPost),
        call(watchAddComment),
        call(watchRemovePost),
    ])
}

export default postSaga;