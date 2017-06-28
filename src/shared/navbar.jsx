import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    static fetchData() {
        console.log('test');
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/u'>User</Link></li>
                </ul>
            </div>
        );
    }
}
export default Home;