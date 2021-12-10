import { NavLink } from "react-router-dom";
import {useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import moment from "moment";
const Test =require( "../images/_1930224111808.png");

const BASEURL = process.env.REACT_APP_BASEURL
const Signup = () =>   {
    const date = new Date();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    // const [address, setAddress] = useState('');
    const [gender,setGender ] = useState('');
    const [dob,setDob] =useState('');
    const onsubmit = (e) => {
        e.preventDefault();
        console.log("dob",dob)
        const DOB = moment(dob.valueAsNumber).format("DD/MM/YYYY"); 
        register({first_name:firstName,last_name:lastName,dob:DOB,phone_number:phone,password, confirm_password: password, email, username,gender});
    }

    const register = async (payload) =>{
        console.log(payload,BASEURL);
        const data = JSON.stringify(payload);
        const config = {
            method: "POST",
        url: `${BASEURL}/auth/register`,
        headers: { 
                'Content-Type': 'application/json'
            },
        data : data   
        }
        try{
        console.log("config",config);
        const response  = await axios(config).then(res => res.data).catch(function (error) {
            // console.log(error);
          });
          console.log("response",response,response.error);
        if(response.user){
            alert("User registered successfully");
            window.location.href = '/login';
        }
        console.log({response});
        if(response.message){
            alert("User registration failed. \n Reason:"+response.message);
        }
        }catch(error){  
            console.log(error);
          }
        

    }
    return(
        <Signup.Wrapper>
            <div className="header">
             <NavLink to="/"><img src={Test} alt="" id="testing-form"/></NavLink>
        {/* <!-- <a href="#"><img src="/images/Vector.png" alt=""></a> --> */}
            </div>
            <div className="content">
                <form onSubmit={onsubmit}>
            <NavLink to="#" className="close"><img src="/images/Vector 3.png" alt=""/></NavLink>
            <h2>Sign up</h2>
            <div className="inputs">
                <label htmlFor="firstname" >First Name</label><br/>
                <input type="text" value={firstName} required name="firstname" placeholder="First name" onChange={(e)=>{setFirstName(e.target.value)}}/>
            </div>
            <div className="inputs">
                <label htmlFor="lastname" >Last Name</label><br/>
                <input type="text" value={lastName} required onChange={(e)=> {setLastName(e.target.value)}} name="lastname" placeholder="Last name"/>
            </div>
            <div className="inputs">
                <label htmlFor="email">Email</label><br/>
                <input type="email" value={email} required onChange={(e) => {setEmail(e.target.value)}} id="email" name="email" placeholder="Your email"/>
            </div>
            <div className="inputs">
                <label htmlFor="email">Phone Number:</label><br/>
                <input type="phone" value={phone} required onChange={(e) => {setPhone(e.target.value)}} id="phone" name="phone" placeholder="Your phone number"/>
            </div>
            {/* <div className="inputs">
                <label htmlFor="Address">Address:</label><br/>
                <input type="text" value={address} required onChange={(e) => {setAddress(e.target.value)}} id="address" name="address" placeholder="Your Address"/>
            </div> */}
            {/* <div className="radios">
                <label htmlFor="gender">Gender:</label><br/>
               Male: <input type="radio" className="gender" text="Male" value="Male" required onChange={(e) => setGender(e.target.value)}  name="Gender"/>{"\t"}Female: <input type="radio" className="gender" value={"Female"} required onChange={(e) => setGender(e.target.value)}  name="Gender"/><br/>

            </div> */}
            
            <div className="inputs">
                <label htmlFor="dob">Date of Birth</label><br/>
                <input type="date"  value={dob} min={moment(date).subtract(18,'y')} required onChange={(e) => {setDob(e.target.value)}} id="dob" name="dob"/>
            </div>
            <div className="inputs">
                <label htmlFor="username">Username</label><br/>
                <input type="text" minLength="4" required value={username} onChange={(e) => { setUsername(e.target.value)}} placeholder="Username"/>
            </div>
            <div className="inputs">
                <label htmlFor="password">Password</label><br/>
                <input type="password" required value={password} onChange={(e) => { setPassword(e.target.value)}} id="password" name="password" placeholder="Password"/>
            </div>
            
            {/* <!-- <div class="inputs"/>
                <label for="gender">Gender <span>(optional)</span></label><br>
                <select name="gender" id="gender" aria-placeholder="select a gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div> --> */}
            <div className="terms_conditions">
                <input type="checkbox" id="terms" required name="terms" value="terms" />
                <label htmlFor="terms" className="terms">I accept the terms and condition of Peer Stake</label>
            </div>
            <input className="submit" type="submit" value="Sign Up"/><br/>
    
        </form>
    </div>
        </Signup.Wrapper>
    )
}
Signup.Wrapper = styled.div`
height: 100%;
overflow: auto;
width: 100%;
position: relative;
background: linear-gradient(0deg, rgba(144, 94, 238, 0.3), rgba(144, 94, 238, 0.3)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #7E57C2;
input{
    outline: none;
}
.radios{
    font-size: 1.2rem;
    padding-bottom: 5%;
    label{
        display-inline:block;
        padding-bottom: 2%;
    }
    input[radio]{
        width:5px;
    }
}

.header{
    width: 85%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}
.gender {
    width: 10px;
    justify-self: center;
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
input[radio]{
    border: 0px;
    width:2px;
    height: 2px;
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
    height: 20px;
    border: 1px solid #e6e6e6;
    background-color: white;
    border-radius: 5px;
    padding: 3px;
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
    margin-bottom: 3%;
    
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

`

export default Signup;

// <form onSubmit={signin}>
//                         <label>Email Address</label>
//                         <input value={lEmail} type="email" onChange={(e) => setLEmail(e.target.value)} placeholder='Email'  /> 
//                         <label>password</label>
//                         <input value={lPassword} type="password" onChange={(e) => setLPassword(e.target.value)} placeholder='Enter Password'  /> 
//                         <button >Log in</button>
//                     </form>