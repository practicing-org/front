import React,{useCallback} from 'react';
import styled from "styled-components"
import {useDispatch} from "react-redux"
import {LOG_OUT_REQUEST} from "../reducers/userReducer"

const MyProfileCardStyle = styled.div`
`;

function MyProfile({me}){//{id,password,name,birthday}
    
    const dispatch = useDispatch();
    const onLogOutClick = useCallback(()=>{
        dispatch({type:LOG_OUT_REQUEST})
    },[]);

    return (
        <MyProfileCardStyle>
            
            <div className="first_name"><h1>{me.name[0]}</h1></div>
            <div className="info">
                <ul>
                    <li>{me.id}</li>
                    <li>{me.password}</li>
                    <li>{me.name}</li>
                    <li>{me.birthday}</li>
                </ul>
            </div>
            <div>
                <button onClick={onLogOutClick}>logout</button>
            </div>
        </MyProfileCardStyle>
    )
}

export default MyProfile;