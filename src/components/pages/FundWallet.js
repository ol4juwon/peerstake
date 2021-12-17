import React from 'react';
import styled from 'styled-components';
import Hamburger from "../assets/menu_black_24dp 1.png";
import User from  "../hooks/User"
import image808 from "../images/_1930224111808.png"
import debitCard from "../images/icons8-debit-card-30.png"
import PeerLogo from "../assets/peer stake logo 1 1.png"
import bankIcon from "../images/icons8-bank-30.png" 
import { NavLink } from 'react-router-dom';
import swal from '@sweetalert/with-react';
const Fundwallet = () => {
    const {logout} = User()

    const clickDebit = (e) =>{
        e.preventDefault();
        swal(
            {
                title:"Enter Amount:",
                content: "input",
                button: {
                    text: "Continue",
                    closeModal: false,
                }
            }
        )
        .then(amount=> {
            if(!amount){
               return  swal(
                    {
                        title: "PAyment gateway",
                        
                    }
                )
            }
            swal({
                title: "done",
                icon: "Ok"
            })
        })
    }
    const user =JSON.parse( localStorage.getItem("user"))
    return (
        <Fundwallet.Wrapper>
                 <ul className="menu">
               
               <li><NavLink className="menuItem" to="/">Home</NavLink></li> 
              <li><NavLink className="menuItem" to="/user">Profile</NavLink></li>
              <li><NavLink className="menuItem" to="/create">Stake</NavLink></li>
              <li><NavLink className="menuItem" to="/fund_wallet">Wallet</NavLink></li>
              <li><i className="menuItem" onClick={logout}> Sign out</i></li>


              </ul> 
      <img src= {Hamburger} className="hamburger" alt="menu"/>



    <div className="header">
        <NavLink to="/welcome"><img src={image808} alt=""/></NavLink>
        {/* <!-- <NavLink to="#"><img src="/images/hamburger.png" alt=""></NavLink> --> */}
    </div>
    <div className="content">
        <div className="details">
            <div className="wallet-card">
                <h3>{`${user.first_name} ${user.last_name}`}</h3>
                <h2> 
                    <span className="space">
                        <span className="cent">₦</span> 
                        <span>{user.wallet.balance}</span>
                    </span>
                    {/* <span className="cent">.59</span>  */}
                </h2>
                {/* <!-- <h2>$3,200.<span className="cent">59</span> </h2> --> */}
                <h3>WALLET BALANCE</h3>
            </div>
            <ul>
                <li onClick={clickDebit}>
                    <NavLink to="#">
                        <img className="field-icon" src={debitCard} alt="Name"/>
                        <p>Debit card</p>
                    </NavLink>
                </li>
                <li onClick={clickDebit}>
                    <a>   <img className="field-icon" src={bankIcon}alt="bank transfer"/>
                        <p>Bank transfer</p>
                        </a>
                    
                </li>
                {/* <!-- <li>
                    <NavLink to="#">
                        <img className="field-icon" src="/images/icons8-bitcoin-30.png" alt="Email">
                        <p>Cryotocurrency</p>
                    </NavLink>
                </li> --> */}
            </ul>
        </div>
    </div>

    <footer>
        <div className="logo">
            <img src={PeerLogo} alt=""/>
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

    {/* <!-- popups section --> */}

    {/* <div className="cover deposit_amount">
        <div className="card">
          <img className="close" onclick="turn_off(deposit_amount);" src="/images/Vector 3.png" alt="">
          <p>Please enter amount to deposit</p>
          <form action="">
            <input type="text" name="amount" placeholder="$100">
            <div onclick="turn_off(deposit_amount);">Submit</div>
<!--             <input type="submit" value="Deposit"> -->
            <!-- <NavLink to="#">upload</NavLink> -->
          </form>
        </div>
    </div>

    <div className="cover success" onclick="turn_off(successful_popup);">
        <div className="card">
          <img className="close" src="/images/Vector 3.png" alt="close" onclick="turn_off(successful_popup);">
          <h3>Congratulations!</h3>
          <p>Your deposit was successful</p>
          <img className="success_img" src="/images/Tick success.png" alt="">
          <div> Continue </div>
        </div>
    </div>

    <div className="cover failed" onclick="turn_off(failed_popup);">
        <div className="card">
          <img className="close" src="/images/Vector 3.png" alt="" onclick="turn_off(failed_popup);">
          <h3>Sorry!</h3>
          <p>Your deposit was not successful</p>
          <img className="failed_img" src="/images/icons8-cancel.svg" alt="">
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Red+Hat+Display:wght@500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;

}

a{
    outline: none;
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
    top: 1.8rem;
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



    height: 100%;
    overflow: auto;
    width: 100%;
    position: relative;
    background: linear-gradient(0deg, rgba(144, 94, 238, 0.3), rgba(144, 94, 238, 0.3)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #7E57C2;



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
}

.details{
    display: flex;
    justify-content: center;
    /* margin-top: %; */
    /* margin-bottom: 5%; */
    flex-direction: column;
    font-weight: 500;
    font-size: 13px;
    color: #1d1d1d;
    width: 85%;
    max-height: 95%;
}

.wallet-card{
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
  
/* .user-card>img{
    margin: 10px 0;
    border-radius: 50%;
    width: 100px;
} */

.wallet-card h2{
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

.wallet-card h3{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.02em;
    font-variant: small-caps;
    color: #FFFFFF;
    padding: 30px 0;

}


.content ul{
    width: 100%;
    margin: 0 auto;
    border-radius: 6px;
    list-style: none;
    margin-bottom: 2%;
}

.content ul li{
    padding-bottom: 20px;
}

.content ul li a{
    display: flex;
    padding: 4% 3%;
    font-variant: small-caps;
    align-items: center;
    font-size: 15px;
    /* height: 4em; */
    border-bottom: 2px solid rgba(196, 196, 196, .5);
    text-decoration: none;
    background: rgba(196, 196, 196, .3);
}

.content ul li a .field-icon{
    margin-right: 5% ;
}

.content ul li a p{
    flex: 1;
    color: black;
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

.deposit_amount{
    display: flex;
}

.cover .card{
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
    margin: 10% 0;
}

.success .card div, 
.failed .card div,
.deposit_amount div
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
    margin-bottom: 5px;
    /* outline: none; */
    cursor: pointer;
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
        margin: 8% 0;
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
        margin: 8% 0;
        height: 125px;
    }

    .success .card div, 
    .failed .card div
    {
        font-size: 16px;
        min-height: 40px;
    }
}

.deposit_amount .card p{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #828282;
    text-align: center;
    width: 80%;
  }

.deposit_amount .card form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.deposit_amount .card input{
    width: 80%;
    height: 50px;
    border: 1px solid #e6e6e6;
    background-color: white;
    border-radius: 5px;
    padding: 3%;
    margin: 5% 0;
}

.deposit_amount .card input[type=submit]{
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
    outline: none;
    cursor: pointer;
  }

`

export default Fundwallet;
