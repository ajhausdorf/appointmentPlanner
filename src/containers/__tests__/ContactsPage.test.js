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

