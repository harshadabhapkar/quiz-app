import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;


export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error during Registrating:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};