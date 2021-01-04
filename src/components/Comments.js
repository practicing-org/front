import React from 'react';
import Comment from "./Comment"
import CommentForm from "./CommentForm"

function Comments({post}){

    return (
        <div>
            <CommentForm postId={post.id} />
            {post.comments.map(comment=><Comment comment={comment} />)}
        </div>
    )
}

export default Comments;