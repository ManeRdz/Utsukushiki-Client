export const AdminLoginHandler = async (adminData) => {
  try {
    let response = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/admin-login",
      {
        method: "POST",
        body: JSON.stringify(adminData),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    let data = await response.json();
    if (response.status == 200) {
      window.localStorage.setItem(
        "admin",
        JSON.stringify({ tokenExpires: data.tokenExpires })
      );
      return {
        Authorized: true,
        message: data.message,
        tokenExpires: data.tokenExpires,
      };
    } else if (response.status == 203) {
      return {
        Authorized: false,
        message: data.message,
        tokenExpires: data.tokenExpires,
      };
    } else {
      throw new {
        message: data.message,
        status: response.status,
      }();
    }
  } catch (error) {
    return error;
  }
};
export const AdminLogout = async () => {
  try {
    let response = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/admin-logout",
      {
        method: "POST",
        credentials: "include",
      }
    );
    let data = await response.json();
    if (response.status == 200) {
      window.localStorage.removeItem("admin");
      return { LoggedOut: true, message: data.message };
    } else {
      throw new {
        message: data.message,
        status: response.status,
      }();
    }
  } catch (error) {
    return error;
  }
};
