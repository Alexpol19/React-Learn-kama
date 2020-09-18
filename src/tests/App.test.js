import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from '../App';

it('Render without crashing', () => {
    let div = document.createElement('div');
    ReactDOM.render(<MainApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});