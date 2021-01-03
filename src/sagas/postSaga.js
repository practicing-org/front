import {all,call,takeLatest,put} from "redux-saga/effects"
import {
    ADD_POST_REQUEST,ADD_POST_SUCCESS,ADD_POST_ERROR,
} from "../reducers/postReducer"

function* addPost(action){//{data:{title,description}}
    try{
        // const result = yield call addPostApi(action.data);
        console.log("success");
        yield put({
            type:ADD_POST_SUCCESS,
            data:action.data,
        })
    } catch(err){
        console.log("error");
        yield put({
            type:ADD_POST_ERROR,
            data:err
        })
    }
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST,addPost);
}

function* postSaga(){
    yield all([
        call(watchAddPost),
    ])
}

export default postSaga;