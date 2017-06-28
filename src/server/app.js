import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Navbar from '../shared/navbar.jsx';

// components
import routes from '../shared/routes';


class App extends Component {
    render() {
        let router = routes.map(({ path, component, exact }, i) =>
            <Route key={Math.random() + 'ROUTE_'} exact={exact} path={path} component={component} />
        );
        return (
            <div>
                <Navbar />
                <Switch>
                    {router}
                </Switch>
            </div>
        );
    }
}
export default App;
// render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
//render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
