import produce from "immer"
const initialState = {
    me:null,

    logInLoading:false,
    logInDone:false,
    logInError:null,

    logOutLoading:false,
    logOutDone:false,
    logOutError:null,
}

export const LOG_IN_REQUEST = "userReducer/LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "userReducer/LOG_IN_SUCCESS";
export const LOG_IN_ERROR = "userReducer/LOG_IN_ERROR"; 

export const LOG_OUT_REQUEST = "userReducer/LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "userReducer/LOG_OUT_SUCCESS";
export const LOG_OUT_ERROR = "userReducer/LOG_OUT_ERROR"; 

function userReducer(state=initialState,action){
    return produce(state,draft=>{
        switch(action.type){
            case LOG_IN_REQUEST:
            draft.logInLoading = true;
            break;
            case LOG_IN_SUCCESS://{data:{id,password,key}}
            action.data.key = "rsua";
            draft.logInLoading = false;
            draft.logInDone = true;
            draft.me = action.data;
            break;
            case LOG_IN_ERROR:
            draft.logInLoading = false;
            draft.logInError = action.data;
            break;
            case LOG_OUT_REQUEST:
            draft.logOutLoading = true;
            break;
            case LOG_OUT_SUCCESS:
            draft.logOutLoading = false;
            draft.logOutDone = true;
            draft.me = null;
            break;
            case LOG_OUT_ERROR:
            draft.logOutLoading = false;
            draft.logOutError = action.data;
            break;
            
            default :
            break;
        }
    })
}

export default userReducer;