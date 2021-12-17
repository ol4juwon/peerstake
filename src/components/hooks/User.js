import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';
const BASEURL = process.env.REACT_APP_BASEURL
const User = () => {
    const gd =JSON.parse( localStorage.getItem("user"));
    const [user, setUser] = useState(gd || "")



    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
    }
    const findUser = (str) => {
        var regexp = /(\s|^)\@\w\w+\b/gm
       var result = str.match(regexp);
        if (result) {
            result = result.map(function(s){ return s.trim();});
            console.log(result);
            return result;
        } else {
            return false;
        }
      }
    const getUserByUsername = async (username) => {
        const Strippedusername = username.split("@")[1];
        const response = await axios.get(`${BASEURL}/customer/get-by?username=${Strippedusername}`)
        .then(res => res)
        .catch(err => err.response)
        console.log("response:", response.data.customer)
        if(response.data.customer != null){
            return response.data.customer._id
        }else {
            return "not found"
        }
   


    }
    const updateProfile =  async (payload) => {
        let { id, first_name, last_name,username, email, password,dob} = payload
        if(!id){
            id = JSON.parse(localStorage.getItem("user"))._id
        }
        console.log("id:", id)
        const data = JSON.stringify({id,first_name,last_name, username, email, password, dob});
        const response = await axios.put(`${BASEURL}/customer/update`, 
        data,
        {
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json ",
            }
        })
        .then(res =>  res.data)
        .catch(err =>{
            if(err.response){
                console.log("Error:", err.response)
                return err.response
            }else if(err.request){
                console.log("Error:", err.request)
                return err.request
            }else{
                console.log("Error:", err.message)
                return err.message
            }
        });
        console.log("After update ===>> ",response)
        if(response.statusCode >= 400){
            const error = response.data.description || response.data.message;
            console.log(error)       
            return error;
        }

        setUser(response.user)
        localStorage.setItem("user", JSON.stringify(response.user));
      console.log("response:", response)
        return response;
    }
    const getUserID = async (user) => {
        // const size = user.length
        var ids = []
        for(var i in user){
           const resp = await getUserByUsername(user[i])
          //  const id = resp.data.id
          ids.push(resp)
          // console.log("resp",resp)
        }
        return ids;
      
      }


    return {getUserByUsername, logout,findUser, getUserID,user, updateProfile}
}

export default User;
