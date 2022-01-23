import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 
  const [appointmentInfo, setAppointmentInfo] = useState({title: '', contact: '', date: '', time: ''});
  const { appointments, addAppointment } = props;

  const handleAppointmentChange = ({target}) => {
    const {name, value} = target;
    setAppointmentInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, contact, date, time } = appointmentInfo;
    addAppointment(title, contact, date, time);
    setAppointmentInfo({});
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm onChange={handleAppointmentChange} appointments={appointments} onAdd={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tileListArray={appointments}/>
      </section>
    </div>
  );
};
