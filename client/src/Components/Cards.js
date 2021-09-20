import { Button, ButtonGroup, Card } from "semantic-ui-react";
import Appointments from "../Pages/Appointment";
import { dayOfWeek, month } from "./DateFormat";
import { Link } from "react-router-dom";


const Cards = ({data, loc, del}) => {

  if(loc === "appointment"){
    const date = new Date(data.date);
    
  return (
    <Card>
      <Card.Content>
        <Card.Header>{data.desc}</Card.Header>
        <Card.Meta>{data.doctor.name}</Card.Meta>
        <Card.Description>
          {data.user.name} has a appointment on {dayOfWeek[ date.getDay()]}, {month[date.getMonth()]} {date.getDate()} {date.getFullYear()} at {date.getHours()}:{date.getMinutes()}
        </Card.Description>
       </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button color='green'>
            Edit
          </Button>
          <Button onClick={() => del(data.id)} color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  )}

  if( loc === "users"){
    return (
      <Card>
      <Card.Content>
        <Card.Header>{data.name}</Card.Header>
        <Card.Description>
        </Card.Description>
       </Card.Content>
      <Card.Content extra>
        <Button.Group fluid>
          <Link to={`/users/${data.id}/edit`}>
            <Button color="green">
              Edit
            </Button>
          </Link>
          <Button onClick={() => del(data.id)} color='red'>
            Delete
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>    )
  }

  if( loc === "doctors"){
    console.log(data);
    return (
      <Card>
      <Card.Content>
        <Card.Header>{data.name}</Card.Header>
        <Card.Description>
        </Card.Description>
       </Card.Content>
      <Card.Content extra>
        <ButtonGroup fluid>
          <Link to={`/doctors/${data.id}/edit`}>
            <Button color="green">
              Edit
            </Button>
          </Link>
          <Button onClick={() => del(data.id)} color='red'>
            Delete
          </Button>
        </ButtonGroup>
      </Card.Content>
    </Card>    )
  }
}

export default Cards