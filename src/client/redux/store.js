import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/combine';
import middleware from './middleware';

const preloadedState = window.__PRELOADED_STATE__ || {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middleware)
));

export default store;