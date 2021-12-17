import React, {  useState } from 'react';
import styled from 'styled-components';
import User from "../hooks/User";
import swal from 'sweetalert';
import PeerLogo from "../images/_1930224111808.png"
import Hamburger from "../images/hamburger.png"
import { NavLink } from 'react-router-dom';
import closeButton from "../images/Vector 3.png"
const Editprofile = () => {
   const {updateProfile,user} = User();
   
    const [first_name, setFirst_name] = useState(`${user?.first_name}`);
    const [last_name, setLast_name] = useState(`${user?.last_name}`);
    const [username, setUsername] = useState(`${user?.username}`);
    const [email, setEmail] = useState(`${user?.email}`);
    // const [password, setPassword] = useState("");
    // const [dob, setDob] = useState("");
    console.log("user:", user)  
    onsubmit = async  (e) => {
        e.preventDefault();
      const response = await  updateProfile({id:user?._id,first_name, last_name, username, email});
      console.log("response2:", response)
if(response.code === 0){
    swal("Profile updated successfully", {
        icon: "success",
      });
}
    }

    return (
        <Editprofile.Wrapper>
               <div className="header">
        <NavLink to="welcome.html"><img src={PeerLogo} alt=""/></NavLink>
         <NavLink to="#"><img src={Hamburger} alt=""/></NavLink>
    </div>
    <div className="content">
        <form action="" method="POST">
            <NavLink to="/user" className="close"><img src={closeButton} alt=""/></NavLink>
            <h2>Edit</h2>
            <div className="inputs">
                <label htmlFor="firstname" >First Name</label><br/>
                <input type="text" id="firstname" value={first_name} onChange={(e)=> {setFirst_name(e.target.value)}} name="firstname" placeholder={user?.first_name}/>
            </div>
            <div className="inputs">
                <label htmlFor="lastname" >Last Name</label><br/>
                <input type="text" id="lastname" name="lastname" value={last_name} onChange={(e)=> {setLast_name(e.target.value)}} placeholder={user?.last_name}/>
            </div>
            <div className="inputs">
                <label htmlFor="username" >Username</label><br/>
                <input type="text" id="username" name="username" value={username} onChange={(e)=> {setUsername(e.target.value)}} placeholder={user?.username}/>
            </div>
            <div className="inputs">
                <label htmlFor="email">Email</label><br/>
                <input type="email" id="email" name="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} placeholder={user?.email}/>
            </div>
            <div className="inputs">
                <label htmlFor="dob">Date of Birth</label><br/>
                <input type="date" id="dob" name="dob" value={user?.dob}/>
            </div>
            <div className="inputs">
                <label htmlFor="account-name">Bank Account Name</label><br/>
                <input type="text" id="account-name" name="account-name" placeholder="Your bank account name"/>
            </div>
            <div className="inputs">
                <label htmlFor="bank">Bank</label><br/>
                <select name="bank" id="bank">
                    <option value="none">Select a bank</option>
                    <option value="GTCO">GTCO</option>
                    <option value="First Bank">First Bank</option>
                    <option value="UBA">UBA</option>
                </select>
            </div>
            <div className="inputs">
                <label htmlFor="account-number">Bank Account Number</label><br/>
                <input type="text" id="account-number" name="account-number" placeholder="Your bank account number"/>
            </div>
            <button className="submit" onClick={onsubmit}>Update </button><br/>
        </form>
    </div>


    <script src="./javascript/hamburger.js"></script>
            
        </Editprofile.Wrapper>
    );
}
Editprofile.Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Red+Hat+Display:wght@500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;

}

    height: 100%;
    overflow: auto;
    width: 100%;
    position: relative;
    background: linear-gradient(0deg, rgba(144, 94, 238, 0.3), rgba(144, 94, 238, 0.3)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #7E57C2;



input{
    outline: none;
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
    top: 1.2rem;
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


.header{
    width: 85%;
    height: 70px;
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

form{
    display: flex;
    margin-top: 10%;
    margin-bottom: 5%;
    flex-direction: column;
    font-weight: 500;
    font-size: 13px;
    color: #1d1d1d;
    width: 85%;
    max-height: 95%;
}

form h2{
    font-size: 18px;
    padding-bottom: 8%;
}

.inputs{
    padding-bottom: 5%;
}

.inputs label{
    display: inline-block;
    padding-bottom: 2%;
}

.inputs label span{
    font-style: italic;
    color: #828282;
}

.close{
    align-self: flex-end;
}

.inputs input, select{
    width: 100%;
    height: 50px;
    border: 1px solid #e6e6e6;
    background-color: white;
    border-radius: 5px;
    padding: 3%;
}

.submit{
    background-color: #A695C8;
    color: #fff;
    font-weight: 400;
    font-size: 15px;
    min-height: 50px;
    border: none;
    border-radius: 5px;
    margin-bottom: 3%;
    outline: none;
    cursor: pointer;
}

.terms_conditions{
    display: flex;
    align-items: center;
}

#terms{
    margin: 0 10px;
    border: 2px solid black;
}

.terms{
    font-size: 11px;
    font-weight: 400;
    color: #828282;
}

@media(max-height: 760px) {
    form{
        font-weight: 500;
        font-size: 12px;
        margin-top: 5%;
    }

    form h2{
        font-size: 16px;
        padding-bottom: 5%;
    }

    .inputs{
        line-height: 1;
    }

    .inputs input, select{
        height: 40px;
    }

    .submit{
        font-size: 14px;
        min-height: 45px;
        margin-bottom: 3%;
    }
}
`
export default Editprofile;
