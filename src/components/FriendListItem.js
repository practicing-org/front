import React from 'react';

const FriendListItem = ({friend}) => {

    return (
        <div>
            <div>id : {friend.id}</div>
            <div>name : {friend.name}</div>
            <hr/>
        </div>
    )
}

export default FriendListItem;