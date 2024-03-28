const sendPostQuery = async (newPost) => {
  const res = await fetch("https://dummyjson.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { "Content-type": "application.json=UTF-8" },
  }).then((res) => res.json());
};

export default sendPostQuery