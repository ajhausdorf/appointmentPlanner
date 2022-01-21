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

  const removeContact = (idToRemove) => {
    setContacts((prev) => {
      return prev.filter(contact => {
        return idToRemove !== contact.id
      })
    })
  }

  const addAppointments = (title, contact, date, time) => {
    const newAppointment = { title, contact, date, time };
    setAppointments((prev) => [...prev, newAppointment]);
  }

  return (
      <main>
        <SplitScreen leftWeight={1} rightWeight={1}>
          <ContactsPage contacts={contacts} addContact={addContact} removeContact={removeContact}/>
          <AppointmentsPage appointments={appointments} addAppointments={addAppointments}/>
        </SplitScreen>
      </main>
  );
}

export default App;
