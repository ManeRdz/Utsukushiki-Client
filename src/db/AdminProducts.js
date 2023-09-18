export const AddProduct = async (formData) => {
  try {
    let response = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/add-product",
      {
        method: "POST",
        body: formData,
        credentials: "include",
      }
    );
    let data = await response.json();
    if (response.status == 200) {
      return { Success: true, message: data.message };
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
export const EditProduct = async (formData) => {
  try {
    let response = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/edit-product",
      {
        method: "POST",
        body: formData,
        credentials: "include",
      }
    );
    let data = await response.json();
    if (response.status == 200) {
      return { Success: true, image: data.image, message: data.message };
    } else {
      throw new {
        Success: false,
        message: data.message,
        status: response.status,
      }();
    }
  } catch (error) {
    return error;
  }
};
export const DeleteProduct = async (productId) => {
  try {
    let response = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/delete-product",
      {
        method: "DELETE",
        body: JSON.stringify(productId),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    let data = await response.json();
    if (response.status == 200) {
      return { Success: true, message: data.message };
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
