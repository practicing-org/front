import produce from "immer"
import shortId from "shortid"

const garen = "https://img.redbull.com/images/c_crop,x_641,y_0,h_717,w_574/c_fill,w_860,h_1075/q_auto,f_auto/redbullcom/2019/08/08/27c7aec0-691f-4800-9cc5-1c8aa6b2fe14/garen-league-of-legends"
function mkPost(id,title,description,authorId,imgs){
    this.id = id;
    this.title = title;
    this.description = description;
    this.authorId = authorId; 
    this.imgs = imgs;
    this.comments = [];
}
// post:{
//     id,title,description,authorId,
//     comment:[{
//         user:{
//             id,nickname
//         },
//         description
//     }],
//     imgs:[
//         {src}
//     ]
// }

function mkComment(postId,user,description){
    this.postId = postId;
    this.user = user;
    this.description = description;
}
// comment:{
//     postId,
//     user:{
//         id,
//         name,
//     },
//     description
// }

const initialState = {
    posts:[new mkPost(shortId.generate(),"first","very nice",1,[{src:garen}])],

    addPostLoading:false,
    addPostDone:false,
    addPostError:null,

    addCommentLoading:false,
    addCommentDone:false,
    addCommentError:null,
}

export const ADD_POST_REQUEST = "postReducer/ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "postReducer/ADD_POST_SUCCESS";
export const ADD_POST_ERROR = "postReducer/ADD_POST_ERROR";

export const ADD_COMMENT_REQUEST = "postReducer/ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "postReducer/ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_ERROR = "postReducer/ADD_COMMENT_ERROR";

function postReducer(state=initialState,action){
    return produce(state,draft=>{
        switch(action.type){
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS://{data:{title,description,key}}
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.posts.push(new mkPost(shortId.generate(),action.data.title,action.data.description,action.data.key,[{src:garen}]));
                break;
            case ADD_POST_ERROR:
                draft.addPostLoading = false;
                draft.addPostError = action.data;
                break;
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS://{data:{postId,user:{id,name},description}}
                const {postId,user,description} = action.data;
                console.log(postId,user,description);
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                const post = draft.posts.find(post=>post.id === postId);
                console.log(draft.posts[0].description,post);
                post.comments.push(new mkComment(postId,user,description))
                break;
            case ADD_COMMENT_ERROR:
                draft.addCommentLoading = false;
                draft.addCommentError = action.data;
                break;
            default:
                break;
        }
    })
}

export default postReducer;