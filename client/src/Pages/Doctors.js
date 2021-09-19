import React from "react";
import Cards from "../Components/Cards";
import ErrorMsg from "../Components/ErrorMsg";
import LoadingIndicator from "../Components/LoadingIndicator";
import useAxiosOnMount from "../Components/useAxiosOnMount";

export default function Doctors(props) {
  const { data: doctors, loading, error} = useAxiosOnMount("/api/doctors");

  const renderDoctors = () => {
  if (loading){
    return <LoadingIndicator/>
  }
  if (error){
      return(
      <ErrorMsg
      loc = "Doctors (Getting Data)"
      error = {error}/>
    )}
  if (doctors.length === 0 ){
    return <p>No Users</p>
  }
  return doctors.map((d)=>{
    return(
    <Cards
    data = {d}
    key = {d.id}
    loc = "doctors"
    />
    )
  })
}



  console.log(props)
  return (
    <div>
      <h1>Doctors</h1>
      {renderDoctors()}
    </div>
  );
}