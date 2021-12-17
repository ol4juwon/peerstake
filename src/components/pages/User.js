import React from 'react';
import UserAvater from "../assets/[Downloader 1.png"
import withdrawbutton from "../images/down.png"
import fundbutton from "../images/Group 1.png"
import UserIcon from "../images/icons8-user-30.png"
import Hamburger from "../assets/menu_black_24dp 1.png";
import unkIcon from "../images/_1930224111808.png"
import usernameIcon from "../images/icons8-username-30.png"
import emailIcon from "../images/icons8-email-30.png"
import DobIcon from "../images/icons8-planner-30.png"
import passwordIcon from "../images/icons8-password-30.png" 
import bankIcon from "../images/icons8-bank-30.png"
import editIcon from "../images/icons8-edit-24.png"
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
const User = () => {
    const [user,setUser] = useState("");
const [name,setName] = useState("")
   
   useEffect(() => {

    const l = localStorage.getItem("user");
    console.log("loks",l)
    setUser(JSON.parse(l));
    setName(`${user.first_name} ${user.last_name}`)

   }, []); 

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
    }
    return (
        <User.Wrapper>
                <ul className="menu">
        <li><NavLink className="menuItem" to="/welcome">Home</NavLink></li>
        <li><NavLink className="menuItem" to="/user">Profile</NavLink></li>
        <li><NavLink className="menuItem" to="/Create">Stake</NavLink></li>
        <li><NavLink className="menuItem" to="/Fundwallet">Wallet</NavLink></li>
        <li><i className="menuItem" onClick={logout}> Sign out</i></li>

      </ul>
      <img src={Hamburger} className="hamburger" alt=""/>
    
    <div className="header">
        <NavLink to="welcome"><img src={unkIcon} alt=""/></NavLink>
        {/* <!-- <NavLink to="#"><img src="../images/hamburger.png" alt=""></NavLink> --> */}
    </div>
    <div className="content">
        <div className="details">
            <div className="user-card">
                <img src={UserAvater} alt=""/>
                <h3>{`${user?.first_name} ${user?.last_name}`}</h3>
                <div className="user-actions">
                  <NavLink to="/fundwallet">
                    <img src={fundbutton} alt=""/>
                    <p>Fund Wallet</p>
                  </NavLink>
                  <NavLink to="/withdrawal">
                    <img src={withdrawbutton} alt=""/>
                    <p>Withdraw</p>
                  </NavLink>   
                </div>
              </div>
              <ul>
                <li>
                    <img className="field-icon" src={UserIcon} alt="Name"/>
                    <p>{`${user.first_name} ${user.last_name}`}</p>
                    <NavLink to="/editprofile"><img title="Edit Name" src={editIcon} alt="change name"/></NavLink>
                </li>
                <li>
                    <img className="field-icon" src={usernameIcon} alt="Username"/>
                    <p>{user.username}</p>
                    <NavLink to="/editprofile"><img title="Edit Username" src={editIcon} alt="change username"/></NavLink>
                </li>
                <li>
                    <img className="field-icon" src={emailIcon} alt="Email"/>
                    <p>{user.email}</p>
                    <NavLink to="/editprofile"><img title="edit Email" src={editIcon} alt="change email"/></NavLink>
                </li>
                <li>
                    <img className="field-icon" src={DobIcon} alt="Birthday"/>
                    <p>{user.dob}</p>
                    <NavLink to="/editprofile"><img title="edit date of birth" src={editIcon} alt="change date of birth"/></NavLink>
                </li>
                <li>
                    <img className="field-icon" src={passwordIcon} alt="password"/>
                    <p>**********</p>
                    <NavLink to="./confirm_email.html"><img title="edit password" src={editIcon} alt="change password"/></NavLink>
                </li>
                <li>
                    <img className="field-icon" src={bankIcon} alt="bank"/>
                    <div className="bank-details">
                        <p>Test bank</p>
                        <p>Jide Johnson Joe</p>
                        <p>123456789</p>
                    </div>
                    <NavLink to="/editprofile"><img title="edit bank details"src={editIcon} alt="change bank details"/></NavLink>
                </li>
            </ul>
            <div className="delete-account">
                <NavLink to="">Delete Account</NavLink>
            </div>
        </div>
    </div>

        </User.Wrapper>
    );
}

