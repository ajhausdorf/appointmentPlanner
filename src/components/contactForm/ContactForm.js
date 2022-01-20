import React from "react";
import './ContactForm.css'

export const ContactForm = ({
  handleContactChange,
  handleSubmit,
  contactInfo
}) => {
  const { name, phone, email } = contactInfo;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={name || ''} onChange={handleContactChange} />
      <label htmlFor="phone">Phone</label>
      <input type="text" name="phone" value={phone || ''} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" title="Please match the following format: 217-555-2345" onChange={handleContactChange} />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" value={email || ''} onChange={handleContactChange} />
      <input type="submit"  value="Submit"/>
    </form>
  );
};
