import {combineReducers } from 'redux';
import userReducer from './user-reducer';

const reducers = combineReducers({
    user: userReducer,
    // product: productReducer,
    // posts: postsReducer
});
export default reducers;