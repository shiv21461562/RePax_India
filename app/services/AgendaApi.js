export const getAgendas = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/agendas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {
    console.log("Agenda API Error:", error);
    return {
      success: false,
      data: [],
    };
  }
};
