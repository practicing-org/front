
import './App.css';
import React from "react"
import Header from "./components/Header"
import {Route,Switch} from "react-router-dom"
import Home from "./components/Home"
import Profile from "./components/Profile"
import FriendList from "./components/FriendList"
import styled from "styled-components"
import LoginForm from "./components/LoginForm"
import {useSelector} from "react-redux";
import MyProfile from "./components/MyProfile"

const BodyStyle = styled.div`
display:flex;
&>.body_child{border:1px solid black;}
&>#left_side{flex-grow:1;}
&>#main{flex-grow:5;}
&>#right_side{flex-grow:1;}
`

const App = () => {
  
  const {me} = useSelector(state=>state.userReducer);

  return (
    <div className="App">
      <Header />
      <BodyStyle>
            <div className="body_child" id="left_side">
                {me?<MyProfile me={me} />:<LoginForm />}
            </div>
            <div className="body_child" id="main">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/Profile" component={Profile} exact/>
                    <Route path="/FriendList" component={FriendList} exact/>
                    <Route render={({location})=>(
                        <h1>{location.pathname} is not fouded.</h1>
                    )} />
                </Switch>
            </div>
            <div className="body_child" id="right_side">
                <h2>right_side</h2>
            </div>
        </BodyStyle>
    </div>
  );
};

export default App;
