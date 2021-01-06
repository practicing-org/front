import React,{useState,useCallback} from 'react';
import styled from "styled-components"
import {useSelector,useDispatch} from "react-redux"
import Comments from "./Comments";
import {FRIEND_REQUEST,UN_FRIEND_ERROR, UN_FRIEND_REQUEST} from "../reducers/userReducer"
import { REMOVE_POST_REQUEST } from '../reducers/postReducer';

const PostStyle = styled.div`
border:1px solid black;
&>.postHeader{}
&>.postHeader>h2{padding:20px;display:flex;justify-content:center;align-items:center;}
&>.postBody{}
&>.postBody>.postImgs{height:300px;background:black;text-align:center;}
&>.postBody>.postImgs>img{height:100%;}
&>.postBody>.postDescription{}
&>.postBody>.postDescription>p{padding:10px;font-weight:bold;}
` 


const Post = ({post}) => {
    const {me} = useSelector(state=>state.userReducer);
    const [isOpenCommnet,setIsOpenComment] = useState(false);
    let isFriend;
    const dispatch = useDispatch();

    const onToggleComment = useCallback(()=>{
        setIsOpenComment((prev)=>!prev);
    },[]);

    const onClickFriend = useCallback(()=>{
        dispatch({
            type:FRIEND_REQUEST,
            data:{
                id:post.authorId,
                name:post.name,
            }
        })
    },[])

    const onClickUnFriend = useCallback(()=>{
        dispatch({
            type:UN_FRIEND_REQUEST,
            data:{
                id:post.authorId,
            }
        })
    },[])

    const onClickRemovePost = useCallback(()=>{
        dispatch({
            type:REMOVE_POST_REQUEST,
            data:{id:post.id}
        })
    },[])

    if(me){
        isFriend = me.FriendList.find(friend => friend.id === post.authorId);
    }

    return (
        <PostStyle key={post.postId}>
            <div className="postHeader">
                <h2>title : {post.title}</h2>
            </div>
            <div className="postBody">
                <div className="postImgs">
                   {/* <PostCardImgs imgs={post.imgs} /> */}
                   <img src={post.imgs[0].src} alt=""/>
                </div>
                <div className="postDescription">
                    {isFriend && (<><h3>친구게시물입니다.</h3><hr /></>)}
                    <p>name : {post.name}</p><hr/>
                    <p>description : {post.description}</p><hr/>
                </div>
                <div className="postButtons">
                {(me&&me.key === post.authorId)?(
                <>
                    <button onClick={onClickRemovePost}>remove</button>
                    <button>update</button>
                </>):me && (<>
                <button>신고하기</button>
                {isFriend?<button onClick={onClickUnFriend}>친구끊기</button>:<button onClick={onClickFriend}>친구하기</button>}
                </>
                )}
                </div>
                {me&&<button onClick={onToggleComment}>comment</button>}
                {isOpenCommnet && <Comments  post={post}/>}      
            </div>
        </PostStyle>
    )
}

export default Post;