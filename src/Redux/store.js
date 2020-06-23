//create a store

//Add middleware, so we can catch acions when they get fired or dispatched and then dispatch them
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger, thunk];
//spread middlewares the array into applyMiddleware, cuz we might want to modify this array in the future so we don't just spread logger
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
