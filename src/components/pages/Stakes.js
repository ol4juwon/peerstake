import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import User from "../hooks/User"
const Stakes = () => {
    const {logout} = User();
        
    return (
        <Stakes.Wrapper>
            
            <ul className="menu">
        <li><NavLink className="menuItem" to="welcome.html">Home</NavLink></li>
        <li><NavLink className="menuItem" to="user.html">Profile</NavLink></li>
        <li><NavLink className="menuItem" to="create.html">Stake</NavLink></li>
        <li><NavLink className="menuItem" to="fund_wallet.html">Wallet</NavLink></li>
        <li><NavLink className="menuItem" onClick={logout}>Sign Out</NavLink></li>
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
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

}

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


.stakes{
    margin-top: 20px;
    background: rgb(196, 196, 196, 0.1);
    /* opacity: 0.1; */
    border-radius: 6px;
    padding: 20px;
    width: 95%;
    margin-left: 2.5%;
}

.run{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.run p{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */
    
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.02em;
    
    /* Green 1 */
    
    color: #219653;
    
}

.run span{
    background: #219653;
    box-shadow: 0px 4px 4px rgba(51, 166, 83, 0.17);
    /* padding: 5px; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */


    letter-spacing: -0.02em;

    /* ffffff */

    color: #FFFFFF;

}

.run--info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    /* Peer 5 */
    
    /* border: 1px solid #E6E6E6; */
    box-sizing: border-box;
    border-radius: 3px;
    padding: 15px;
    width: 100%;
    margin-top: 20px;
}

.run--info p{
    font-family: 'Roboto' , sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    
    /* Dark Grey */
    
    color: #434343;
    /* white-space: nowrap; */
}


.invites{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.invites p{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */
    
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.02em;
    
    /* Green 1 */
    
    color: #7E57C2;
    
}

.invites span{
    background: #7E57C2;
    box-shadow: 0px 4px 4px rgba(51, 166, 83, 0.17);
    /* padding: 5px; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */


    letter-spacing: -0.02em;

    /* ffffff */

    color: #FFFFFF;

}


.invites--info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    /* Peer 5 */
    
    /* border: 1px solid #E6E6E6; */
    box-sizing: border-box;
    border-radius: 3px;
    padding: 15px;
    width: 100%;
    margin-top: 20px;
}

.invites--info p{
    font-family: 'Roboto' , sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    
    /* Dark Grey */
    
    color: #434343;
    /* white-space: nowrap; */
}

.invites--info h1{
    background: linear-gradient(0deg, rgba(144, 94, 238, 0.3), rgba(144, 94, 238, 0.3)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #7E57C2;
    border-radius: 6px;
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    
    /* ffffff */
    
    color: #FFFFFF;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    /* width: 15%; */
    /* padding: 5px; */
}

.invites--info span{
    color: #7E57C2;
    font-weight: bold;
    
}


.expired{
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.expired p{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */
    
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.02em;
    
    /* Green 1 */
    
    color: #EB5757;
    
}

.expired span{
    background: #EB5757;
    box-shadow: 0px 4px 4px rgba(51, 166, 83, 0.17);
    /* padding: 5px; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */


    letter-spacing: -0.02em;

    /* ffffff */

    color: #FFFFFF;

}


.expired--info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    /* Peer 5 */
    
    /* border: 1px solid #E6E6E6; */
    box-sizing: border-box;
    border-radius: 3px;
    padding: 15px;
    width: 100%;
    margin-top: 20px;
}

.expired--info p{
    font-family: 'Roboto' , sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    
    /* Dark Grey */
    
    color: #434343;
    /* white-space: nowrap; */
}

.expired--info h1{
    background: #EB5757;
    border-radius: 6px;
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    
    /* ffffff */
    
    color: #FFFFFF;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    /* width: 15%; */
    /* padding: 5px; */
}

.expired--info span{
    color: #eb5757;
    font-weight: bold;
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


@media only screen and (max-width:370px) {
    .run--info p{
        font-size: 11px;
    }
    .invites--info p{
        font-size: 11px;
    }
    .expired--info p{
        font-size: 11px;
    }
}
`;

export default Stakes;
