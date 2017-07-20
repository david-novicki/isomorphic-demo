import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Home extends Component {
    static fetchData({ store }) {
        return new Promise(resolve => resolve());//default
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home</title>
                </Helmet>
                <strong>Home</strong>
            </div>
        );
    }
}
export default Home;