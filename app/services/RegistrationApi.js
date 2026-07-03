const BASE_URL = "http://localhost:5000/api";

export const createRegistration = async (data) => {
  const response = await fetch(`${BASE_URL}/registrations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};