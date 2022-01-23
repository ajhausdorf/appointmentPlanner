import React from 'react';
import {TileList} from '../tileList/TileList';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test("take an array and creates tiles", () => {
    const contacts = [
        {name: 'Andrew', phone: '316-255-4867', email: 'test1@test.com'},
        {name: 'Bob', phone: '316-555-4837', email: 'test2@test.com'},
        {name: 'Joe', phone: '316-655-4867', email: 'test3@test.com'},
        {name: 'Craig', phone: '316-555-4767', email: 'test4@test.com'}
    ];
    
    render(<TileList contacts={contacts}/>);
    const tile1NameP = screen.getByText('Andrew');
    expect(tile1NameP).toBeInTheDocument();
    expect(tile1NameP).toHaveTextContent('Andrew');


    const tile4NameP = screen.getByText('Craig');
    expect(tile4NameP).toBeInTheDocument();
    expect(tile4NameP).toHaveTextContent('Craig');
});