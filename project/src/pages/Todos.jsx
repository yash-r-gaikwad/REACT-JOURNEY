import React, { useEffect, useState } from 'react'
import TopHeader from '../components/TopHeader';



export const Todos = () => {

  const [firstName, setFirstName] = useState(["Yash","Virat"]);

  const [name, setName] = useState("");


  function addName () {
    const newName = [...firstName,  (name)];
    setFirstName(newName);
  }




  useEffect (() => {
    console.log(firstName)
    // addTodo("Noopur");
  }, []
  )

  return (
    <>
<TopHeader/>
<input type="text" onChange={e=>{setName(e.target.value);console.log(name)}} />

<button type='submit' onClick={()=>{ addName();console.log(firstName)}} >submit</button>

<button onClick={()=>setFirstName(firstName.slice(0, -1))} >Delete</button>

{firstName.map((name, key, index)=> {
  return <> 
  <h1>{name}</h1>
  <p>{key.toString()}</p>
  <button onClick={()=>{setFirstName(firstName.slice(index, 1))}}>remove</button>
  <hr></hr>
  </>
}) }




</> )
}

export default Todos;
