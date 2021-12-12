import styled from 'styled-components';
import { NavLink, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';

import Hamburger from "../assets/menu_black_24dp 1.png";
import Icon from "../assets/Peer Stake Icon.png";
import PeerIcon from "../assets/peer stake logo 1 1.png"
import UserIcon from "../assets/[Downloader 1.png";
import Wallet from "../images/paid_black_24dp 1.png"
const Create = () => {
    const successful_popup = document.querySelector('.success');
        const failed_popup = document.querySelector('.failed');

        function turn_on(popup) {
            popup.style.display = "flex";
        }

        function turn_off(popup) {
            popup.style.display = "none";
        }

        const [user,setUser] = useState('')
  const [userName,setUserName] = useState('')
  useEffect(()=>{
    const newUser = localStorage.getItem('user')
  
    const k = JSON.parse(newUser)
    setUser(k)
  },[])
    return (
        <Create.Wrapper>
        {localStorage.getItem("user") ?"" : <Redirect to="/login"/>}
        <ul className="menu">
        <li><NavLink className="menuItem" to="/welcome">Home</NavLink> </li>
        <li><NavLink className="menuItem" to="/user">Profile</NavLink> </li>
        <li><NavLink className="menuItem" to="/create">Stake</NavLink> </li>
        <li><NavLink className="menuItem" to="/fund">Wallet</NavLink> </li>
        <li><NavLink className="menuItem" to="/email">Sign Out</NavLink> </li>
      </ul>
      <img src={Hamburger} className="hamburger" alt=""/>
      <div className="hero__sec"> 
         <div> 
             <div className="icon">
                <img src={Icon} alt=""/>
            </div>
            <div  className="nav">
                <NavLink to="/" id="size">
                    <img src={PeerIcon} alt=""/>

                </NavLink> 

                 <NavLink to="/"> <img src={Icon} alt=""/> </NavLink> 
            </div>
           
        </div>
        <div className="hero__content">
          <h2> 
            <span className="space">
                <span className="cent">$</span> 
                <span>{user.wallet?.balance}</span>
            </span>
            <span className="cent"></span> 
        </h2>
            <h3>WALLET BALANCE</h3>
            <img src={Wallet} alt=""/>
        </div>
        </div>
        <div className="content">
      <form >
        <div className="add_user">
          <NavLink to="/">
            <img src="/images/Group 110.png" alt=""/>
            <p>Add User</p>
          </NavLink> 
        </div>
        <div className="inputs">
          <label htmlFor="amount">I want to stake</label>
          <input type="number" name="amount" id="amout" placeholder="$100"/>
        </div>
        <div className="inputs">
          <label htmlFor="against">With</label><br/>
          <input type="text" name="against" id="against" placeholder="I @jide will win @username/email"/>
        </div>
        <div className="inputs">
          <label htmlFor="bet">That</label><br/>
          <input type="text" name="bet" id="bet" placeholder="A 3 set FIFA 22 game"/>
        </div>
        <div className="inputs">
          <label htmlFor="when">On</label><br/>
          <input type="datetime-local" name="when" id="when" placeholder="Date/Time"/>
        </div>
        <div className="inputs">
          <label htmlFor="Decider">Decider for dispute resolution</label><br/>
          <input type="" name="Decider" id="Decider" placeholder="picture of the score board"/>
        </div>
        
            
            <NavLink to="/stakes" type="submit" className="submit">
              Share
            </NavLink> 
        
        
      </form>
    </div>
    <script src="./javascript/hamburger.js"></script>

        </Create.Wrapper>
    );
}

Create.Wrapper = styled.div`


    margin: 0;
    padding: 0;
    // box-sizing: border-box;
    font-family: 'Roboto' ,sans-serif;
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
  
  
  
  
  
  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    position: relative;
    padding-top: 5%;
  }
  
  .nav > img{
    width: 25%;
  }
  
  
  #size img{
    width: 50%;
  }
  
  .icon{
    position: absolute;
    top: 0;
    left: 0;
  }
  
  /* .icon img{
    width:150px;
  } */
  
  
  .hero__sec{
    background: linear-gradient(356.95deg, #4D2B90 2.36%, #7E57C2 83.13%);
    border-radius: 0px 0px 20px 20px;
    /* height: 70vh; */
    margin: 0 auto;
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
    line-height: 16px;
    
    letter-spacing: -0.02em;
    
    /* ffffff */
    
    color: #FFFFFF;
    padding-bottom: 15px;
  }
  
  .hero__content h2{
    padding-top: 15px;
  }
  
  #name{
    font-weight: 700;
  }
  
  
  .hero__content img{
    border-radius: 50%;
    background: #FFFFFF;
    margin-bottom: 20px;
  
  }
  
  .hero__content h2{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
  
    letter-spacing: 0.03em;
    
    /* ffffff */
    
    color: #FFFFFF;
    padding-bottom: 5px;
  
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
    line-height: 14px;
    /* identical to box height */
    
    
    letter-spacing: -0.02em;
    font-variant: small-caps;
    
    /* ffffff */
    
    color: #FFFFFF;
    padding-bottom: 30px;
  
  }
  
  .hero__content a{
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
    margin-bottom: 20px;
  
  }
  
  .content{
    margin-top: 20px;
    background: rgba(196, 196, 196, 0.3);
    /* opacity: 0.1; */
    border-radius: 6px;
    padding: 10px;
    width: 95%;
    margin: 0 auto;
  }
  
  form{
    display: flex;
    margin-top: 3%;
    margin: 0 auto;
    flex-direction: column;
    font-weight: 500;
    font-size: 13px;
    color: #1d1d1d;
    width: 100%;
    max-height: 95%;
  }
  
  .add_user{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .add_user a{
    display: flex;
  }
  
  .add_user a img{
    padding-right: 2px;
  }
  
  .add_user a p{
      font-size: 13px;
      font-style: italic;
      color: #828282;
      font-weight: 500;
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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center
  }
  
  .st_wt{
    text-align: center;
    font-family: 'Roboto' ,sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #7E57C2;
    padding-top: 3em;
  }
  
  .fund{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    margin: 0 auto;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  
  .wallet{
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(356.95deg, #4D2B90 2.36%, #7E57C2 83.13%);
    border-radius: 6px;
    width: 28%;
    height: 2.5rem;
    /* padding: 10px 12px; */
  }
  
  .wallet p {
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
  
  
  .card-transaction, .bitcoin-transaction{
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border-radius: 6px;
    border: 1px solid #7E57C2;
    /* padding: 10px 12px; */
    height: 2.5rem;
    width: 28%;
    justify-content: center;
  }
  
  
  
  .card-transaction p, .bitcoin-transaction p{
    font-family: 'Roboto' , sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
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
  
  .success{
    display: none;
  }
  
  .failed{
    display: none;
  }
  
  
  .cover .card{
    /* height: 60%; */
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
  
  .success .card h3, 
  .failed .card h3
  {
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: #333333;
    margin-bottom: 7%;
  }
  
  .success .card p, 
  .failed .card p
  {
    font-style: normal;
    width: 80%;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    color: #828282;
  }
  
  .success .card .success_img, 
  .failed .card .failed_img
  {
    margin: 0 0;
  }
  
  .success .card div, 
  .failed .card div
  {
    background-color: #7E57C2;
    color: #fff;
    font-family: 'Roboto' ,sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    width: 70%;
    min-height: 50px;
    border-radius: 5px;
    /* margin-bottom: 3%; */
    /* outline: none; */
    cursor: pointer;
    margin-bottom: 5px;
  }
  
  @media screen and (max-height: 690px) {
    .success .card h3, 
    .failed .card h3
    {
        font-size: 22px;
        margin-bottom: 5%;
    }
  
    .success .card .success_img, 
    .failed .card .failed_img
    {
        margin: 10% 0;
    }
  
    .success .card div, 
    .failed .card div
    {
        font-size: 16px;
        min-height: 40px;
    }
  }
  
  @media screen and (max-height: 570px) {
    .success .card h3, 
    .failed .card h3
    {
        font-size: 19px;
        margin-bottom: 5%;
    }
  
    .success .card p, 
    .failed .card p
    {
        font-size: 14px;
    }
  
    .success .card .success_img, 
    .failed .card .failed_img
    {
        margin: 10% 0;
        height: 125px;
    }
  
    .success .card div, 
    .failed .card div
    {
        font-size: 16px;
        min-height: 40px;
    }
  }
`
export default Create;