const API_URL = "https://electrocurrent.com/api/newsletter";

export const subscribeNewsletter = async (email) => {
  try {
    const response = await fetch(`${API_URL}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Newsletter Subscribe Error:", error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
};