import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const User = () => {
    return (
        <User.Wrapper>
                <ul className="menu">
        <li><NavLink className="menuItem" to="welcome.html">Home</NavLink></li>
        <li><NavLink className="menuItem" to="user.html">Profile</NavLink></li>
        <li><NavLink className="menuItem" to="create.html">Stake</NavLink></li>
        <li><NavLink className="menuItem" to="fund_wallet.html">Wallet</NavLink></li>
        <li><NavLink className="menuItem" to="email_login.html">Sign out</NavLink></li>

      </ul>
      <img src= "./assets/menu_black_24dp 1.png" className="hamburger" alt=""/>
    
    <div className="header">
        <NavLink to="welcome.html"><img src="/images/_1930224111808.png" alt=""/></NavLink>
        {/* <!-- <NavLink to="#"><img src="/images/hamburger.png" alt=""></NavLink> --> */}
    </div>
    <div className="content">
        <div className="details">
            <div className="user-card">
                <img src="/assets/[Downloader 1.png" alt=""/>
                <h3>Jide Joe</h3>
                <div className="user-actions">
                  <NavLink to="./fund_wallet.html">
                    <img src="/images/Group 1.png" alt=""/>
                    <p>Fund Wallet</p>
                  </NavLink>
                  <NavLink to="#">
                    <img src="/images/down.png" alt=""/>
                    <p>Withdraw</p>
                  </NavLink>   
                </div>
              </div>
              <ul>
                <li>
                    <img className="field-icon" src="/images/icons8-user-30.png" alt="Name"/>
                    <p>Jide Joe</p>
                    <NavLink to="./edit.html"><img title="Edit Name" src="/images/icons8-edit-24.png" alt="change name"/></NavLink>
                </li>
                <li>
                    <img className="field-icon" src="/images/icons8-username-30.png" alt="Username"/>
                    <p>@jidejoe</p>
                    <NavLink to="./edit.html"><img title="Edit Username" src="/images/icons8-edit-24.png" alt="change username"/></NavLink>
                </li>
                <li>
                    <img className="field-icon" src="/images/icons8-email-30.png" alt="Email"/>
                    <p>jidejoe@mail.com</p>
                    <NavLink to="./edit.html"><img title="edit Email" src="/images/icons8-edit-24.png" alt="change email"/></NavLink>
                </li>
                <li>
                    <img className="field-icon" src="/images/icons8-planner-30.png" alt="Birthday"/>
                    <p>12-10-1989</p>
                    <NavLink to="./edit.html"><img title="edit date of birth" src="/images/icons8-edit-24.png" alt="change date of birth"/></NavLink>
                </li>
                <li>
                    <img className="field-icon" src="/images/icons8-password-30.png" alt="password"/>
                    <p>**********</p>
                    <NavLink to="./confirm_email.html"><img title="edit password" src="/images/icons8-edit-24.png" alt="change password"/></NavLink>
                </li>
                <li>
                    <img className="field-icon" src="/images/icons8-bank-30.png" alt="bank"/>
                    <div className="bank-details">
                        <p>Test bank</p>
                        <p>Jide Johnson Joe</p>
                        <p>123456789</p>
                    </div>
                    <NavLink to="./edit.html"><img title="edit bank details"src="/images/icons8-edit-24.png" alt="change bank details"/></NavLink>
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

`

export default User;
