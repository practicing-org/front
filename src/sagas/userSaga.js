import { all, call, put, takeLatest } from "redux-saga/effects"
import {
    LOG_IN_REQUEST,LOG_IN_SUCCESS,LOG_IN_ERROR,
    LOG_OUT_REQUEST,LOG_OUT_SUCCESS,LOG_OUT_ERROR,
    FRIEND_REQUEST,FRIEND_SUCCESS,FRIEND_ERROR,
    UN_FRIEND_REQUEST,UN_FRIEND_SUCCESS,UN_FRIEND_ERROR,
} from "../reducers/userReducer"
import axios from "axios"

function logInApi(data){
    return axios.post("/api/logIn",data);
}

function* logIn(action){//{data:{id,password}}
    try{
        // const result = yield call(logInApi,action.data);
        const result = {
            ...action.data,
            name:"rsua",
            birthday:"2004-02-25"
        };
        yield put({
            type:LOG_IN_SUCCESS,
            data:result,
        });
    } catch(err){
        yield put({
            type:LOG_IN_ERROR,
            data:err,
        })
    }
}

function* logOut(action){
    try{
        // const result = yield call(logOutApi,action.data);
        yield put({
            type:LOG_OUT_SUCCESS,
        });
    } catch(err){
        yield put({
            type:LOG_OUT_ERROR,
            data:err,
        })
    }
}  

function* friend(action){   // {data:{id,name}}
    try{
        // const result = yield call(logOutApi,action.data);
        yield put({
            type:FRIEND_SUCCESS,
            data:action.data,
        });
    } catch(err){
        yield put({
            type:FRIEND_ERROR,
            data:err,
        })
    }
}  

function* unFriend(action){     // {data:{id}}
    try{
        // const result = yield call(logOutApi,action.data);
        yield put({
            type:UN_FRIEND_SUCCESS,
            data:action.data,
        });
    } catch(err){
        yield put({
            type:UN_FRIEND_ERROR,
            data:err,
        })
    }
}  

function* watchLogIn(){
    yield takeLatest(LOG_IN_REQUEST,logIn);
}

function* watchLogOut(){
    yield takeLatest(LOG_OUT_REQUEST,logOut);
}

function* watchFriend(){
    yield takeLatest(FRIEND_REQUEST,friend);
}

function* watchUnFriend(){
    yield takeLatest(UN_FRIEND_REQUEST,unFriend);
}
 
export default function* userSaga(){
    yield all([
        call(watchLogIn),
        call(watchLogOut),
        call(watchFriend),
        call(watchUnFriend),
    ]);
}