import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
    return (
        <Home.Wrapper>
            
            <div class="logo">
        {/* <!-- <img src="/images/peer stake logo 1 1.png" alt=""> --> */}
    </div>
    <div>
        <NavLink class="button" to="#">
            <img class="button_logo" alt="" src="/images/google.png"/>
            <div class="button_text">Continue with Google</div>
        </NavLink>
        <NavLink class="button" to="#">
            <img class="button_logo" alt="" src="/images/facebook.png" />
            <div class="button_text">Continue with Facebook</div>
        </NavLink>
        <NavLink className="button" to="#">
            <img className="button_logo" alt="" src="/images/apple.png"/>
            <div className="button_text">Continue with Apple</div>
        </NavLink>
    </div>
    <div class="login">
        <NavLink className="button" to="/login">Login with email</NavLink>
        <NavLink to="/signup" id="link2" className="button">Sign up with email</NavLink>
    </div>        </Home.Wrapper>
    )
}

Home.Wrapper = styled.div`
width: 100%;
height: 100vh;
padding: 5%;
background-color: #E5E5E5;
background: linear-gradient(3.33deg, rgb(68, 35, 133) 16.43%, rgba(154, 115, 231, 0) 141.44%), url("./assets/[Downloader\ 2.png");
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
mix-blend-mode: multiply;
box-sizing: border-box;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
background-position: center center;  
background-repeat: no-repeat;


.logo{
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button{
    font-family: 'Roboto' ,sans-serif;
    display: flex;
    height: 45px;
    width: 100%;
    text-decoration: none;
    font-size: 14px;
    color: black;
    /* flex-direction: row; */
    /* padding: 0; */
    background-color: white;
    align-items: center;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 2px rgba(0,0,0,0.2);
    outline: none;
    margin-bottom: 15px;
}

/* .button:hover{
    cursor: pointer;
} */

.button_logo{
    padding: 0 10px;
}

.login{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.login a{
    font-family: 'Roboto' ,sans-serif;
    width: 48%;
    height: 30px;
    border-radius: 20px;
    border: none;
    background-color: white;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
    outline: none;
}

#link2{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    /* display: flex; */
    /* align-items: flex-end; */
    text-align: center;
    letter-spacing: -2.38419e-09em;
    
    /* White */
    background: none !important;
    
    color: #F9F9F9;
    border: 1px solid #F9F9F9;
    box-sizing: border-box;
    border-radius: 50px;   
    padding: 10px 20px; 
    white-space: nowrap;
}
`

export default Home;