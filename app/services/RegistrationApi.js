const BASE_URL = "https://electrocurrent.com/api";

export const createRegistration = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/registrations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Server error:", result);
      return { success: false, message: result.message || "Something went wrong" };
    }

    return result;
  } catch (err) {
    console.error("Network/parsing error:", err);
    return { success: false, message: "Network error. Please try again." };
  }
};