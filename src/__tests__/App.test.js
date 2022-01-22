import React from 'react';
import { App } from '../App';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '../components/contactForm/ContactForm';

test("adds a new contact to an empty contact array", async () => {
    render(<App />);
    
    //Ensure Jerry is not already on the screen
    const jerry = screen.queryByText('Jerry');
    expect(jerry).toBeNull();

    //Grab the inputs and submit button
    const inputName = screen.getByLabelText('Name');
    const inputPhone = screen.getByLabelText('Phone');
    const inputEmail = screen.getByLabelText('Email');
    const submitButton = screen.getByRole('button');

    //Fill out the form and submit
    userEvent.type(inputName, 'Jerry');
    userEvent.type(inputPhone, '314-555-5555');
    userEvent.type(inputEmail, 'test5@test.com');
    userEvent.click(submitButton);

    //find new contact's name element
    const newContactNameP = await screen.findByText('Jerry');
    expect(newContactNameP).toBeInTheDocument();
    expect(newContactNameP).toHaveTextContent('Jerry');

    const newContactPhoneP = await screen.findByText('314-555-5555');
    expect(newContactPhoneP).toBeInTheDocument();
    expect(newContactPhoneP).toHaveTextContent('314-555-5555');

    const newContactEmailP = await screen.findByText('test5@test.com');
    expect(newContactEmailP).toBeInTheDocument();
    expect(newContactEmailP).toHaveTextContent('test5@test.com');
});

test('can add a contact to an existing contacts array', async () => {
    const contacts = [
        {name: 'Andrew', phone: '316-255-4867', email: 'test1@test.com'},
        {name: 'Bob', phone: '316-555-4837', email: 'test2@test.com'},
        {name: 'Joe', phone: '316-655-4867', email: 'test3@test.com'},
        {name: 'Craig', phone: '316-555-4767', email: 'test4@test.com'}
    ];

    //render add and set the state with test contacts
    render(<App setContacts={contacts}/>);

    //Ensure Jerry is not already on the screen
    const jerry = screen.queryByText('Jerry');
    expect(jerry).toBeNull();

    //grab inputs and submit button
    const inputName = screen.getByLabelText('Name');
    const inputPhone = screen.getByLabelText('Phone');
    const inputEmail = screen.getByLabelText('Email');
    const submitButton = screen.getByRole('button');

    //fill out form
    userEvent.type(inputName, 'Jerry');
    userEvent.type(inputPhone, '314-555-5555');
    userEvent.type(inputEmail, 'test5@test.com');
    userEvent.click(submitButton);

    //find new contact and test
    const NameP = await screen.findByText('Jerry');
    expect(NameP).toBeInTheDocument();
    expect(NameP).toHaveTextContent('Jerry');

    const newContactPhoneP = await screen.findByText('314-555-5555');
    expect(newContactPhoneP).toBeInTheDocument();
    expect(newContactPhoneP).toHaveTextContent('314-555-5555');

    const newContactEmailP = await screen.findByText('test5@test.com');
    expect(newContactEmailP).toBeInTheDocument();
    expect(newContactEmailP).toHaveTextContent('test5@test.com');
});