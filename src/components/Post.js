import React,{useState,useCallback} from 'react';
import styled from "styled-components"
import {useSelector} from "react-redux"
import Comments from "./Comments";

const PostStyle = styled.div`
border:1px solid black;
&>.postHeader{}
&>.postHeader>h2{padding:10px;display:flex;justify-content:center;align-items:center;}
&>.postBody{}
&>.postBody>.postImgs{height:300px;background:black;text-align:center;}
&>.postBody>.postImgs>img{height:100%;}
&>.postBody>.postDescription{}
&>.postBody>.postDescription>p{padding:20px;font-weight:bold;}
` 


function Post({post}){
    const {me} = useSelector(state=>state.userReducer);
    const [isOpenCommnet,setIsOpenComment] = useState(false);

    const onToggleComment = useCallback(()=>{
        setIsOpenComment((prev)=>!prev);
    },[]);

    return (
        <PostStyle key={post.postId}>
            <div className="postHeader">
                <h2>{post.title}</h2>
            </div>
            <div className="postBody">
                <div className="postImgs">
                   {/* <PostCardImgs imgs={post.imgs} /> */}
                   <img src={post.imgs[0].src} alt=""/>
                </div>
                <div className="postDescription">
                    <p>{post.description}</p>
                </div>
                <div className="postButtons">
                {(me&&me.key === post.authorId)?(
                <>
                    <button>remove</button>
                    <button>update</button>
                </>):<button>신고하기</button>}
                </div>
                {me&&<button onClick={onToggleComment}>comment</button>}
                {isOpenCommnet && <Comments  post={post}/>}      
            </div>
        </PostStyle>
    )
}

export default Post;