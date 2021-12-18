import React from 'react';
import styled from 'styled-components';
import background from "../assets/[Downloader\ 2.png";
import NavLink from 'react-router-dom/NavLink';
import logo from "../assets/Peer Stake Icon.png"
const Test = () => {
    return (
        <Test.Wrapper>
             <ul className="menu">
               
               <li><NavLink className="menuItem" to="/">Home</NavLink></li> 
              <li><NavLink className="menuItem" to="/user">Profile</NavLink></li>
              <li><NavLink className="menuItem" to="/create">Stake</NavLink></li>
              <li><NavLink className="menuItem" to="/fundwallet">Wallet</NavLink></li>
              <li><i className="menuItem" > Sign out</i></li>
              </ul> 
      <img src={logo} className="hamburger" alt=""/>
            <div className='hero--sec'>
            
            <div><div className="icon">
                <img src={logo} alt=""/>
            </div>
                </div>
                <div className="hero__content">
            <p>Welcome! <span id="name">Jide</span></p>
            <a href="user.html">
                <img src="./assets/[Downloader 1.png" alt=""/>
            </a>
            <h2> 
                <span classNam="space">
                    <span className="cent">$</span> 
                    <span>3,200</span>
                </span>
                <span className="cent">.59</span> 
            </h2>
            <h3>WALLET BALANCE</h3>
            <div>
                <a href="create.html" id="hero-content">CREATE STAKE</a>
            </div>
            {/* <!-- <img src="./assets/paid_black_24dp 1.png" alt=""> --> */}
        </div>
            </div>
            <div className="stakes">
                <p>Stakes</p>
        <div className="stakes--card">
            <NavLink to="/stakes" >
                <div className="card--1">
                    <p>{ 0}</p>
                    <h2>Running</h2>
                </div>
            </NavLink>
           <NavLink to="/Stakes" >
                <div className="card--2">
                    <p>2</p>
                    <h2>Request</h2>
                </div>
           </NavLink>
            <NavLink to="/Stake">
                <div className="card--3">
                    <p>{1}</p>
                    <h2>Due</h2>
                </div>
            </NavLink>
            
        </div>
    </div>
    <div className="fund">
        <NavLink to="/fundwallet">
            <div className="fund--wallet">
                {/* <img src={logo} alt=""/> */}
                <p>Fund Your Wallet</p>
            </div>
        </NavLink>
        <NavLink to="/transactions">
            <div className="transaction">
                {/* <img src={transactionIcon} alt=""/> */}
                <p>View transactions</p>
            </div>
        </NavLink>
        
    </div>
    <footer>
        <div className="logo">
            <img src={logo} alt=""/>
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
        </Test.Wrapper>
    );
}
Test.Wrapper = styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

}

.hero--sec{
    background: linear-gradient(356.95deg, #4D2B90 2.36%, #7E57C2 83.13%);
    border-radius: 0px 0px 20px 20px;
    //  height: 70vh; 
    background-repeat: no-repeat;
    // padding-bottom: 10px;
    .icon{
        position: absolute;
        top: 0;
        left: 0;
    }
    .cent{
        font-family: 'Roboto' ,sans-serif;
        font-size: 25px;
        font-weight: 400;
        vertical-align: -webkit-baseline-middle;
        margin-left: -14px;
        /* letter-spacing: 0.03em; */
    }
    .hero__content{
        text-align: center;
        img{
        border-radius: 50%;
        background: #FFFFFF;
        /* margin-bottom: 20px; */
        }
        div{
            /* margin-bottom: 20px; */
            padding-bottom: 15%;
        
        }
        p{
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
        h2{
            font-family: 'Roboto' ,sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 56px;
          
            letter-spacing: 0.03em;
            
            /* ffffff */
            
            color: #FFFFFF;
            /* padding-bottom: 5px; */
        
        }
        h3{
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
    }
     
    .space{
        display: inline-flex;
    }
    #name{
        font-weight: 700;
    }
    
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
    padding-bottom: 30px; 

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
    .showMenu {
        transform: translateY(0);
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


  a{
    text-decoration: none;
}

  .stakes{
    margin-top: 20px;
    background: rgb(196, 196, 196, 0.1);
    /* opacity: 0.1; */
    border-radius: 6px;
    padding: 20px;
    width: 95%;
    margin-left: 2.5%;
    p{
        font-family: 'Roboto' ,sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        /* identical to box height */
        
        color: #7E57C2;
        letter-spacing: -0.02em;
    }
    .stakes--card{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        
        .card--1{
            background: #FFFFFF;
            box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            padding: 20px 22px;
            p{
                font-family: 'Roboto' ,sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 64px;
                line-height: 75px;
               
                text-align: center;
                letter-spacing: -0.02em;
                
                /* Green 1 */
                
                color: #219653;
                
            }
            h2{
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                display: flex;
                // align-items: flex-end;
                text-align: center;
                text-transform: capitalize;
                
                /* Green 1 */
                
                color: #219653;
            }
        }
        .card--2{
            background: #FFFFFF;
            box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            padding: 20px 22px;
            p{
                font-family: 'Roboto' ,sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 64px;
                line-height: 75px;
               
                text-align: center;
                letter-spacing: -0.02em;
                
                /* purple 1 */
             
                color: #7E57C2;
            }
            h2{
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                display: flex;
                align-items: flex-end;
                text-align: center;
                text-transform: capitalize;
                
                /* Green 1 */
                
                color: #7E57C2;
            }
        }
        .card--3{
            background: #FFFFFF;
            box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            padding: 20px 22px;
            p{
                font-family: 'Roboto' ,sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 64px;
                line-height: 75px;
               
                text-align: center;
                letter-spacing: -0.02em;
                
                /* purple 1 */
             
                color: red;
            }
            h2{
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                display: flex;
                align-items: center;
                text-align: center;
                text-transform: capitalize;
                
                /* Green 1 */
                
                color: red;
            }
        }
    }
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
    background: linear-gradient(356.95deg, #4D2B90 2.36%, #7E57C2 83.13%);
    border-radius: 6px;
    padding: 10px 12px;
    p {
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
}

.transaction{
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border-radius: 6px;
    border: 1px solid #7E57C2;
    padding: 10px 12px;
    p{
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
}
.logo{
    margin-top: 3rem;
    margin: auto;
    width: 25%;
    img{
        padding-top: 30%;
        width: 100%;
    }
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
 a{
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
}
.linkss{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    margin: 0 auto;
    padding-top: 3%;
    padding-bottom: 10%;

 a{
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
}
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    position: relative;
    padding-top: 5%;
 img{
    width: 25%;
}}
`

export default Test;
