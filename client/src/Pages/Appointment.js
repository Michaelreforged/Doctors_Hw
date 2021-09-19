import React from "react";
import LoadingIndicator from "../Components/LoadingIndicator";
import useAxiosOnMount from "../Components/useAxiosOnMount";
import ErrorMsg from "../Components/ErrorMsg"
import Cards from "../Components/Cards";
import { Grid } from "semantic-ui-react";

export default function Appointments(props) {
  const { data: appointments, loading, error} = useAxiosOnMount("/api/appointments");

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