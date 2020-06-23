// export const userlogin = (payload) => {
//   return { type: "LOG_IN", payload };
// };

//登入頁
export const userLogInAsync = (userEmail, userPassword) => {
  return async function getUserInfoFromServer(dispatch) {
    // 注意header資料格式要設定，伺服器才知道是json格式

    const data = {
      userEmail,
      userPassword,
    };
    console.log("data", JSON.stringify(data));

    //到後端判斷
    const request = new Request("http://localhost:3030/users/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    const obj = await response.json();
    console.log("obj", obj);

    //更動redux state
    dispatch({
      type: obj.logInStatus ? "LOG_IN": "LOG_OUT",
      userInfo: obj.userInfo? obj.userInfo : {}
    });
  };
};

//登出頁
export const userLogOutAsync = (userEmail, userPassword) => {
  return async function logOutFromServer(dispatch) {

    //到後端判斷
    const request = new Request("http://localhost:3030/users/logout", {
      method: "POST",
      credentials: "include",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    const obj = await response.json();
    console.log("obj", obj);

    //更動redux state
    dispatch({
      type: "LOG_OUT",
      userInfo: {}
    });
  };
};
