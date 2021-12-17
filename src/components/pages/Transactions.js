import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import hamburger from  "../assets/menu_black_24dp 1.png"
import PeerIcon from "../assets/Peer Stake Icon.png"
import PeerLogo from "../assets/peer stake logo 1 1.png"
import wallet from "../images/Group 110.png"
import withdraw from "../images/down.png"
import searchIcon from "../assets/Union.png"
import depositIcon from "../images/Group 48.png"
import withdrawalIcon from "../images/Group 39.png"
import wonIcon from "../images/Group 48.png"
import plaid from "../assets/paid_black_24dp 1.png"
import Transaction from "../hooks/Transactions"
const Transactions = () => {
const {transactions} = Transaction();

const [user,setUser] = useState("")
    useEffect( ()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
    },[])

  
    return (
        <Transactions.Wrapper>
               <ul className="menu">
        <li><NavLink className="menuItem" to="welcome.html">Home</NavLink></li>
        <li><NavLink className="menuItem" to="user.html">Profile</NavLink></li>
        <li><NavLink className="menuItem" to="create.html">Stake</NavLink></li>
        <li><NavLink className="menuItem" to="fund_wallet.html">Wallet</NavLink></li>
        <li><NavLink className="menuItem" to="email_login.html">Sign out</NavLink></li>
      </ul>
      <img src={hamburger} className="hamburger" alt=''></img>



<div className="hero__sec">
    <div>
        <div className="icon">
            <img src={PeerIcon} alt=""/>
        </div>
        <div  className="nav">
            <NavLink to="/welcome" id="size">
            <img src={PeerLogo} alt=""/>
                
            </NavLink>

            {/* <!-- <NavLink to="#"> <img src="./assets/menu_black_24dp 1.png" alt=""/> </NavLink> -- */}
        </div>
       
    </div>
</div>


<div className="hero__content">
    <h2> 
        <span className="space">
            <span className="cent">₦</span> 
            <span>{user.wallet?.balance}</span>
        </span>
        <span className="cent"></span> 
    </h2>
    <h3>WALLET BALANCE</h3>
    <div className="btn" >
        <NavLink to="/fundwallet" className="button">
            <img src={wallet} alt=""/>
            <p>FUND YOUR WALLET</p>
        </NavLink>
        <NavLink to="/withdrawal" className="button">
            <img src={withdraw} alt=""/>
            <p>WITHDRAW</p>
        </NavLink>
    </div>
    <img src={plaid} alt=""/>
</div>



<div className="stakes">
    <div className="header">
        <p>stakes</p>
        <div className="winners-header">
            <div className="yo">
                <img src={searchIcon} alt=""/>
    
                <input type="search" placeholder=" Search" className="form_control"/>    
            </div>
        </div>
    </div>

    <div >
        {
            transactions.map((items, index)=>{
                const icon = (items.type === "deposit"?depositIcon :(items.type === "withdrawal"?withdrawalIcon:(items.type == "funded"?withdrawalIcon:wonIcon))  )
              console.log(index,icon);
              return( <div className="run--info">
                    {/* {console.log(items.type)} */}
                <img src={icon} alt="" />
                <div>
                    <div>
                        <p id="font">{items.type}</p>
                        <p>{items.description}</p>
                    </div>
                    <span id={items.type=== "withdrawal"? "color":(items.type === "funded"? "color": "")} >{` ${items.currency}${items.amount}`}</span>
                </div>
            </div>)
            })
        }
    </div>

    <NavLink to="#">
        <h3>See All</h3>
    </NavLink>
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



<script src="./javascript/hamburger.js"></script>

        </Transactions.Wrapper>
    );
}

Transactions.Wrapper = styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

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


a{
    text-decoration: none;
}



.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    position: relative;
    padding: 5%;

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

.icon img{
    /* width:150px; */
    /* transform: scale(0.7); */
    width: 70%;
    height: 70%;
}



.hero__sec{
    background: linear-gradient(356.95deg, #4D2B90 2.36%, #7E57C2 83.13%);
    border-radius: 0px 0px 20px 20px;
    /* height: 70vh; */
    background-repeat: no-repeat;
    
}



.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    padding-top: 8%;
    padding-bottom: 5%;
}

.header p{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.02em;
    color:#7E57C2;
}





.yo{
    /* position: relative; */
    text-align: end;
}

.yo img{
    position: absolute;
    padding: 10px 5px 0px 10px;
}




.yo input{
    padding: 7px 10px 7px 35px;
    background: #F9F9F9;
    border: 1px solid #E6E6E6;
    box-sizing: border-box;
    border-radius: 50px;
    color: #BDBDBD;
    width: 60%;
    outline: none;
    
}



.hero__content{
    text-align: center;
    background: linear-gradient(356.95deg, #4D2B90 2.36%, #7E57C2 83.13%);
    border-radius: 24px;
    width: 85%;
    margin: 0 auto;
    margin-top: 10%;
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

.btn{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
}

.btn p{
    padding-left: 4px;
}



.button {
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: flex-end;
    align-items: center;
    background: #FFFFFF;
    font-variant: small-caps;
    padding: 7px;
    border-radius: 50px;

}

.hero__content div{
    margin-bottom: 20px;

}


.stakes{
    background: rgb(210, 202, 228, 0.1);
    /* opacity: 0.1; */
    border-radius: 6px;
    width: 95%;
    margin: 0 auto;
    margin-top: 10%;
}




.run--info{
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    /* background: #FFFFFF; */
    /* Peer 5 */
    
    /* border: 1px solid #E6E6E6; */
    box-sizing: border-box;
    border-radius: 3px;
    padding: 5px;
    width: 100%;
    /* margin-top: 20px; */
}

.run--info p{
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 9px;
    line-height: 11px;
    /* identical to box height */
    
    display: flex;
    align-items: flex-end;
    
    /* Gray 3 */
    
    color: #828282;
}


#font{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    /* display: flex; */
    /* align-items: flex-end; */
    
    /* Dark Grey */
    
    color: #434343;
}

.run--info > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 3%;
    width: 100%;
}

.run--info span{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    text-align: right;
    
    /* Green 1 */
    
    color: #219653;
}

#color{
    color: #EB5757;
}


.stakes h3{
    font-family: 'Roboto' , sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */
    
    /* display: flex; */
    /* align-items: flex-end; */
    text-align: center;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    color: #7E57C2;
    padding-bottom: 5%;
    margin-bottom: 5%;
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


@media only screen and (max-width:360px) {
    .button {
        font-size: 9px;
    }
}
`

export default Transactions;
