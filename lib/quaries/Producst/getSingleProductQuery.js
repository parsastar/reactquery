const getSingleProductQeury = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-cache",
  });
  return res.json();
};

export default getSingleProductQeury