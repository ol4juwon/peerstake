import styled from "styled-components";
import {NavLink } from "react-router-dom"
import PeerLogo from "../images/_1930224111808.png"
const Forgot = () => {
    return (
        <Forgot.Wrapper>
     <div class="header">
        <NavLink to="#"><img src={PeerLogo} alt=""/></NavLink>
        {/* <!-- <NavLink to="#"><img src="/images/hamburger.png" alt=""/></NavLink> --> */}
    </div>
    <div class="content">
        <form action="" method="POST">
            <NavLink to="./email_login.html" class="close"><img src="/images/Vector 3.png" alt=""/></NavLink>
            <div class="logo"><img src="/images/Peer Stake Icon.png" alt=""/></div>
            <h2>confirm your Email</h2>
            <div class="inputs">
                <label for="email">Email</label><br/>
                <input type="email" id="email" name="email" placeholder="Your email"/>
            </div>
            <input class="submit" type="submit" value="submit"/><br/>
        </form>
    </div>

        </Forgot.Wrapper>
    )
}

Forgot.Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Red+Hat+Display:wght@500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;

}

input, a{
    outline: none;
}

    height: 100%;
    overflow: auto;



    width: 100%;
    position: relative;
    background: linear-gradient(0deg, rgba(144, 94, 238, 0.3), rgba(144, 94, 238, 0.3)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #7E57C2;


a{
    text-decoration: none;
}

.header{ 
    width: 85%;
    height: 80px;
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
    height: 50px;
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
    min-height: 50px;
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
        height: 40px;
    }

    .submit{
        font-size: 14px;
        min-height: 45px;
        margin-bottom: 3%;
    }
}


/* popups section */

.cover{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(29, 29, 29, 0.2);
    /* display: flex; */
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.validation{
    display: none;
}

.card{
    /* height: 50%; */
    width: 90%;
    max-width: 410px;
    padding: 30px;
    background: #FFFFFF;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.card .close{
    position: absolute;
    top: 6%;
    right: 6%;
    cursor: pointer;
}

.validation .card p{
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #828282;
    text-align: center;
    width: 80%;
}

.validation .card div{
    background-color: #7E57C2;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    width: 70%;
    min-height: 50px;
    border-radius: 5px;
    margin: 10% 0;
    cursor: pointer;
}
`

export default Forgot