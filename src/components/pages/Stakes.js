import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Stakes = () => {
    return (
        <Stakes.Wrapper>
            
            <ul className="menu">
        <li><NavLink className="menuItem" to="welcome.html">Home</NavLink></li>
        <li><NavLink className="menuItem" to="user.html">Profile</NavLink></li>
        <li><NavLink className="menuItem" to="create.html">Stake</NavLink></li>
        <li><NavLink className="menuItem" to="fund_wallet.html">Wallet</NavLink></li>
        <li><NavLink className="menuItem" to="email_login.html">Sign Out</NavLink></li>
    </ul>
    <div className="hero__sec">
        <div>
            <div className="icon">
                <img src="./assets/Peer Stake Icon.png" alt=""/>
            </div>
            <div  className="nav">
                <NavLink to="welcome.html" id="size">
                    <img src="./images/peer stake logo 1 1.png" alt=""/>

                </NavLink>

        <NavLink to="#"> <img src="./assets/menu_black_24dp 1.png" alt=""/> </NavLink>
            </div>
           
        </div>
    </div>
    <div className="header">
        <p>stakes</p>
        <div className="winners-header">
            <div className="yo">
                <img src="./assets/Union.png" alt=""/>
    
                <input type="search" placeholder=" Search" className="form_control"/>    
            </div>
        </div>
    </div>


    <div className="stakes">
        <div className="run">
            <p>Running</p>
            <span>5</span>
        </div>

        <div >
            <div className="run--info">
                <p>A 3 set FIFA 22 game against Mathew</p>
                <img src="./assets/Polygon 3.png" alt=""/>
            </div>
            <div className="run--info">
                <p>Who Can Peel Boiled Eggs Faster againts Bode</p>
                <img src="./assets/Polygon 3.png" alt=""/>
            </div>
            <div className="run--info">
                <p>A 3 set PES 2019 game againts Dimeji</p>
                <img src="./assets/Polygon 3.png" alt=""/>
            </div>
            <div className="run--info">
                <p>Who will win staff of the month againts Jamiu</p>
                <img src="./assets/Polygon 3.png" alt=""/>
            </div>
            <div className="run--info">
                <p>Top fabric sales againts Sandra</p>
                <img src="./assets/Polygon 3.png" alt=""/>
            </div>
        </div>
    </div>
   

    <div className="stakes">
        <div className="invites">
            <p>Stakes Invites</p>
            <span>2</span>
        </div>

        
        <div >
            <div className="invites--info">
                <p><span>Rita - </span> Will this coin land heads or tails? </p>
                <h1>$100</h1>
            </div>
            <div className="invites--info">
                <p><span>Domnic - </span> How many eggs are in this box?</p>
                <h1>$70</h1>
            </div>
        </div>
    </div>
   

    <div className="stakes">
        <div className="expired">
            <p>Expired</p>
            <span>1</span>
        </div>

        
        <div >
            <div className="expired--info">
                <p><span>Obama - </span> Who will get to the office first? </p>
                <h1>$85</h1>
            </div>
        </div>
    </div>

        </Stakes.Wrapper>
    );
}

Stakes.Wrapper = styled.div`
`;

export default Stakes;
