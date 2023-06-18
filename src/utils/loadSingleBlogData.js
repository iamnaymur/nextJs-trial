const loadSingleBlogData = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "force-cache",
    }
  );
  return response.json();
};

export default loadSingleBlogData;
