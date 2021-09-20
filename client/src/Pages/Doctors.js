import axios from "axios";
import React from "react";
import Cards from "../Components/Cards";
import ErrorMsg from "../Components/ErrorMsg";
import LoadingIndicator from "../Components/LoadingIndicator";
import useAxiosOnMount from "../Components/useAxiosOnMount";

export default function Doctors(props) {
  const { data: doctors, setData: setDoctors, loading, error} = useAxiosOnMount("/api/doctors");
  
  const deleteDoctors = async (id) => {
    try {
      await axios.delete(`/api/doctors/${id}`)
      const newDoctors = doctors.filter((d)=>(d.id !== id))
      setDoctors(newDoctors)
    } catch (error) {
      
    }
  }

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
    del = {deleteDoctors}
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