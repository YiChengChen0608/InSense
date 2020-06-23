import { USER_TOGGLE } from '../action-types'


const navReducer = (state = false, action) => {
  switch (action.type) {
    case USER_TOGGLE:
      return state = true
    default:
      return false
  }
}

export default navReducer