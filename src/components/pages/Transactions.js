import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Transactions = () => {
    return (
        <Transactions.Wrapper>
               <ul class="menu">
        <li><NavLink class="menuItem" to="welcome.html">Home</NavLink></li>
        <li><NavLink class="menuItem" to="user.html">Profile</NavLink></li>
        <li><NavLink class="menuItem" to="create.html">Stake</NavLink></li>
        <li><NavLink class="menuItem" to="fund_wallet.html">Wallet</NavLink></li>
        <li><NavLink class="menuItem" to="email_login.html">Sign out</NavLink></li>
      </ul>
      <img src= "./assets/menu_black_24dp 1.png" class="hamburger"></img>



<div class="hero__sec">
    <div>
        <div class="icon">
            <img src="./assets/Peer Stake Icon.png" alt=""/>
        </div>
        <div  class="nav">
            <NavLink to="welcome.html" id="size">
            <img src="./assets/peer stake logo 1 1.png" alt=""/>
                
            </NavLink>

            {/* <!-- <NavLink to="#"> <img src="./assets/menu_black_24dp 1.png" alt=""/> </NavLink> -- */}
        </div>
       
    </div>
</div>


<div class="hero__content">
    <h2> 
        <span class="space">
            <span class="cent">$</span> 
            <span>3,200</span>
        </span>
        <span class="cent">.59</span> 
    </h2>
    <h3>WALLET BALANCE</h3>
    <div class="btn" >
        <NavLink to="fund_wallet.html" class="button">
            <img src="./images/Group 110.png" alt=""/>
            <p>FUND YOUR WALLET</p>
        </NavLink>
        <NavLink to="" class="button">
            <img src="./images/down.png" alt=""/>
            <p>WITHDRAW</p>
        </NavLink>
    </div>
    <img src="./assets/paid_black_24dp 1.png" alt=""/>
</div>



<div class="stakes">
    <div class="header">
        <p>stakes</p>
        <div class="winners-header">
            <div class="yo">
                <img src="./assets/Union.png" alt=""/>
    
                <input type="search" placeholder=" Search" class="form_control"/>    
            </div>
        </div>
    </div>

    <div >
        <div class="run--info">
            <img src="./images/Group 48.png" alt=""/>
            <div>
                <div>
                    <p id="font">Deposit</p>
                    <p>A 3 set FIFA 22 game against Mathew</p>
                </div>
                <span >$100</span>
            </div>
        </div>
        <div class="run--info">
            <img src="./images/Group 39.png" alt=""/>
            <div>
                <div class="trans--font">
                    <p id="font">Withdrawal</p>
                    <p>Who Can Peel Boiled Eggs Faster against Bode</p>
                </div>
                <span id="color">$80</span>
            </div>
        </div>
        <div class="run--info">
            <img src="./images/Group 48.png" alt=""/>
            <div>
                <div>
                    <p id="font">Won</p>
                    <p>A 3 set PES 2019 game against Dimeji</p>
                </div>
                <span>$500</span>
            </div>
        </div>
        <div class="run--info">
            <img src="./images/Group 48.png" alt=""/>
             <div>
                <div>
                    <p id="font">Deposit</p>
                    <p>Who will win staff of the month against Jamiu</p>
                </div>
                <span>$150</span>
            </div>
        </div>
        <div class="run--info">
            <img src="./images/Group 39.png" alt=""/>
             <div>
                <div>
                    <p id="font">Funded</p>
                    <p>Top fabric sales against Sandra</p>
                </div>
                <span id="color">$100</span>
            </div>
        </div>
        <div class="run--info">
            <img src="./images/Group 48.png" alt=""/>
             <div>
                <div>
                    <p id="font">Won</p>
                    <p>A 3 set PES 2019 game against Dimeji</p>
                </div>
                <span>$250</span>
            </div>
        </div>
        <div class="run--info">
            <img src="./images/Group 48.png" alt=""/>
             <div>
                <div>
                    <p id="font">Deposit</p>
                    <p>Top fabric sales against Sandra</p>
                </div>
                <span>$800</span>
            </div>
        </div>
    </div>

    <NavLink to="#">
        <h3>See All</h3>
    </NavLink>
</div>




<footer>
    <div class="logo">
        <img src="./assets/peer stake logo 1 1.png" alt=""/>
    </div>
    

    <div class="links">
        <NavLink to="#">About Us</NavLink>
        <NavLink to="#">Contact Us</NavLink>
        <NavLink to="#">Customer Support</NavLink>

    </div>

    <div class="linkss">
        <NavLink to="#">Jobs</NavLink>
        <NavLink to="#">Legal</NavLink>
    </div>
</footer>



<script src="./javascript/hamburger.js"></script>

        </Transactions.Wrapper>
    );
}

Transactions.Wrapper = styled.div`
`

export default Transactions;
