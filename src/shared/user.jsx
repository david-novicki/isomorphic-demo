import React, { Component } from 'react';
import * as actions from '../client/redux/actions/user-actions'


class User extends Component {
    static fetchData({ store }) {
        return store.dispatch(actions.getUser());
    }
    render() {
        return (
            <div>
                User
            </div>
        );
    }
}
export default User;