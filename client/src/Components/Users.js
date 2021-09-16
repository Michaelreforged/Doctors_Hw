import React, { useEffect, useState } from "react";
import axios from "axios"

export default function Users(props) {
  useEffect(()=> {
    console.log("mounted User")
    getUsers();
  },[])
  const [users,setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let res = await axios.get(`/api/users`)
      setUsers(res.data)
    } catch (error) {
      console.log(error)
      
    }
  }
  
  console.log(props)
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
}