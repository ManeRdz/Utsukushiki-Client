export const getProducts = async () => {
  try {
    let response = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/get-products",
      {
        method: "GET",
      }
    );
    let data = await response.json();
    if (response.status === 200) {
      return { Success: true, products: data };
    } else {
      throw new {
        message: "Internal server error: " + data.message,
        status: response.status,
      }();
    }
  } catch (error) {
    return error;
  }
};
export const getProduct = async (id) => {
  try {
    let response = await fetch(
      "https://utsukushiki-ecommerce-project.azurewebsites.net/api/get-product",
      {
        method: "POST",
        body: JSON.stringify(id),
        headers: { "Content-Type": "application/json" },
      }
    );
    let data = await response.json();
    if (response.status === 200) {
      return { Success: true, product: data };
    } else if (response.status === 404) {
      return { Success: false, product: null };
    }
  } catch (error) {
    return error;
  }
};
