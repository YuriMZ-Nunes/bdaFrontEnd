import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Função para buscar os resultados do backend
export const fetchResults = async () => {
    try {
        const response = await axios.get(`${API_URL}/results`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar resultados:", error);
        return [];
    }
};
