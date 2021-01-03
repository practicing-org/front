import React from 'react';


function Post({post}){

    return (
        <div key={post.postId}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <hr />
        </div>
    )
}

export default Post;