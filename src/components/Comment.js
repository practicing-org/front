import React from 'react';

const Comment = ({comment}) => {

    return (
        <div>
            <hr/>
            <p>name : {comment.user.name}</p>
            <p>{comment.description}</p>
            
        </div>
    )
}

export default Comment;