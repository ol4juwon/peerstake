import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Fundwallet = () => {
    return (
        <Fundwallet.Wrapper>
             <ul class="menu">
        <li><NavLink class="menuItem" to="welcome.html">Home</NavLink></li>
        <li><NavLink class="menuItem" to="user.html">Profile</NavLink></li>
        <li><NavLink class="menuItem" to="create.html">Stake</NavLink></li>
        <li><NavLink class="menuItem" to="fund_wallet.html">Wallet</NavLink></li>
        <li><NavLink class="menuItem" to="email_login.html">Sign out</NavLink></li>
    </ul>
      <img src= "./assets/menu_black_24dp 1.png" class="hamburger" alt="menu"/>



    <div class="header">
        <NavLink to="welcome.html"><img src="/images/_1930224111808.png" alt=""/></NavLink>
        {/* <!-- <NavLink to="#"><img src="/images/hamburger.png" alt=""></NavLink> --> */}
    </div>
    <div class="content">
        <div class="details">
            <div class="wallet-card">
                <h3>Jide Joe</h3>
                <h2> 
                    <span class="space">
                        <span class="cent">$</span> 
                        <span>3,200</span>
                    </span>
                    <span class="cent">.59</span> 
                </h2>
                {/* <!-- <h2>$3,200.<span class="cent">59</span> </h2> --> */}
                <h3>WALLET BALANCE</h3>
            </div>
            <ul>
                <li>
                    <NavLink to="#">
                        <img class="field-icon" src="/images/icons8-debit-card-30.png" alt="Name"/>
                        <p>Debit card</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="./bank.html">
                        <img class="field-icon" src="/images/icons8-bank-30.png" alt="Username"/>
                        <p>Bank transfer</p>
                    </NavLink>
                </li>
                {/* <!-- <li>
                    <NavLink to="#">
                        <img class="field-icon" src="/images/icons8-bitcoin-30.png" alt="Email">
                        <p>Cryotocurrency</p>
                    </NavLink>
                </li> --> */}
            </ul>
        </div>
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

    {/* <!-- popups section --> */}

    {/* <div class="cover deposit_amount">
        <div class="card">
          <img class="close" onclick="turn_off(deposit_amount);" src="/images/Vector 3.png" alt="">
          <p>Please enter amount to deposit</p>
          <form action="">
            <input type="text" name="amount" placeholder="$100">
            <div onclick="turn_off(deposit_amount);">Submit</div>
<!--             <input type="submit" value="Deposit"> -->
            <!-- <NavLink to="#">upload</NavLink> -->
          </form>
        </div>
    </div>

    <div class="cover success" onclick="turn_off(successful_popup);">
        <div class="card">
          <img class="close" src="/images/Vector 3.png" alt="close" onclick="turn_off(successful_popup);">
          <h3>Congratulations!</h3>
          <p>Your deposit was successful</p>
          <img class="success_img" src="/images/Tick success.png" alt="">
          <div> Continue </div>
        </div>
    </div>

    <div class="cover failed" onclick="turn_off(failed_popup);">
        <div class="card">
          <img class="close" src="/images/Vector 3.png" alt="" onclick="turn_off(failed_popup);">
          <h3>Sorry!</h3>
          <p>Your deposit was not successful</p>
          <img class="failed_img" src="/images/icons8-cancel.svg" alt="">
          <div onclick="window.location.reload()"> Try Again </div>
        </div>
    </div>

     */}
    <script src="./javascript/hamburger.js"></script>
    
    
    
    {/* <!-- popups section starts --> */}
    {/* <script>


        // popups

        const successful_popup = document.querySelector('.success');
        const failed_popup = document.querySelector('.failed');
        const deposit_amount = document.querySelector('.deposit_amount');

        function turn_on(popup) {
            popup.style.display = "flex";
        }

        function turn_off(popup) {
            popup.style.display = "none";
        }


    </script> */}
        </Fundwallet.Wrapper>
    );
}
Fundwallet.Wrapper = styled.div`    
`

export default Fundwallet;
