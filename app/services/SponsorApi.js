const API_URL = "http://electrocurrent.com/api/sponsors";

export const getSponsors = async () => {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });

    return await response.json();
  } catch (error) {
    console.error("Get Sponsors Error:", error);

    return {
      success: false,
      data: [],
    };
  }
};
