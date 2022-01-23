import React from 'react';
import { Tile } from '../tile/Tile';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('Should render a tile', () => {
    const contact = {name: 'Andrew', phone: '316-555-4867', email: 'test@test.com'};
    render(<Tile contact={contact} key={0}/>);
    const tile = screen.getByText('Andrew');
    expect(tile).toBeInTheDocument();
    expect(tile).toHaveTextContent('Andrew');
});

test('Should render 5 tiles', () => {
    const contact = {name: 'Andrew', phone: '316-555-4867', email: 'test@test.com'};
    let i = 0;
    for(i=0; i<5; i++) {
        render(<Tile contact={contact} key={i} />);
    }
    let tileCount = screen.getAllByText('Andrew').length;
    expect(tileCount).toEqual(5);
});