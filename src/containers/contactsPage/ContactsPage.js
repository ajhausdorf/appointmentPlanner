import React, { useEffect, useState } from "react";
import { TileList } from '../../components/tileList/TileList';
import { ContactForm } from '../../components/contactForm/ContactForm';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [contactInfo, setContactInfo] = useState({name: '', phone: '', email: ''});
  const [duplicate, setDuplicate] = useState(false);

  const contacts = props.contacts;
  const addContact = props.addContact;

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, phone, email} = contactInfo;
    addContact(name, phone, email);
    setContactInfo({name: '', phone: '', email: ''});
  };

  const handleContactChange = ({target}) => {
    const {name, value} = target;
    setContactInfo((prev) => ({
      ...prev,
      [name]: value
    }))
  } 


  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    if(contacts.find(contact => contact.name === contactInfo.name)) {
      setDuplicate(true);
    }
  }, [contactInfo]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm contactInfo={contactInfo} handleSubmit={handleSubmit} handleContactChange={handleContactChange} duplicate={duplicate}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
