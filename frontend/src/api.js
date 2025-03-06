import axios from "axios";

const API_URL = "http://localhost:5000/api"; 

export const getChatbotStatus = async () => {
    try {
        const response = await axios.get(`${API_URL}/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching chatbot status:", error);
        return { message: "Error connecting to chatbot" };
    }
};
