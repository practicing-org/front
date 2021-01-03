import produce from "immer"
import shortId from "shortid"


function mkPost(postId,title,description,authorId){
    this.postId = postId;
    this.title = title;
    this.description = description;
    this.authorId = authorId; 
}

const initialState = {
    posts:[new mkPost(shortId.generate(),"first","very nice",1)],

    addPostLoading:false,
    addPostDone:false,
    addPostError:null,
}

export const ADD_POST_REQUEST = "postReducer/ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "postReducer/ADD_POST_REQUEST";
export const ADD_POST_ERROR = "postReducer/ADD_POST_ERROR";

function postReducer(state=initialState,action){
    return produce(state,draft=>{
        switch(action.type){
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                break;
            case ADD_POST_SUCCESS://{data:{title,description}}
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.posts.push(new mkPost(shortId.generate(),action.data.title,action.data.description,1));
                break;
            case ADD_POST_ERROR:
                draft.addPostLoading = false;
                draft.addPostError = action.data;
                break;
            default:
                break;
        }
    })
}

export default postReducer;