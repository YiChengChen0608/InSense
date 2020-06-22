
//create a store

//Add middleware, so we can catch acions when they get fired or dispatched and then dispatch them
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const middlewares = [logger];
//spread middlewares the array into applyMiddleware, cuz we might want to modify this array in the future so we don't just spread logger
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;