import React from 'react';
import {Link} from "react-router-dom"
import styled from "styled-components"

const HeaderStyle = styled.div`
border-bottom:2px solid gray;position:fixed; top:0; left:0; width:100%; height:56px; display:flex; flex-direction:row; padding:3px; 

& ul{display:flex;height:100%;}
& li{list-style:none;text-align:center;}
& a{flex-grow:1;height:100%;display:flex;transition:all .5s;justify-content:center;align-items:center;}

&>.header_child{height:100%;}
&>.header_child>ul{display:flex;}

&>#header_logo{flex-grow:2;}

&>#header_main{flex-grow:7;}
&>#header_main>ul{margin:0 auto;width:50%;justify-content:center;}
&>#header_main>ul>a{flex-grow:1;border-radius:10px;}
&>#header_main>ul>a:hover{background:#eee;}

&>#header_aside{flex-grow:1;}
&>#header_aside>ul>a{}

.cls-1 {
    fill: #fff;
    stroke: #231815;
    stroke-miterlimit: 10;
}

`

const Header = () => {
    return (
        <HeaderStyle>
            <div className="header_child" id="header_logo">
                <ul>
                    <Link to="/"><li className="logo"><h1>foxboxr</h1></li></Link>
                    <li className="search">search</li>
                </ul>
            </div>
            <div className="header_child" id="header_main">
                <ul>
                    <Link className="home" to="/"><li><svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 aaxa7vy3" height="28" width="28"><path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path></svg></li></Link>
                    <Link className="friendList" to="/FriendList"><li><svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv" height="28" width="28"><path d="M10.5 4.5c-2.272 0-2.75 1.768-2.75 3.25C7.75 9.542 8.983 11 10.5 11s2.75-1.458 2.75-3.25c0-1.482-.478-3.25-2.75-3.25zm0 8c-2.344 0-4.25-2.131-4.25-4.75C6.25 4.776 7.839 3 10.5 3s4.25 1.776 4.25 4.75c0 2.619-1.906 4.75-4.25 4.75zm9.5-6c-1.41 0-2.125.841-2.125 2.5 0 1.378.953 2.5 2.125 2.5 1.172 0 2.125-1.122 2.125-2.5 0-1.659-.715-2.5-2.125-2.5zm0 6.5c-1.999 0-3.625-1.794-3.625-4 0-2.467 1.389-4 3.625-4 2.236 0 3.625 1.533 3.625 4 0 2.206-1.626 4-3.625 4zm4.622 8a.887.887 0 00.878-.894c0-2.54-2.043-4.606-4.555-4.606h-1.86c-.643 0-1.265.148-1.844.413a6.226 6.226 0 011.76 4.336V21h5.621zm-7.122.562v-1.313a4.755 4.755 0 00-4.749-4.749H8.25A4.755 4.755 0 003.5 20.249v1.313c0 .518.421.938.937.938h12.125c.517 0 .938-.42.938-.938zM20.945 14C24.285 14 27 16.739 27 20.106a2.388 2.388 0 01-2.378 2.394h-5.81a2.44 2.44 0 01-2.25 1.5H4.437A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.25 14h4.501a6.2 6.2 0 013.218.902A5.932 5.932 0 0119.084 14h1.861z"></path></svg></li></Link>
                </ul>
            </div>
            <div className="header_child" id="header_aside">
                <ul>
                    <Link to="/Profile"><li className="profile">프로필</li></Link>
                    <Link to="">
                        <li className="add">
                            <svg width="26" height="26" id="레이어_1" data-name="레이어 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.21 26.21">
                                <line class="cls-1" y1="13.1" x2="26.21" y2="13.1"/>
                                <line class="cls-1" x1="12.81" x2="12.79" y2="26.21"/>
                            </svg>
                        </li>
                    </Link>
                    <Link to=""><li className="msg">메세지</li></Link>
                    <Link to=""><li className="alert">알림</li></Link>
                </ul>
            </div>
        </HeaderStyle>
    )
}

export default Header;