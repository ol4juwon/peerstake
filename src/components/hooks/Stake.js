import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const BASEURL = process.env.REACT_APP_BASEURL

const Stake = () => {
   const [stake, setStake] = useState([]);
const createStake = async (payload) => {
    
}

const getStake = async () => {

}
const getStakeByUser = async (id) => {
   const data = JSON.stringify({id});
   const response = await axios.post(`${BASEURL}/stake/get?creator_id=${id}&stake_id=61bb203fdbcbf30022ff5e34&all=true`,
   {
         headers: {
               Accept: "application/json, text/plain, */*",
         }
   }
   ).then(res => res.stakes)
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
  })

  setStake(response)
}
const searchStake = async () =>{

}
const dueStakes = async () => {
   
}

return {searchStake,getStake, stake,createStake}

}

export default Stake;
