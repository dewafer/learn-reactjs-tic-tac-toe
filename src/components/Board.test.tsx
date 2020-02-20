import Board from "./Board";
import ReactDOM from "react-dom";
import React from "react";

// smoke test only
it('renders Board without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Board />, div);
});