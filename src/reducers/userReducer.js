import produce from "immer"
import shortid from "shortid";
const initialState = {
    me:null,

    logInLoading:false,
    logInDone:false,
    logInError:null,

    logOutLoading:false,
    logOutDone:false,
    logOutError:null,

    friendLoading:false,
    friendDone:false,
    friendError:null,

    unFriendLoading:false,
    unFriendDone:false,
    unFriendError:null,
}

export const LOG_IN_REQUEST = "userReducer/LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "userReducer/LOG_IN_SUCCESS";
export const LOG_IN_ERROR = "userReducer/LOG_IN_ERROR"; 

export const LOG_OUT_REQUEST = "userReducer/LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "userReducer/LOG_OUT_SUCCESS";
export const LOG_OUT_ERROR = "userReducer/LOG_OUT_ERROR"; 

export const FRIEND_REQUEST = "userReducer/FRIEND_REQUEST";
export const FRIEND_SUCCESS = "userReducer/FRIEND_SUCCESS";
export const FRIEND_ERROR = "userReducer/FRIEND_ERROR"; 

export const UN_FRIEND_REQUEST = "userReducer/UN_FRIEND_REQUEST";
export const UN_FRIEND_SUCCESS = "userReducer/UN_FRIEND_SUCCESS";
export const UN_FRIEND_ERROR = "userReducer/UN_FRIEND_ERROR"; 

const dummyData = data=>{   // data:{id,password,key}
    return {
        ...data,
        FriendList:[
            {id:1,name:"가렌^^"},
            {id:2,name:"lemon"}
        ]
    }
}

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
            draft.me = dummyData(action.data);
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
            
            case FRIEND_REQUEST:
            draft.friendLoading = true;
            break;
            case FRIEND_SUCCESS:    // {data:{id,name}}
            draft.friendLoading = false;
            draft.friendDone = true;
            draft.me.FriendList.push(action.data);
            break;
            case FRIEND_ERROR:
            draft.friendLoading = false;
            draft.friendError = action.data;
            break;

            case UN_FRIEND_REQUEST:
            draft.unFriendLoading = true;
            break;
            case UN_FRIEND_SUCCESS:    // {data:{id}}
            draft.unFriendLoading = false;
            draft.unFriendDone = true;
            draft.me.FriendList = draft.me.FriendList.filter(friend=>friend.id !== action.data.id);
            break;
            case UN_FRIEND_ERROR:
            draft.unFriendLoading = false;
            draft.unFriendError = action.data;
            break;

            default :
            break;
        }
    })
}

export default userReducer;