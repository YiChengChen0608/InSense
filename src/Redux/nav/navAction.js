import { BURGER_TOGGLE, CART_TOGGLE, SEARCH_TOGGLE, USER_TOGGLE } from '../action-types'

const burgerToggle = (burger) => {
  return {
    type: BURGER_TOGGLE,
    payload: burger
  }
}

const cartToggle = (cart) => {
  return {
    type: CART_TOGGLE,
    payload: cart
  }
}
const searchToggle = (search) => {
  return {
    type: SEARCH_TOGGLE,
    payload: search
  }
}

const userToggle = (user) => {
  return {
    type: USER_TOGGLE,
    payload: user
  }
}

export { burgerToggle, cartToggle, searchToggle, userToggle }

