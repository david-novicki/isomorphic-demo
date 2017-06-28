import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/combine';
import middleware from './middleware';

const composeEnhancers = compose;
const store = createStore(reducers, {}, composeEnhancers(
    applyMiddleware(...middleware)
));

export default store;