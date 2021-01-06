import produce from "immer"
import shortId from "shortid"

const garen = "https://img.redbull.com/images/c_crop,x_641,y_0,h_717,w_574/c_fill,w_860,h_1075/q_auto,f_auto/redbullcom/2019/08/08/27c7aec0-691f-4800-9cc5-1c8aa6b2fe14/garen-league-of-legends"
const dari = "data:image/jpeg;base64,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"
function mkPost(name,id,title,description,authorId,imgs){
    this.name = name;
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
    posts:[
        new mkPost("가렌^^",shortId.generate(),"데마시아","데마시아가 짱입니다. ^^",1,[{src:garen}]),
        new mkPost("다리충",shortId.generate(),"녹서스","탑간다 :(",12,[{src:dari}])
    ],

    addPostLoading:false,
    addPostDone:false,
    addPostError:null,

    removePostLoading:false,
    removePostDone:false,
    removePostError:null,

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

export const REMOVE_POST_REQUEST = "postReducer/REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "postReducer/REMOVE_POST_SUCCESS";
export const REMOVE_POST_ERROR = "postReducer/REMOVE_POST_ERROR";

function postReducer(state=initialState,action){
    return produce(state,draft=>{
        switch(action.type){
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS://{data:{title,description,key,name}}
                var {title,description,key,name} = action.data;
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.posts.push(new mkPost(name,shortId.generate(),title,description,key,[{src:garen}]));
                break;
            case ADD_POST_ERROR:
                draft.addPostLoading = false;
                draft.addPostError = action.data;
                break;
            
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS://{data:{id}}
                draft.removePostLoading = false;
                draft.removePostDone = true;
                draft.posts = draft.posts.filter(post=>post.id !== action.data.id);
                break;
            case REMOVE_POST_ERROR:
                draft.removePostLoading = false;
                draft.removePostError = action.data;
                break;

            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS://{data:{postId,user:{id,name},description}}
                var {postId,user,description} = action.data;
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