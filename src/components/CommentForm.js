import React,{useCallback,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import useInput from "../hooks/useInput"
import {ADD_COMMENT_REQUEST} from "../reducers/postReducer"

const CommentForm = ({postId}) => {
    const dispatch = useDispatch();
    const {me} = useSelector(state=>state.userReducer);
    const {addCommentDone} = useSelector(state=>state.postReducer);
    const [description,setDescription,onChangeDescription] = useInput("");

    useEffect(()=>{
        if(addCommentDone){
            setDescription("");
        }
    },[addCommentDone])

    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        console.log(description,me.key,postId);
        dispatch({
            type:ADD_COMMENT_REQUEST,
            data:{
                postId,
                user:{
                    id:me.key,
                    name:me.name,
                },
                description
            }
        })
    },[description])

    return (
        <div>
            <form onSubmit={onSubmit} action="">
                <div>
                    <input name="description" onChange={onChangeDescription} value={description} type="text"/>
                </div>
                <div>
                    <input type="submit" value="comment" />
                </div>
            </form>
        </div>
    )
}

export default CommentForm;