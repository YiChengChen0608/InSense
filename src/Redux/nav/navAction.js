import { USER_TOGGLE, CLOSE_SIDE_BAR } from '../action-types'


const userToggleFunc = () => {
  return {
    type: USER_TOGGLE
  }
}

const closeSideBar = () => {
  return {
    type: CLOSE_SIDE_BAR
  }
}

export { userToggleFunc, closeSideBar }

