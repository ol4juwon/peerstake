import { NavLink, Redirect } from "react-router-dom";
import User from "../hooks/User"
import styled from "styled-components";
import Hamburger from "../assets/menu_black_24dp 1.png";
import Icon from "../assets/Peer Stake Icon.png";
import PeerIcon from "../assets/peer stake logo 1 1.png"
import UserIcon from "../assets/[Downloader 1.png";
import { useState,useEffect } from "react";
import transactionIcon from "../assets/transaction.png"
import AddIcon from "../assets/Group 54.png"
// import NavBar from "../NavBar";
const Welcome = () => {
const {logout} = User();

  const [user,setUser] = useState('')
  const [userName,setUserName] = useState('')
  useEffect(()=>{
    const newUser = localStorage.getItem('user')
  
    const k = JSON.parse(newUser)
    setUser(k)
  },[])
  // setUser(localStorage.getItem("user"))
  // const k = JSON.parse(user)
  console.log("Storage user",user.token)
  const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
// const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        menu.style.top = "-100px";
    
        // closeIcon.style.display = "none";
        // menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        menu.style.top = "0";
        // closeIcon.style.display = "block";
        // menuIcon.style.display = "none";
    
    }
    }
    
// hamburger.addEventListener("click", toggleMenu);
menuItems.forEach( 
function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
    }
)
    return(
      
        <Welcome.Wrapper>
          {localStorage.getItem("user") ?"" : <Redirect to="/login"/>}
             <ul className="menu">
               
                     <li><NavLink className="menuItem" to="/">Home</NavLink></li> 
                    <li><NavLink className="menuItem" to="/user">Profile</NavLink></li>
                    <li><NavLink className="menuItem" to="/create">Stake</NavLink></li>
                    <li><NavLink className="menuItem" to="/fundwallet">Wallet</NavLink></li>
                    <li><i className="menuItem" onClick={logout}> Sign out</i></li>

   
                    </ul> 
            <img src={Hamburger} className="hamburger" alt="" onClick={toggleMenu}/>
          <div className="hero__sec">
            <div>
                <div className="icon">
                    <NavLink to="/welcome">
                    <img src={Icon} alt=""/>
                    </NavLink>
                </div>
                <div  className="nav">
                    <NavLink to="/welcome"> 
                    <img src={PeerIcon} alt=""/>
                     {/* <img src={Icon} alt=""/> */}
                    </NavLink>
                  
                </div>
              
            </div>
            <div className="hero__content">
                <p>Welcome! <span id="name">{user.first_name}</span></p>
                <NavLink to="/user">
                    <img src={UserIcon} alt=""/>
                </NavLink>
                <h2> 
                    <span className="space">
                        <span className="cent">₦</span> 
                        <span>{user?.wallet?.balance}</span>
                    </span>
                    <span className="cent"></span> 
                </h2>
                <h3>WALLET BALANCE</h3>
                <div>
                    <NavLink to="/Create" id="hero-content">CREATE STAKE</NavLink>
                </div>
                {/* <!-- <img src="./assets/paid_black_24dp 1.png" alt=""> --> */}
            </div>
          </div>

          <div className="stakes">
                <p>Stakes</p>
        <div className="stakes--card">
            <NavLink to="/stakes" >
                <div className="card--1">
                    <p>5</p>
                    <h2>Running</h2>
                </div>
            </NavLink>
           <NavLink to="/run_stakes#stake--invite" >
                <div className="card--2">
                    <p>2</p>
                    <h2>Request</h2>
                </div>
           </NavLink>
            <NavLink to="/run_stakes#due--stakes">
                <div className="card--3">
                    <p>1</p>
                    <h2>Due</h2>
                </div>
            </NavLink>
            
        </div>
    </div>
    <div className="fund">
        <NavLink to="/fundwallet">
            <div className="fund--wallet">
                <img src={AddIcon} alt=""/>
                <p>Fund Your Wallet</p>
            </div>
        </NavLink>
        <NavLink to="/transactions">
            <div className="transaction">
                <img src={transactionIcon} alt=""/>
                <p>View transactions</p>
            </div>
        </NavLink>
        
    </div>

    <footer>
        <div className="logo">
            <img src={PeerIcon} alt=""/>
        </div>
        

        <div className="links">
            <NavLink to="#">About Us</NavLink>
            <NavLink to="#">Contact Us</NavLink>
            <NavLink to="#">Customer Support</NavLink>

        </div>

        <div className="linkss">
            <NavLink to="#">Jobs</NavLink>
            <NavLink to="#">Legal</NavLink>
        </div>
    </footer>
        </Welcome.Wrapper>
    )
}

