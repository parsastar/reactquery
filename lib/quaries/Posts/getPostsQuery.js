const getPostQuery = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  return res.json();
};

export default getPostQuery;
