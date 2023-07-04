import React, { useState } from 'react'
import TopHeader from '../components/TopHeader';
import { useEffect } from 'react';

export const Pricing = () => {

  const [Users, setUsers] = useState([]);

   const fetchusersdata = () => {
  

    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=8fe22d19').then((response)=>{
    return response.json()}).then((result)=>{
     setUsers(result);
  console.log(result);
    }).catch((err) =>{
      console.log(err);
    })
  
   }

   useEffect(() => {
    fetchusersdata();
  }, [])

 
    
  return (

  

    <div>
       <TopHeader />



<p>{Users.Title}</p>
<img src={Users.Poster} alt="" />
<p>{Users.Title}</p>
<img src={Users.Poster} alt="" />
<p>{Users.Title}</p>
<img src={Users.Poster} alt="" />
<p>{Users.Title}</p>
<img src={Users.Poster} alt="" />
  



             
        <h1>PRICING for detail MD</h1>
    </div>
  )
}

export default Pricing;
