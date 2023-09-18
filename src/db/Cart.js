export const getProductsInCart = async (userId) => {
  try {
    let res = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/get-products-in-cart",
      {
        method: "POST",
        body: JSON.stringify(userId),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    let data = await res.json();
    if (res.status == 200) {
      return { Success: true, products: data };
    } else {
      throw new {
        message: "Internal server error: " + res.body,
        status: res.status,
      }();
    }
  } catch (error) {
    console.error(error);
  }
};
export const addToCart = async (data) => {
  try {
    let res = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/add-to-cart",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (res.status == 200) {
      let data = await res.json();
      return data;
    } else {
      throw new Error();
    }
  } catch (error) {
    return error;
  }
};
export const DeleteFromCart = async (data) => {
  try {
    let res = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/delete-from-cart",
      {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    let message = await res.json();
    if (res.status == 200) {
      return message;
    } else {
      return message;
    }
  } catch (error) {
    console.error(error);
  }
};
export const AddOneToQuantity = async (data) => {
  try {
    let res = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/plus-one",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    let message = res.json();
    if (res.ok) {
      return message;
    } else {
      return message;
    }
  } catch (error) {
    return error;
  }
};
export const RemoveOneToQuantity = async (data) => {
  try {
    let res = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/minus-one",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    let message = await res.json();
    if (res.ok) {
      return message;
    } else {
      return message;
    }
  } catch (error) {
    return error;
  }
};
