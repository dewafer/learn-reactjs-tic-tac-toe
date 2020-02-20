import React from 'react';
import { render } from '@testing-library/react';
import Square from './Square';

test('renders Square', () => {
    const { getByText }  = render(<Square value='value1'/>);
    const buttonElement = getByText(/value1/i);
    expect(buttonElement).toBeInTheDocument();
});
