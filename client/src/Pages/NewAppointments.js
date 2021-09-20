import React, { useState } from "react";
import LoadingIndicator from "../Components/LoadingIndicator";
import ErrorMsg from "../Components/ErrorMsg";
import useAxiosOnMount from "../Components/useAxiosOnMount";
import { Button, Container, Form, Input, Select } from "semantic-ui-react";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import axios from "axios";

export default function NewAppointment(props) {

  const [doctorId, setDoctorId] = useState(null);
  const [userId, setUserId] = useState(null);
  // const [year, setYear] = useState(null);
  // const [month, setMonth] = useState(null);
  // const [day, setDay] = useState(null);
  // const [hour, setHour] = useState(null);
  // const [min, setMin] = useState(null);
  const [desc, setDesc] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null)

  const {
    data: users,
    loading: usersLoading,
    error: uerr,
  } = useAxiosOnMount("/api/users");
  const {
    data: doctor,
    loading: doctorLoading,
    error: derr,
  } = useAxiosOnMount("/api/doctors");

  const handleUserChange = (e, { value }) => {
    setUserId(value);
  };
  const handleDoctorChange = (e, { value }) => {
    setDoctorId(value);
  };
  const handleDescChange = (e, { value }) => {
    setDesc(value);
  };
  // const handleMonthChange = (e, { value }) => {
  //   setMonth(value);
  // };
  // const handleDayChange = (e, { value }) => {
  //   setDay(value);
  // };
  const handleSubmit = async () => {;
    console.log(selectedDate.toISOString())
    let date = selectedDate.toISOString();
    let res = axios.post("/api/appointments",{ 
      date, 
      desc, 
      doctor_id: doctorId, 
      user_id: userId });
  };

  const renderUsers = () => {
    if (usersLoading) {
      return <loadingTextColor />;
    }
    if (uerr) {
      return <ErrorMsg error={uerr} />;
    }

    const usersOptions = users.map((u) => {
      return { key: u.id, value: u.id, text: u.name };
    });

    return (
      <Select
        onChange={handleUserChange}
        placeholder="Select User"
        options={usersOptions}
      />
    );
  };
  const renderDoctors = () => {
    if (doctorLoading) {
      return <LoadingIndicator />;
    }
    if (derr) {
      return <ErrorMsg error={derr} />;
    }
    // we map data into options =>  { key: 'bj', value: 'bj', text: 'Benin' },
    const doctorsOptions = doctor.map((d) => {
      return { key: d.id, value: d.id, text: d.name };
    });

    return (
      <Select
        onChange={handleDoctorChange}
        placeholder="Select Doctor"
        options={doctorsOptions}
      />
    );
  };
  const renderAppointment = () => {

    // const monthOption = [
    //   {value:1, text:'Jan.',},
    //   {value:2, text:'Feb.',},
    //   {value:3, text:'March',},
    //   {value:4, text:'April',},
    //   {value:5, text:'May',},
    //   {value:6, text:'June',},
    //   {value:7, text:'July',},
    //   {value:8, text:'Aug.',},
    //   {value:9, text:'Sep.',},
    //   {value:10, text:'Oct.',},
    //   {value:11, text:'Nov.',},
    //   {value:12, text:'Dec.'}
    // ];
    // const dayOption = [
    //   {value: 1, text:1},
    //   {value: 2, text:2},
    //   {value: 3, text:3},
    //   {value: 4, text:4},
    //   {value: 5, text:5},
    //   {value: 6, text:6},
    //   {value: 7, text:7},
    //   {value: 8, text:8},
    //   {value: 9, text:9},
    //   {value: 10, text:10},

    // ]

    // return (
    //   <>
    //   <Select
    //     onChange={handleMonthChange}
    //     placeholder="Select Month"
    //     options={monthOption}
    //   />
    //   <Select
    //     onChange={handleDayChange}
    //     placeholder="Select Month"
    //     options={dayOption}
    //   />
    //   </>
    // );


    return(
      <Container>
      <>Please Pick Date Below</>
      <DatePicker showTimeSelect selected = {selectedDate} onChange = {date => setSelectedDate(date)} dateFormat="Pp"/>
      <Input placeholder ="desc" onChange={handleDescChange}/>
      </Container>
    )

  };



  return (
    <div>
      <h1>New Appointment</h1>
      <Form onSubmit={handleSubmit}>
        {renderUsers()}
        {renderDoctors()}
        {renderAppointment()}
        <Button type={"submit"}>add</Button>
      </Form>
    </div>
  );
}

