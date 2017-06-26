import React, { Component } from 'react';
import store from './redux/store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

const App = () => (
    <div>
        hello world
    </div>
);
export default App;
// render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
//render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
