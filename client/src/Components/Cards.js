import { Button, ButtonGroup, Card } from "semantic-ui-react";
import { dayOfWeek, month } from "./DateFormat";

const Cards = ({data, loc}) => {
  console.log(data)

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
          <Button color='red'>
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
        <ButtonGroup fluid>
          <Button color='green'>
            Edit
          </Button>
          <Button  color='red'>
            Delete
          </Button>
        </ButtonGroup>
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
          <Button color='green'>
            Edit
          </Button>
          <Button  color='red'>
            Delete
          </Button>
        </ButtonGroup>
      </Card.Content>
    </Card>    )
  }
}

export default Cards