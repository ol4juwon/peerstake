import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const BASEURL = process.env.REACT_APP_BASEURL
const User = () => {

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

    return {getUserByUsername}
}

export default User;
