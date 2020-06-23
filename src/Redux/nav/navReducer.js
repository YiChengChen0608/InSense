import { BURGER_TOGGLE, CART_TOGGLE, SEARCH_TOGGLE, USER_TOGGLE } from '../action-types'
const NAV_BTN_INITIAL_STATE = false


const navReducer = (state = NAV_BTN_INITIAL_STATE, action) => {
  switch (action.type) {
    case BURGER_TOGGLE:
      return NAV_BTN_INITIAL_STATE = action.payload
    case CART_TOGGLE:
      return NAV_BTN_INITIAL_STATE = action.payload
    case SEARCH_TOGGLE:
      return NAV_BTN_INITIAL_STATE = action.payload
    case USER_TOGGLE:
      return NAV_BTN_INITIAL_STATE = action.payload
    default:
      return state
  }
}

export default navReducer