const getProductsQuery = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};
export default getProductsQuery;
