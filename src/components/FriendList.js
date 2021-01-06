import React from 'react';
import {useSelector} from "react-redux"
import FriendListItem from "./FriendListItem"
import {withRouter} from "react-router-dom"

const FriendList = ({history}) => {

    const {me} = useSelector(state=>state.userReducer);
    
    if(!me){
        history.push("/");
        return null;
    }  

    return (
        <div>
            {me.FriendList.map(friend=><FriendListItem  friend={friend}/>)}
        </div>
    )
}

export default withRouter(FriendList);