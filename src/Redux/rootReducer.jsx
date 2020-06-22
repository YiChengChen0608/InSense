//Base reducer object that represents all of the state of our application so this root reducer will end up
//being the actual code that combine all of our other states together. All reducers are going to go into this root reducer
import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

export default combineReducers ({
    user: userReducer,
    cart: cartReducer
});

//imported in store.js