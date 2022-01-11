import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const BASEURL = process.env.REACT_APP_BASEURL

const Stake = () => {
   const [stake, setStake] = useState([]);
   const [dueStake, setDueStake] = useState([]);
const createStake = async (payload) => {
    
}



const getStakeByUser = async (id) => {
   // const data = JSON.stringify({id});
   const response = await axios.get(`${BASEURL}/stake/get?creator_id=${id}&stake_id=61bb203fdbcbf30022ff5e34&all=true`,
   {
         headers: {
               Accept: "application/json, text/plain, */*",
         }
   }
   ).then(res => res)
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

  setStake(response.data.stakes)
  const res = response.data.stakes;
  const newarr = res.filter(stake => {
   const date = new Date(stake.dueDate)
   return date < Date.now()})
   setDueStake(newarr)
//   console.log(stake)
}
useEffect(() => {
   const ids = JSON.parse(localStorage.getItem("user"));
   const id = ids._id
      getStakeByUser(id)   
   console.log("stake fror gere is ", stake)
    
}, [])
// console/.log("stake fror gere is3 ", stake)

return {stake,dueStake,createStake}

}

export default Stake;
