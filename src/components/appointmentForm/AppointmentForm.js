import React from "react";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title"/>

      <label htmlFor="contact">Contact</label>
      <input type="text" id="contact" name="contact" />

      <label htmlFor="date">Date</label>
      <input type="text" id="date" name="date" />

      <label htmlFor="time">Time</label>
      <input type="text" id="time" name="time" />
      
      <input type="submit" data-testid="addAppointmentBtn" value="Add Appointment"/>
    </form>
  );
};
