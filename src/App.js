import React, { useState } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { SplitScreen } from "./containers/splitScreen/SplitScreen";

export const App = () => {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([]);
 const [appointments, setAppointments] = useState([]); 

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, email, phone) => {
    const newContact = { name, email, phone };
    setContacts((prev) => [...prev, newContact]);
  }

  const removeContact = (name) => {
    setContacts((prev) => prev.filter((contact) => name !== contact.name));
  }

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = { title, contact, date, time };
    setAppointments((prev) => [...prev, newAppointment]);
  }

  return (
      <main>
        <SplitScreen leftWeight={1} rightWeight={1}>
          <ContactsPage contacts={contacts} addContact={addContact} onRemove={removeContact}/>
          <AppointmentsPage appointments={appointments} addAppointment={addAppointment}/>
        </SplitScreen>
      </main>
  );
}

export default App;
