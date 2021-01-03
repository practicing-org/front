import React from 'react';
import {useSelector} from "react-redux"
import Post from "./Post"
import PostForm from "./PostForm"

function Home(){
    const {posts} = useSelector(state=>state.postReducer);
    return (
        <div>
            <PostForm />
            {posts.map(post=><Post post={post} />)}
        </div>
    )
}

export default Home;