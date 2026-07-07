const API_URL = "https://electrocurrent.com/api/blogs";



export const getBlogs = async () => {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Get Blogs Error:", error);
    return {
      success: false,
      data: [],
    };
  }
};


export const getBlogById = async (id) => {
  try {
    const response = await fetch(
      `https://electrocurrent.com/api/blogs/${id}`,
      {
        cache: "no-store",
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);

    return {
      success: false,
      data: null,
    };
  }
};