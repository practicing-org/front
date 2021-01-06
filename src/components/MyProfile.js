import React,{useCallback} from 'react';
import styled from "styled-components"
import {useDispatch,useSelector} from "react-redux"
import {LOG_OUT_REQUEST} from "../reducers/userReducer"

const MyProfileCardStyle = styled.div`
`;

const MyProfile = ({me}) => {//{id,password,name,birthday}
    
    const dispatch = useDispatch();
    const onLogOutClick = useCallback(()=>{
        dispatch({type:LOG_OUT_REQUEST})
    },[]);
    const {posts} = useSelector(state=>state.postReducer);
    return (
        <MyProfileCardStyle>
            
            <div className="first_name"><h1>{me.name[0]}</h1></div>
            <div className="info">
                <ul>
                    <li>아이디:{me.id}</li>
                    <li>비밀번호:{me.password}</li>
                    <li>이름:{me.name}</li>
                    <li>생일:{me.birthday}</li>
                    <li>친구수:{me.FriendList.length}</li>
                    <li>게시글수:{posts.filter(post=>post.authorId === me.key).length}</li>
                </ul>
            </div>
            <div>
                <button onClick={onLogOutClick}>logout</button>
            </div>
        </MyProfileCardStyle>
    )
}

export default MyProfile;