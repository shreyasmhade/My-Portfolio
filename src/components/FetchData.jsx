import React ,{useState, useEffect}from 'react'

function FetchData() {
  const [users,setUsers] =useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((data) => {setUsers(data)})
  },[])
    
  return (
    <div>{users.map((user)=>(
      <p key={user.id}>Username: {user.name} <br/>
      Email: {user.email}</p>
    ))}</div>
  )
}

export default FetchData