import React,{useCallback,useEffect} from 'react';
import useInput from "../hooks/useInput"
import {useDispatch,useSelector} from "react-redux"
import {ADD_POST_REQUEST} from "../reducers/postReducer"

function PostForm(){
    const [title,setTitle,onChangeTitle] = useInput("");
    const [description,setDescription,onChangeDescription] = useInput("");
    const dispatch = useDispatch();
    const {me} = useSelector(state=>state.userReducer);
    const {addPostLoading,addPostDone} = useSelector(state=>state.postReducer);
    
    //======================== useEffect 안됌? ==============================
    // useEffect(()=>{
    //     if(addPostDone){
    //         setTitle("");
    //         setDescription("");
    //     }
    // },[addPostDone])

    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        dispatch({
            // type:ADD_POST_REQUEST,
            type:ADD_POST_REQUEST,
            data:{
                title,
                description,
                key:me.key,
            }
        })
    },[title,description]);

    return (
        <div>
            <form onSubmit={onSubmit} action="">
                <div>
                    <input name="title" type="text" onChange={onChangeTitle} value={title}/>
                </div>
                <div>
                    <textarea name="description" onChange={onChangeDescription} id="" cols="30" rows="10">{description}</textarea>
                </div>
                <div><input type="submit" value={addPostLoading?"loding...":"addPost"}/></div>
            </form>
        </div>
    )
}

export default PostForm;