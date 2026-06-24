const API_URL = "http://localhost:5000/api/speakers";

export const getSpeakers = async () => {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Get Speakers Error:", error);

    return {
      success: false,
      data: [],
    };
  }
};