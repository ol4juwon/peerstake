import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import User from "../hooks/User"
import Stake from "../hooks/Stake"
import PeerIcon from "../assets/Peer Stake Icon.png" 
import PeerLogo from "../images/peer stake logo 1 1.png"
import claimIcon from "../assets/Group 75.png"
import closeIcon from "../images/Vector 3.png"
import disputeIcon from "../assets/Group 82.png"
import UnionIcon from "../assets/Union.png"
import  uploadIcon from "../images/icons8-file-30.png"
import stakersIcon from "../images/icons8-users-30.png"
import proofIcon from "../images/Vector 3.png"
const Stakes = () => {
    const {logout} = User();
    const {stake,dueStake} = Stake();
  
    const formatDate  = (rawDate) => {
        const date = new Date(rawDate);
        const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const dateString = `${day}/${month}/${year} ${hours}:${minutes}`;
          return dateString;
    }
    const claim_popup = document.querySelector('.claim_stake');
    const upload_popup = document.querySelector('.upload_file');
        const validation_popup = document.querySelector('.validation');
        const successful_popup = document.querySelector('.successful_claim');
        const failed_popup = document.querySelector('.failed_claim');
        const disputed_popup = document.querySelector('.disputed_claim')
        const dispute_rejected = document.querySelector('.dispute_rejected')
        const dispute_accepted = document.querySelector('.dispute_accepted')


    // const claim_popup = (e, stake) => {
    //     e.preventDefault();
    //     console.log(stake)

    // }
    function turn_on(popup) {
        popup.style.display = "flex";
    }

    function turn_off(popup) {
        popup.style.display = "none";
    }
    return (
        <Stakes.Wrapper>
            
            <ul className="menu">
        <li><NavLink className="menuItem" to="welcome.html">Home</NavLink></li>
        <li><NavLink className="menuItem" to="user.html">Profile</NavLink></li>
        <li><NavLink className="menuItem" to="create.html">Stake</NavLink></li>
        <li><NavLink className="menuItem" to="fund_wallet.html">Wallet</NavLink></li>
        <li><button className='menuitem' onClick={logout}>Sign Out</button></li>
    </ul>
    
    <div className="hero__sec">
        <div>
            <div className="icon">
                <img src={PeerIcon} alt=""/>
            </div>
            <div  className="nav">
                <NavLink  to="/welcome" id="size">
                <img src={PeerLogo}alt=""/>

                </NavLink>

                {/* <!-- <NavLink  to="#"> <img src="./assets/menu_black_24dp 1.png" alt=""/> </NavLink> --> */}
            </div>
           
        </div>
    </div>

    <div className="header">
        <p>Stakes</p>
        <div className="winners-header">
            <div className="yo">
                <img src={UnionIcon} alt=""/>
    
                <input type="search" placeholder=" Search" className="form_control"/>    
            </div>
        </div>
    </div>

 
    <div id="running--stakes" name ="running--stakes">
                <div className="stakes">
                    <div className="run--info">
                        <p>Running Stakes</p>
                        <span>{stake.length || 0 }</span>
                    </div>
                </div>
            </div>
    <div className="running-stakes" >
    <div className="stakes-invite pad" >
        <table className="table">
           
            <thead className='bg'>
                    <th id="td"> SN</th>
                    <th id="td">Amount</th>
                    <th id="td">Due Date</th>
                    <th id="td">Stake Decider</th>
            </thead>
    <tbody id="invites--bg">
        {
               stake.map((stake, index) => {
                   const date = formatDate(stake.dueDate);
                     return (
                      <tr>
                            <td>{index+1}</td>
                            <td>{stake.amount}</td>
                            <td>{date}</td>
                            <td>{stake.stake_decider}</td>
                      </tr>
                     )
                })
           }
        </tbody>
                  
        </table>
    
    </div>
 </div>
    
        <div className="stakes">
            <div id="stake--invite" name ="stake--invite"></div>
            <div className="invites" >
                <p>Stake Invites</p>
                <span>10</span>
            </div>
        </div>
    
    <div className="stakes-invite">
      
        <table className="table">

           
            <th>
                <tr className="bg">
                    <td id="td"> SN</td>
                    <td id="td">From</td>
                    <td id="td">Stake</td>
                    <td id="td">Amount</td>
                    <td id="td">Due Date</td>
                    <td id="td">Stake Decider</td>
                    <td id="td">Accept</td>
                    <td id="td">reject</td>
                    
                </tr>
            </th>
    
           <tbody id="invites--bg">
                              <tr>
                   <td>10</td>
                   <td>Rita</td>
                   <td>Will this coin land heads or tails? </td>
                   <td>$100</td>
                   <td>29/11/21</td>
                   <td>Bode</td>
                   <td>
                    <NavLink  to="#"><img src="./assets/Group 3.png" alt=""/></NavLink>
                    
                    </td>
                    <td>
                        <NavLink  to="#"><img src="./assets/Group 4 (1).png" alt=""/></NavLink>

                    </td>
               </tr>
           </tbody>
        </table>
    
    </div>
   


    
        <div className="stakes">
            <div id="due--stakes" className="due--stakes"></div>
            <div className="due" >
                <p>Due Stakes</p>
                <span>{dueStake.length || 0}</span>
            </div>
        </div>
    

    <div className="stakes-invite pad" >
      
        <table className="table">

           
            <thead className='bg'>
                    <th id="td"> SN</th>
                    <th id="td">Amount</th>
                    <th id="td">Due Date</th>
                    <th id="td">Stake Decider</th>
                    <th id="td">Claim Stake</th>
                    <th id="td">Dispute Stake</th>
                    <th id="td">Status</th>
                    
                </thead>
    
           <tbody id="invites--bg">
               {
                   dueStake.map((dueStake, index) => {
                       const date = formatDate(dueStake.dueDate);
                    return (
                        <tr>
                        <td>{index+1}</td>
                        <td>{dueStake.amount}</td>
                        <td>{date} </td>
                        <td>{dueStake.name}</td>
                         <td>
                             <NavLink  to="#"><img onClick={(e) =>{turn_on(claim_popup)}} className="claim" src={claimIcon} alt=""/></NavLink>
                         </td>
                         <td>
                             <NavLink  to="#"><img onClick={(e) =>turn_on(upload_popup)} src={disputeIcon} alt=""/></NavLink>
     
                         </td>
                         <td>{dueStake.claimed? "Settled":"Not settled"}</td>
                    </tr>
                        )
                   })
               }
               
               
           </tbody>
        </table>
    
    </div>

    <footer>
        <div className="logo">
            <img src="./assets/peer stake logo 1 1.png" alt=""/>
        </div>

        <div className="links">
            <NavLink  to="#">About Us</NavLink>
            <NavLink  to="#">Contact Us</NavLink>
            <NavLink  to="#">Customer Support</NavLink>

        </div>

        <div className="linkss">
            <NavLink  to="#">Jobs</NavLink>
            <NavLink  to="#">Legal</NavLink>
        </div>
    </footer>
    <div className="cover claim_stake" onClick={(e)=>{turn_off(claim_popup)}}>
        <div className="card">
          <img className="close" src={closeIcon} onClick={(e) => turn_off(claim_popup)} alt=""/>
          <a className="proof" onClick={(e)=>turn_on(upload_popup)}>
              <img src={uploadIcon} alt=""/>
              <p>UPLOAD PROOF</p>
          </a>
          <a href="#" onClick={(e)=>turn_on(disputed_popup)}>
            <img src={stakersIcon} alt=""/>
            <p>ASK OTHER STAKERS TO CONFIRM</p>
          </a>
        </div>
    </div>
       <div className="cover upload_file">
         <div className="card">
           <img className="close" onClick={(e)=>turn_off(upload_popup)} src={proofIcon} alt=""/>
          <p>Please upload photo or video proof</p>
          <form action="">
            <input type="file" name="proof" className="proof"/>
            <input type="submit" value="upload" className="upload" onClick={(e)=>  turn_on(validation_popup)}/>
            </form>
        </div>
    </div>

    <div className="cover validation" onClick={(e)=>turn_off(validation_popup)}>
        <div className="card">
           <img className="close" src="/images/Vector 3.png" alt="" onClick={(e)=>turn_off(validation_popup)}/>
           <p>Your proof would be reviewed and confirmed soon.</p>
           <div onClick={(e)=>turn_on(successful_popup)} className="claim_successful">Continue</div>
         </div>
    </div>

     <div className="cover successful_claim" onClick={(e)=>turn_off(successful_popup)}>
         <div className="card">
           <img className="close" src="/images/Vector 3.png" alt="close" onClick={(e)=>turn_off(successful_popup)}/>
           <h3>Congratulations!</h3>
           <p>You have won this stake</p>
           <img className="success_img" src="/images/Tick success.png" alt=""/>
           <div> continue </div>
         </div>
     </div>

    <div className="cover failed_claim" onClick={(e)=>turn_off(failed_popup)}>
         <div className="card">
           <img className="close" src={closeIcon} alt=""/>
           <h3>Sorry!</h3>
           <p>Your proof does not validate this claim</p>
           <img className="failed_img" src="/images/icons8-cancel.svg" alt=""/>
           <div onClick={(e)=>turn_on(upload_popup)}> Try Again </div>
         </div>
    </div>

    <div className="cover disputed_claim" onClick={(e)=>turn_off(disputed_popup)}>
         <div className="card">
           <img className="close" src={closeIcon} alt=""/>
           <h3>Sorry!</h3>
           <p>Your claim has been disputed</p>
           <p>Upload proof of win</p>
           <img className="failed_img" src="/images/icons8-cancel.svg" alt=""/>
           <div onClick={(e)=>turn_on(upload_popup)}> Upload Proof </div>
         </div>
    </div>

    <div className="cover dispute_rejected" onClick={(e)=>turn_off(dispute_rejected)}>
         <div className="card">
           <img className="close" src="/images/Vector 3.png" alt=""/>
           <h3>Sorry!</h3>
           <p>Your dispute has been rejected</p>
           <img className="failed_img" src="/images/icons8-cancel.svg" alt=""/>
           <div onClick={(e)=>turn_off(dispute_rejected)}> Continue </div>
         </div>
     </div>

    <div className="cover dispute_accepted" onClick={(e)=>turn_off(dispute_accepted)}>
         <div className="card">
           <img className="close" src="/images/Vector 3.png" alt="close" onClick={(e)=>turn_off(successful_popup)}/>
           <h3>Congratulations!</h3>
           <p>Thank you for your submission</p>
           <p>Resolution in progress</p>
           <img className="success_img" src="/images/Tick success.png" alt=""/>
           <div onClick={(e)=>turn_off(dispute_accepted)}> continue </div>
         </div>
     </div>
{/* */}

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


.popup-wrapper{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    display: none;
    z-index:1;
}


.popup{
    font-family: 'Roboto' , sans-serif;
    text-align: center;
    width: 100%;
    max-width: 200px;
    margin: 10% auto ;
    padding: 20px;
    background: #ffffff;
    position: relative;
    z-index: 1;

}

.popup a{
    background: #ffffff;
    color: #7E57C2;;
    text-decoration: none;
    padding: 6px 10px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #7e57c2;
    border-radius: 6px;
    
}

.popup > a{
    padding-right: 2px;
}


.popup-close{
    position: absolute;
    top: 5px;
    right: 8px;
    cursor: pointer;
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
    width: 100vw;
    background: rgb(196, 196, 196, 0.1);
    /* opacity: 0.1; */
    border-radius: 6px;
    padding: 10px 10px 11px 10px;
  
}


.run--info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(356.95deg, #138B46 2.36%, #24D570 83.13%);
    border-radius: 3px;
    /* Peer 5 */
    
    /* border: 1px solid #E6E6E6; */
    box-sizing: border-box;
    /* border-radius: 3px; */
    padding: 15px;
    width: 100%;
    margin-top: 10px;
    letter-spacing: 1px;
}

.run--info p{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */
    
    display: flex;
    align-items: flex-end;
    
    /* ffffff */
    
    color: #FFFFFF;
}

.run--info span{
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(235, 87, 87, 0.2);
    /* padding: 5px; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #219653;
    
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


.running-stakes{
    background: #F9F9F9;
    border-radius: 11px;
    width: 100vw;
    margin: 0 auto;
}


.table{
    width: 100vw;
    border-collapse: collapse;
}

.table td{
    text-align: center;
    white-space: nowrap;
}


.bg{
    background: #FFFFFF;
    width: 100vw;
}

#td{
    color:  #434343;   
}


td{
    /* border: 1px solid #dddddd; */
    border-bottom: 1px solid  #E5E5E5;
    text-align: left;
    padding:  15px;
    /* display: inline-flex; */
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    // line-height: 12px;
    
    color: #828282;

}

#invites--bg{
    background: #f9f9f9;
}
  
.stakes-invite{
    /* background: #F9F9F9; */
    border-radius: 11px;
    // width: 95%;
    // margin: 0 auto;
    height: 50vh;
}
 

.invites{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(356.95deg, #4D2B90 2.36%, #7E57C2 83.13%);
    border-radius: 3px;
    /* Peer 5 */
    
    /* border: 1px solid #E6E6E6; */
    box-sizing: border-box;
    /* border-radius: 3px; */
    padding: 15px;
    width: 100%;
    margin-top: 10px;
    letter-spacing: 1px;
}



.invites p{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */
    
    display: flex;
    align-items: flex-end;
    
    /* ffffff */
    
    color: #FFFFFF;
}

.invites span{
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(235, 87, 87, 0.2);
    /* padding: 5px; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #7E57C2;
    
}



.due{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(356.95deg, #D43838 2.36%, #F75C5C 83.13%);
    border-radius: 3px;
    /* Peer 5 */
    
    /* border: 1px solid #E6E6E6; */
    box-sizing: border-box;
    /* border-radius: 3px; */
    padding: 15px;
    width: 100%;
    margin-top: 10px;
    letter-spacing: 1px;
}

.due p{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */
    
    display: flex;
    align-items: flex-end;
    
    /* ffffff */
    
    color: #FFFFFF;
}

.due span{
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(235, 87, 87, 0.2);
    /* padding: 5px; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #EB5757;
    
}


.pad{
    margin-bottom: 30px;
}

@media only screen and (max-width:700px) {
    .stakes-invite{
        overflow: auto;
        
    }
}

@media only screen and (min-width:700px) {
    .stakes-invite{
        overflow: auto;
        height: 70vh;
    }
}
@media only screen and (min-width:900px) {
    .stakes-invite{
        overflow: auto;
        height: 100vh;
    }
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

.claim_stake{
    display: none;
}

.upload_file{
    display: none;
}

.validation{
    display: none;
}

.successful_claim{
    display: none;
}

.failed_claim{
    display: none;
}

.disputed_claim{
    display: none;
}

.dispute_rejected{
    display: none;
}

.dispute_accepted{
    display: none;
}

.card{
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


.claim_stake .card a{
    background-color: #7E57C2;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    width: 80%;
    padding: 8%;
    margin-bottom: 10%;
    text-align: center;
    cursor: pointer;
    /* min-height: 50px; */
    border-radius: 5px;
    /* margin-bottom: 3%; */
    /* outline: none; */
    /* cursor: pointer; */
}

.claim_stake .card a img{
    margin-bottom: 5px;
}

.upload_file .card p{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #828282;
    text-align: center;
    width: 80%;
  }

.upload_file .card form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.upload_file .card input{
width: 80%;
/* height: 40px; */
border: 1px solid #e6e6e6;
background-color: white;
border-radius: 5px;
/* padding: 3%; */
margin: 10% 0;
}

.upload_file .card input[type=submit]{
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
  }

.validation .card p{
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #828282;
    text-align: center;
    width: 80%;
}

.validation .card div{
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
    margin: 10% 0;
    cursor: pointer;
  }

.successful_claim .card , 
.failed_claim .card , 
.disputed_claim .card ,
.dispute_rejected .card ,
.dispute_accepted .card
{
    height: 60%;
}

.successful_claim .card h3, 
.failed_claim .card h3, 
.disputed_claim .card h3,
.dispute_rejected .card h3,
.dispute_accepted .card h3
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

.successful_claim .card p, 
.failed_claim .card p, 
.disputed_claim .card p,
.dispute_rejected .card p,
.dispute_accepted .card p
{
    font-style: normal;
    width: 80%;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    color: #828282;
}

.successful_claim .card .success_img, 
.failed_claim .card .failed_img,
.disputed_claim .card .failed_img,
.dispute_rejected .card .failed_img,
.dispute_accepted .card .success_img
{
    margin: 10% 0;
}

.successful_claim .card div, 
.failed_claim .card div, 
.disputed_claim .card div,
.dispute_rejected .card div,
.dispute_accepted .card div
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
    .successful_claim .card h3, 
    .failed_claim .card h3,
    .disputed_claim .card h3,
    .dispute_rejected .card h3,
    .dispute_accepted .card h3
    {
        font-size: 22px;
        margin-bottom: 5%;
    }

    .successful_claim .card .success_img, 
    .failed_claim .card .failed_img,
    .disputed_claim .card .failed_img,
    .dispute_rejected .card .failed_img,
    .dispute_accepted .card .success_img
    {
        margin: 8% 0;
    }

    .successful_claim .card div, 
    .failed_claim .card div,
    .disputed_claim .card div,
    .dispute_rejected .card div,
    .dispute_accepted .card div
    {
        font-size: 16px;
        min-height: 40px;
    }
}

@media screen and (max-height: 570px) {
    .successful_claim .card h3, 
    .failed_claim .card h3,
    .disputed_claim .card h3,
    .dispute_rejected .card div,
    .dispute_accepted .card div
    {
        font-size: 19px;
        margin-bottom: 5%;
    }

    .successful_claim .card p, 
    .failed_claim .card p,
    .disputed_claim .card p,
    .dispute_rejected .card p,
    .dispute_accepted .card p
    {
        font-size: 14px;
    }

    .successful_claim .card .success_img, 
    .failed_claim .card .failed_img,
    .disputed_claim .card .failed_img,
    .dispute_rejected .card .failed_img,
    .dispute_accepted .card .success_img
    {
        margin: 10% 0;
        height: 125px;
    }

    .successful_claim .card div, 
    .failed_claim .card div,
    .disputed_claim .card div,
    .dispute_rejected .card div,
    .dispute_accepted .card div
    {
        font-size: 16px;
        min-height: 40px;
    }
}

`;

export default Stakes;