User.Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Red+Hat+Display:wght@500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}


.menuItem {
    display: block;
    margin: 2rem 4rem;
    font-size: 1.8rem;
    color: white;
    text-decoration: none;
    font-family: 'Roboto' , sans-serif;
  }
  
  .menuItem:hover {
    /* text-decoration: underline; */
    color: #7E57C2;
  }
  
  .hamburger {
    position: absolute;
    z-index: 100;
    top: 1.1rem;
    right: 1rem;
    padding: 4px;
    /* border: black solid 1px; */
    /* background: white; */
    cursor: pointer;
    transition: all 1s;
  }
  
.hamburger:hover{
    transform: rotate(720deg);
}

  .closeIcon {
    display: none;
  }
  
  .menu {
    position: fixed;
    transform: translateY(-100%);
    transition: transform 0.2s;
    top: -100px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: rgb(0, 0, 0, 0.9);
    color: white;
    list-style: none;
    padding-top: 4rem;
    text-align:center;
  }
  
  .showMenu {
    transform: translateY(0);
  }



a{
    outline: none;
    text-decoration: none;
}
    height: 100%;
    overflow: auto;
    width: 100%;
    position: relative;
    background: linear-gradient(0deg, rgba(144, 94, 238, 0.3), rgba(144, 94, 238, 0.3)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #7E57C2;



.header{
    width: 85%;
    height: 70px;
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
}

.details{
    display: flex;
    /* margin-top: %; */
    margin-bottom: 5%;
    flex-direction: column;
    font-weight: 500;
    font-size: 13px;
    color: #1d1d1d;
    width: 85%;
    max-height: 95%;
}

.user-card{
    width: 85%;
    /* height: 25%; */
    background: linear-gradient(356.95deg, #4D2B90 2.36%, #7E57C2 83.13%);
    border-radius: 24px;
    margin: 10% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
  
.user-card>img{
    margin: 10px 0;
    border-radius: 50%;
    /* width: 100px; */
    background: #FFFFFF;
}

.user-card h3{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.02em;
    font-variant: small-caps;
    color: #FFFFFF;
    padding-bottom: 30px;

}

.user-actions{
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
}

.user-actions a{
    color: #7E57C2;
    display: flex;
    align-items: center;
    background-color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: normal;
    font-size: 10px;
    width: 45%;
    padding: 4px;
    border-radius: 20px
}

.user-actions a img{
    padding-right: 4px;
}


.details ul{
    width: 100%;
    background: rgba(196, 196, 196, .3);
    margin: 0 auto;
    border-radius: 6px;
    list-style: none;
    margin-bottom: 2%;
}

.details ul li{
    display: flex;
    padding: 4% 3%;
    font-variant: small-caps;
    align-items: center;
    font-size: 20px;
    /* height: 4em; */
    border-bottom: 2px solid rgba(196, 196, 196, .5);
}

ul li .field-icon{
    margin-right: 5% ;
}

ul li p{
    flex: 1;
}

ul li .bank-details{
    flex: 1;
    display: flex;
    flex-direction: column;
}

.delete-account a{
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 10px auto;
    color: white;
    width: 45%;
    background: rgba(255, 0, 0, 0.8);
    text-decoration: none;
    box-shadow: 0, 10px, 10px, rgba(0, 0, 0, 1);
}


.logo{
    margin-top: 3rem;
    margin: auto;
    width: 25%;
}


.logo img{
    padding-top: 30%;
    width: 100%;
}

footer{
    background: linear-gradient(356.95deg, #4D2B90 2.36%, #7E57C2 83.13%);
}

.links{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    padding-top:20px;
}


.links a{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */
    
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: -0.02em;
    
    /* Peer 5 */
    
    color: #E6E6E6;
}


.linkss{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    margin: 0 auto;
    padding-top: 3%;
    padding-bottom: 10%;

}

.linkss a{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */
    
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: -0.02em;
    
    /* Peer 5 */
    
    color: #E6E6E6;
}


@media only screen and (max-width:350px){
    .user-actions a{
        font-size: 8px;
    }
}

`

export default User;
