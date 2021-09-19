import React from "react";
import Cards from "../Components/Cards";
import ErrorMsg from "../Components/ErrorMsg";
import LoadingIndicator from "../Components/LoadingIndicator";
import useAxiosOnMount from "../Components/useAxiosOnMount";

export default function Users(props) {
  const { data: users, loading, error} = useAxiosOnMount("/api/users");

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
      />
      )
    })
    
  }

  return (
    <div>
      <h1>Users</h1>
      {renderUsers()}
    </div>
  );
}