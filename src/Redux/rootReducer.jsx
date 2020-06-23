//Base reducer object that represents all of the state of our application so this root reducer will end up
//being the actual code that combine all of our other states together. All reducers are going to go into this root reducer
import { combineReducers } from 'redux';
import testReducer from './test/testReducer';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

export default combineReducers ({
<<<<<<< HEAD
    user: userReducer,
    cart: cartReducer
=======
    test: testReducer,
    user: userReducer
>>>>>>> 631d797f820437cc6593095924233a4a481ba207
});

//imported in store.js