import React,{useCallback} from 'react';
import useInput from "../hooks/useInput"
import styled from "styled-components"
import {useDispatch} from "react-redux";
import {LOG_IN_REQUEST} from "../reducers/userReducer"

const LoginFormStyle = styled.div`
border:1px solid black;
& input{outline:none;border:none;border-bottom:1px solid black;width:100%;height:20px;}
&>form>div{text-align:center;margin:10px;}
&>.id_box{}
&>.password_box{}
&>.submit_box{}
`

const LoginForm = () => {
    const dispatch = useDispatch();
    const [id,setId,onChangeId] = useInput("");
    const [password,setPassword,onChangePassword] = useInput("");

    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        console.log(id,password);
        dispatch({
            type:LOG_IN_REQUEST,
            data:{
                id,
                password,
            }
        })
    },[id,password]);

    return (
        <LoginFormStyle>
            <form onSubmit={onSubmit}>
                <div className="id_box">
                    <input name="login_id" onChange={onChangeId} value={id} />
                </div>
                
                <div className="password_box">
                    <input name="login_password" onChange={onChangePassword} value={password} />
                </div>

                <div className="submit_box">
                    <input className="submitButton" type="submit" value="login"/>
                </div>
            </form>
        </LoginFormStyle>
    )
}

export default LoginForm;