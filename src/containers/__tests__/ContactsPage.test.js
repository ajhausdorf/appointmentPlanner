import { ContactsPage } from '../contactsPage/ContactsPage';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import addContact from '../../App';

test('test contact should not already exist', () => {
    render(<ContactsPage contacts={[]} addContact={() => {}} removeContact={()=>{}}/>);
    const emptyContact = screen.queryByText('Jerry');
    expect(emptyContact).toBeNull();
});

// issue with React Router. This should be in App.test.js but can't render App with NavLink
test('can add a contact to an existing contacts array', async () => {
    const contacts = [
        {name: 'Andrew', phone: '316-255-4867', email: 'test1@test.com'},
        {name: 'Bob', phone: '316-555-4837', email: 'test2@test.com'},
        {name: 'Joe', phone: '316-655-4867', email: 'test3@test.com'},
        {name: 'Craig', phone: '316-555-4767', email: 'test4@test.com'}
    ];
    render(<ContactsPage contacts={contacts} addContact={addContact}/>);
    const inputName = screen.getByLabelText('Name');
    const inputPhone = screen.getByLabelText('Phone');
    const inputEmail = screen.getByLabelText('Email');
    const submit = screen.getByRole('button');
    userEvent.type(inputName, "Jerry");
    userEvent.type(inputPhone, "217-555-5555");
    userEvent.type(inputEmail, "test5@test.com");
    userEvent.click(submit);
    const newContactName = await screen.findByText('Jerry');
    expect(newContactName).toBeInTheDocument();
    expect(newContactName).toHaveTextContent('Jerry');
});