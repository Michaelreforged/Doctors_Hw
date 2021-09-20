import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Cards from "../Components/Cards";
import ErrorMsg from "../Components/ErrorMsg";
import LoadingIndicator from "../Components/LoadingIndicator";
import useAxiosOnMount from "../Components/useAxiosOnMount";

export default function Users(props) {
  const { data: users, setData: setUsers, loading, error} = useAxiosOnMount("/api/users");

  const addUsers = async (user) =>{
    try{
      let res = await axios.post("/api/users", user);
      setUsers([res.data, ...users])
    }catch(err){
      console.log(err);
    };
  };

  const updateUsers = async (user) =>{
    try {
      let res = await axios.put(`/api/users/${user.id}`, user);
      let newUsers = users.map((u) => (u.id === user.id ? user: u));
      setUsers(newUsers)
    } catch (err) {
      console.log(err)
    };
  };

  const deleteUsers = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`)
      const newUsers = users.filter((u)=>(u.id !== id))
      setUsers(newUsers)
    } catch (error) {
      
    }
  }

  const renderUsers = () => {

    if (loading){
      return <LoadingIndicator/>
    }
    if (error){
        return(
        <ErrorMsg
        loc = "Users (Getting Data)"
        error = {error}/>
      )}
    if (users.length === 0 ){
      return <p>No Users</p>
    }
    return users.map((u)=>{
      return(
      <Cards
      data = {u}
      key = {u.id}
      loc = "users"
      del = {deleteUsers}
      />
      )
    })
    
  }

  return (
    <div>
      <h1>Users</h1>
      <Link to={`/users/new`}>
            <Button color="green">
              New
            </Button>
      </Link>
      {renderUsers()}
    </div>
  );
}