import styled from "styled-components"
import { NavLink, Redirect } from "react-router-dom";

import Hamburger from "../assets/menu_black_24dp 1.png";
import Icon from "../assets/Peer Stake Icon.png";
import PeerIcon from "../assets/peer stake logo 1 1.png"
import UserIcon from "../assets/[Downloader 1.png";
function NavBar  (){
    return (
        <NavBar.Wrapper>
           {localStorage.getItem("user") ?"" : <Redirect to="/login"/>}
             <ul className="menu">
               
                     <li><NavLink className="menuItem" to="/">Home</NavLink></li> 
                    <li><NavLink className="menuItem" to="/user">Profile</NavLink></li>
                    <li><NavLink className="menuItem" to="/create">Stake</NavLink></li>
                    <li><NavLink className="menuItem" to="/fund_wallet">Wallet</NavLink></li>
                    <li><NavLink className="menuItem" to="/Signout">Sign out</NavLink></li>
   
                    </ul> 
            {/* <img src={Hamburger} className="hamburger" alt="" onClick={toggleMenu}/> */}
          <div className="hero__sec">
            <div>
                <div className="icon">
                    <img src={Icon} alt=""/>
                </div>
                <div  className="nav">
                    
                    <img src={PeerIcon} alt=""/>

                   <NavLink to="/"> <img src={Icon} alt=""/> </NavLink>
                </div>
              
            </div>
            <div className="hero__content">
                {/* <p>Welcome! <span id="name">{user.first_name}</span></p> */}
                <NavLink to="/user">
                    <img src={UserIcon} alt=""/>
                </NavLink>
                <h2> 
                    <span className="space">
                        <span className="cent">$</span> 
                        <span>3,200</span>
                    </span>
                    <span className="cent">.59</span> 
                </h2>
                <h3>WALLET BALANCE</h3>
                <div>
                    <NavLink to="/Create" id="hero-content">CREATE STAKE</NavLink>
                </div>
                {/* <!-- <img src="./assets/paid_black_24dp 1.png" alt=""> --> */}
            </div>
          </div>

        </NavBar.Wrapper>
    )
}
NavBar.Wrapper = styled.div`
height: 100px;
background-color: #fcf;
display: flex;
`

export default NavBar;