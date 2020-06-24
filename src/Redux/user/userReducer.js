const INITIAL_STATE = {
    logInStatus: null,
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "LOG_IN":
        return {
          logInStatus: true,
          userInfo: action.userInfo,
        };
      case "LOG_OUT":
        return {
          logInStatus: false,
          userInfo: action.userInfo,
        };
  
      default:
        return state;
    }
  };
  export default userReducer;
