// load categories

const BASE_URL = "https://fakestoreapi.com/products";

//loadCategories
export async function loadCategories() {
  const response = await fetch(`${BASE_URL}/categories`);

  if (!response.ok) throw new Error("could not load product categories");
  const data = await response.json();
  console.log(data);
  return data;
}

export async function loadAllProducts() {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("could not load products");
  const data = await response.json();

  return data;
}

export async function loadDataBtCategory(category) {
  const response = await fetch(`${BASE_URL}/category/${category}`);

  if (!response.ok) throw new Error("could not load product categories");
  const data = await response.json();
  console.log(data);
  return data;
}
