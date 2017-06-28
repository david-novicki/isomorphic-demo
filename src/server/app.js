import React, { Component } from 'react';
import * as actions from '../client/redux/actions/user-actions'

class App extends Component {
    static fetchData({store}) {
        return store.dispatch(actions.getUser());
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
