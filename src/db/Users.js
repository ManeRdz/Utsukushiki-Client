export const registerUser = async (userInfo) => {
  try {
    let res = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/register-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    );
    let data = await res.json();
    if (res.status == 200) {
      return { Registered: true, message: data.message };
    } else if (res.status == 203) {
      return { Registered: false, message: data.message };
    } else {
      throw new {
        message: "Internal Server Error: " + data.message,
        status: res.status,
      }();
    }
  } catch (error) {
    return error;
  }
};

export const loginUser = async (userInfo) => {
  try {
    let res = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/login-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
        credentials: "include",
      }
    );
    let data = await res.json();
    if (res.status === 200) {
      window.localStorage.setItem("user", JSON.stringify(data));
      return { Authorize: true, data };
    } else if (res.status === 203) {
      return { Authorize: false, data };
    } else {
      throw new {
        message: "Internal Server Error: " + data.message,
        status: res.status,
      }();
    }
  } catch (error) {
    return error;
  }
};
export const logout = async () => {
  try {
    let res = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/logout",
      {
        method: "POST",
        credentials: "include",
      }
    );
    let data = await res.json();
    if (res.status === 200) {
      window.localStorage.removeItem("user");
      return { LoggedOut: true, message: data.message };
    } else {
      throw new {
        message: "Internal Server Error: " + data.message,
        status: res.status,
      }();
    }
  } catch (error) {
    return error;
  }
};
