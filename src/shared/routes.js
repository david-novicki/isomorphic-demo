import Navbar from './navbar.jsx';
import Home from './home.jsx';
import User from './user.jsx';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/user',
        component: User,
        exact: true
    }
];