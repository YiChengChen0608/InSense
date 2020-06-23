//Base reducer object that represents all of the state of our application so this root reducer will end up
//being the actual code that combine all of our other states together. All reducers are going to go into this root reducer
import { combineReducers } from 'redux';
import testReducer from './test/testReducer';
import userReducer from './user/userReducer';


export default combineReducers ({
    test: testReducer,
    user: userReducer
});

//imported in store.js