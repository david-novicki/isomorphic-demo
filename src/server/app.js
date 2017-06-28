import React, { Component } from 'react';

class App extends Component {
    static fetchData() {
        console.log('test');
    }
    render() {
        return (
                <div>
                    hello world
                </div>
        );
    }
}
export default App;
// render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
//render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
