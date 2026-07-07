const API_URL = "https://electrocurrent.com/api/speakers";

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