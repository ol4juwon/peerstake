import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';
const BASEURL = process.env.REACT_APP_BASEURL
const User = () => {
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
        const { id, first_name, last_name,username, email, password,dob} = payload
        const data = JSON.stringify({id,first_name,last_name, username, email, password, dob});
        const response =  axios.post(`${BASEURL}/customer/update`, 
        data,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res)
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


    return {getUserByUsername, logout,findUser, getUserID}
}

export default User;
