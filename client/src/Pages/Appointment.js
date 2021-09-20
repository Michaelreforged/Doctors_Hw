import React, { useEffect, useState } from "react";
import LoadingIndicator from "../Components/LoadingIndicator";
import useAxiosOnMount from "../Components/useAxiosOnMount";
import ErrorMsg from "../Components/ErrorMsg"
import Cards from "../Components/Cards";
import { Grid } from "semantic-ui-react";
import axios from "axios";

export default function Appointments(props) {
  
  const { data: appointments, setData: setAppointments,loading, error} = useAxiosOnMount("/api/appointments");
  
  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`/api/appointments/${id}`)
      const newApp = appointments.filter((a)=>(a.id !== id))
      setAppointments(newApp)
    } catch (error) {
      
    }
  }
  
  const updateAppointments = async (appointment) =>{
    try {
      let res = await axios.put(`/api/appointments/${appointment.id}`, appointment);
      let newAppointments = appointments.map((a) => (a.id === appointment.id ? appointment: a));
      setAppointments(newAppointments)
    } catch (err) {
      console.log(err)
    };
  };

  const renderAppointments = () => {

    if (loading){
      return <LoadingIndicator/>
    }
    if (error){
        return(
        <ErrorMsg
        loc = "Appointments (Getting Data)"
        error = {error}/>
      )}
    if (appointments.length === 0 ){
      return <p>No Appointments</p>
    }
    return appointments.map((a)=>{
      return(
      
      <Grid.Column >
      <Cards
      data = {a}
      key = {a.id}
      loc = "appointment"
      del = {deleteAppointment}
      update = {updateAppointments}
      />
      </Grid.Column>

      )
    })
  }



  return (
    <div>
      <h1>Appointments</h1>
      <Grid relaxed padded>
        <Grid.Row columns={3}>
          {renderAppointments()}
        </Grid.Row>
      </Grid>
    </div>
  );
}