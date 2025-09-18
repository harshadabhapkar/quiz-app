import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const updateTest = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/test/update`, userData);
        return response.data;
    } catch (error) {
        console.error('Error during Registrating:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};