import { USER_TOGGLE, CLOSE_SIDE_BAR } from '../action-types'


const navReducer = (state = false, action) => {
  switch (action.type) {
    case USER_TOGGLE:
      return state = true
    case CLOSE_SIDE_BAR:
      return state = false
    default:
      return state
  }
}

export default navReducer