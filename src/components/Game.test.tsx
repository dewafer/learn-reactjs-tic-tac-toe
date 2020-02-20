import React from 'react';
import Game from "./Game";
import ReactDOM from "react-dom";

// somke test
it('renders Game without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Game />, div);
});