Welcome.Wrapper = styled.div`
  margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    a{
      text-decoration: none;
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
      top: 2.4rem;
      right: 1rem;
      padding: 4px;
      /* border: black solid 1px; */
      /* background: white; */
      cursor: pointer;
      transition: all 1s;
    }
    
  .hamburger:hover{
      transform: rotate(920deg);
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
    
    
    
    
  
  
  .nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 20px;
      position: relative;
      padding-top: 5%;
  }
  
  .nav >a > img{
      width: 100px;
  }
  
  .icon{
      position: absolute;
      top: 0;
      left: 0;
  }
  
  
  .hero__sec{
      background: linear-gradient(356.95deg, #4D2B90 2.36%, #7E57C2 83.13%);
      border-radius: 0px 0px 20px 20px;
     height: 400px; 
      background-repeat: no-repeat;
      
  }
  
  .hero__content{
      text-align: center;
  }
  
  .hero__content p{
      font-family: 'Roboto' ,sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 1px;
      
      letter-spacing: -0.02em;
      
      /* ffffff */
      
      color: #FFFFFF;
      padding-bottom: 5px;
  }
  
  #name{
      font-weight: 700;
  }
  
  
  .hero__content img{
      border-radius: 50%;
      background: #FFFFFF;
      /* margin-bottom: 20px; */
  
  }
  
  
  .hero__content h2{
      font-family: 'Roboto' ,sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 5px;
    
      letter-spacing: 0.03em;
      
      /* ffffff */
      
      color: #FFFFFF;
    //    padding-bottom: 5px; 
  
  }
  
  .space{
      display: inline-flex;
  }
  
  .cent{
      font-family: 'Roboto' ,sans-serif;
      font-size: 25px;
      font-weight: 400;
      vertical-align: -webkit-baseline-middle;
      margin-left: -14px;
      /* letter-spacing: 0.03em; */
  }
  
  .hero__content h3{
      font-family: 'Roboto' ,sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 1px;
      /* identical to box height */
      
      
      letter-spacing: -0.02em;
      font-variant: small-caps;
      
      /* ffffff */
      
      color: #FFFFFF;
      padding-bottom: 30px;
  
  }
  
  #hero-content {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #7E57C2;
      text-transform: uppercase;
      background: #FFFFFF;
      padding: 20px 30px ;
      border-radius: 3px;
      /* padding-bottom: 30px; */
  
  }
  
  .hero__content div{
      /* margin-bottom: 20px; */
      padding-bottom: 10px;
  
  }
  
  .stakes p{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 1px;
    /* identical to box height */
    
    color: #7E57C2;
    letter-spacing: -0.02em;
}

.stakes{
    margin-top: 2px;
    background: rgb(196, 196, 196, 0.1);
    /* opacity: 0.1; */
    border-radius: 6px;
    padding: 10px;
    width: 95%;
    margin-left: 2.5%;
}
  
.stakes--card{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
}
  

.card--1{
    background: #FFFFFF;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 1px 20px;
}
  
  
  .card--1 p{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 10px;
   
    text-align: center;
    // letter-spacing: -0.02em;
    
    /* Green 1 */
    
    color: #219653;  
  }
  
  .card--1 h2{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 10px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    text-transform: capitalize;
    
    /* Green 1 */
    
    color: #219653;
  }
  .card--2{
    background: #FFFFFF;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 1px 20px;
  }
  
  
  .card--2 p{
      font-family: 'Roboto' ,sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 64px;
      line-height: 1px;
     
      text-align: center;
      letter-spacing: -0.02em;
      
      /* Green 1 */
      
      color: #7E57C2;
      
  }
  
  .card--2 h2{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 1px;
      display: flex;
      align-items: flex-end;
      text-align: center;
      text-transform: capitalize;
      
      /* Green 1 */
      
      color: #7E57C2;
  }
  
  .card--3{
    background: #FFFFFF;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 1px 20px;
  }
  
  .card--3 p{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 10px;
   
    text-align: center;
    letter-spacing: -0.02em;
      
      /* Green 1 */
      
      color: red;
      
  }
  
  .card--3 h2{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 1px;
     
      text-align: center;
      text-transform: capitalize;
      
      /* Green 1 */
      
      color: red;
  }
  
  .fund{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 85%;
      margin: 0 auto;
      margin-top: 5%;
      margin-bottom: 5%;
  }
  
  .fund--wallet{
      display: flex;
      align-items: center;
  }
  
  
  .fund--wallet{
      background: linear-gradient(356.95deg, #4D2B90 2.36%, #7E57C2 83.13%);
      border-radius: 6px;
      padding: 10px 12px;
  }
  
  .fund--wallet p {
      padding-left: 10px;
      font-family: 'Roboto' ,sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 14px;
      /* identical to box height, or 100% */
      
     
      letter-spacing: -0.02em;
      text-transform: capitalize;
      
      /* ffffff */
      
      color: #FFFFFF;
  
  }
  
  
  .transaction{
      display: flex;
      align-items: center;
      background: #FFFFFF;
      border-radius: 6px;
      border: 1px solid #7E57C2;
      padding: 10px 12px;
  }
  
  
  
  .transaction p{
      font-family: 'Roboto' , sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      padding-left: 10px;
      letter-spacing: -0.02em;
      text-transform: capitalize;
      color: #7E57C2;
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
  
  
  
  /* @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
      html {
        transform: rotate(-90deg);
        transform-origin: left top;
        width: 100vh;
        overflow-x: hidden;
        position: absolute;
        top: 100%;
        left: 0;
      }
    }
   */
  

`

export default Welcome;