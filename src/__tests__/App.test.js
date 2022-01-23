import React from 'react';
import { App } from '../App';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test("adds a new contact", async () => {
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

test('can remove a single contact', async () => {

    //render add and set the state with test contacts
    render(<App />);

    //Ensure Jerry is not already on the screen
    const jerry = screen.queryByText('Jerry');
    expect(jerry).toBeNull();

    //grab inputs and submit button
    const inputName = screen.getByLabelText('Name');
    const inputPhone = screen.getByLabelText('Phone');
    const inputEmail = screen.getByLabelText('Email');
    const submitButton = screen.getByRole('button');

    //fill out form, create contact
    userEvent.type(inputName, 'Jerry');
    userEvent.type(inputPhone, '314-555-5555');
    userEvent.type(inputEmail, 'test5@test.com');
    userEvent.click(submitButton);

    //fill out form, create contact2
    userEvent.type(inputName, 'Annie');
    userEvent.type(inputPhone, '313-554-5555');
    userEvent.type(inputEmail, 'test6@test.com');
    userEvent.click(submitButton);
    
    screen.debug();

    //act
    const removeButton = screen.getAllByText('x')[0];
    userEvent.click(removeButton);

    //assert
    await waitFor(() => {
        const removedContact = screen.queryByText('Jerry');
        expect(removedContact).toBeNull();
    });

    const annie = screen.getByText('Annie');
    expect(annie).toBeInTheDocument();
    expect(annie).toHaveTextContent('Annie');


})