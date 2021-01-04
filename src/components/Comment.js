import React from 'react';

function Comment({comment}){

    return (
        <div>
            <p>name : {comment.user.name}</p>
            <p>{comment.description}</p>
        </div>
    )
}

export default Comment;