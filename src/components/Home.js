import React from 'react';
import {useSelector} from "react-redux"
import Post from "./Post"
import PostForm from "./PostForm"

const Home = () => {
    const {posts} = useSelector(state=>state.postReducer);
    const {me} = useSelector(state=>state.userReducer);
    


    return (
        <div>
            {me&&<PostForm />}
            {posts.map(post=><Post post={post}/>)}
        </div>
    )
}

export default Home;