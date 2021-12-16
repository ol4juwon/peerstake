import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import axios from "axios";

import styled from "styled-components"
const _axios  = require("axios");
// const axios = _axios.create();

const BASEURL = process.env.REACT_APP_BASEURL
const Login = () => {
    console.log("Base:", BASEURL)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = (e) => {
        e.preventDefault()
        verifyUser({ email, password });

    }

    const verifyUser = async (payload) => {
        console.log("Before login ===>> ", payload.email)
        const data = payload;
        // const config = {
        //     method: "POST",
        //     url: `${BASEURL}/auth/login`,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     data: payload
        // }

// const axiosInstanvce = axios.create({BASEURL, 
//     headers: {
//         "Accept": "application/json, text/plain, */*",
//     "Content-Type": "application/json ",
//     "Allow-Control-Allow-Origin": "*"
//     }
// })
// const req = axiosInstanvce.post(`${BASEURL}/auth/login`, data)
// console.log("req:", req)
        const response  = await axios.post(`${BASEURL}/auth/login`,
        data,
        {
            headers: {
                Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json ",
            }
        }
        )
        .then(res =>  res.data)
        .catch(err =>{
            if(err.response){
                console.log("Error:", err.response)
                return err.response
            }else if(err.request){
                console.log("Error:", err.request)
                return err.request
            }else{
                console.log("Error:", err.message)
                return err.message
            }
        });
         console.log("After login ===>> ",response)
         if( response.data?.statusCode >= 400){
            const error = response.data.description || response.data.message;
            alert("\n Login failed. \n Reason: "+error);
            return;
        }
        if (response.user.token) {
            localStorage.setItem("token", response.user.token);
            localStorage.setItem("user", JSON.stringify(response.user));
            window.location.href = "/welcome"
        }
        
        // console.log("verf", Verified.data.user)
    }
    return (
        <Login.Wrapper>
            <div className="header">
                <NavLink to="/"><img src="/images/_1930224111808.png" alt="" /></NavLink>
                {/* <!-- <a href="#"><img src="/images/hamburger.png" alt=""></a> --> */}
            </div>
            <div className="content">
                <form onSubmit={login}>
                    <NavLink to="#" className="close"><img src="/images/Vector 3.png" alt="" /></NavLink>
                    <div className="logo"><img src="/images/Peer Stake Icon.png" alt="" /></div>
                    <h2>Login to peer stake</h2>
                    <div className="inputs">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Your email" />
                    </div>
                    <div className="inputs">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    <input type="submit" className="submit" value="Log in" /><br />
                    <div className="forgot"><NavLink to="/forgot_password">Forgot password?</NavLink></div>
                </form>
            </div>
        </Login.Wrapper>
    )

}

Login.Wrapper = styled.div`
width: 100%;
position: relative;
background: linear-gradient(0deg, rgba(144, 94, 238, 0.3), rgba(144, 94, 238, 0.3)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #7E57C2;
a{
    text-decoration: none;
}

.header{ 
    width: 85%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}

.content{
    width: 100%;
    min-height: 90%;
    background-color: white;
    border-radius: 30px 30px 0 0;
    display: flex;
    justify-content: center;
    /* align-items: center; */
}

.close{
    align-self: flex-end;
    margin-bottom: 10%;
}

.logo{
    /* width: 100%; */
    align-self: center;
    padding-top: 10%;
    padding-bottom: 30%;
}

.logo img{
    transform: scale(1.3);
}

form{
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 13px;
    color: #1d1d1d;
    width: 85%;
    margin-bottom: 5%;
}

form h2{
    font-size: 18px;
    padding-bottom: 8%;
}

.inputs{
    padding-bottom: 5%;
}

.inputs label{
    display: inline-block;
    padding-bottom: 2%;
}

.inputs input{
    width: 100%;
    height: 15px;
    border: 1px solid #e6e6e6;
    background-color: white;
    border-radius: 5px;
    padding: 3%;
}

.submit{
    background-color: #A695C8;
    color: #fff;
    font-weight: 400;
    font-size: 15px;
    min-height: 35px;
    border: none;
    border-radius: 5px;
    margin-bottom: 3%;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.forgot{
    align-self: center;
}

.forgot a{
    font-size: 13px;
    font-weight: 400;
    color: #828282;
    text-decoration: none;
}

@media(max-height: 760px) {
    form{
        font-weight: 500;
        font-size: 12px;
        margin-top: 5%;
    }

    .close{
        padding-bottom: 8%;
    }

    .logo{
        /* width: 100%; */
        align-self: center;
        padding-top: 10%;
        padding-bottom: 20%;
    }

    .logo img{
        transform: scale(1.2);
    }

    .inputs input{
        height: 16px;
    }

    .submit{
        font-size: 14px;
        min-height: 35px;
        margin-bottom: 3%;
    }
}

`

export default Login;