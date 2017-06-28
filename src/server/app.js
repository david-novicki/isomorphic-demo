import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';

// components
import Navbar from '../shared/navbar.jsx';
import Home from '../shared/home.jsx';
import User from '../shared/user.jsx';

class App extends Component {
    componentWillMount(){
        console.log('App mounted')
    }
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/u" component={User} />
                </Switch>
            </div>
        );
    }
}
export default App;
// render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
//render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
