import axios from 'axios';

export const getWeatherSummary = async () => {
    try {
        const response = await axios.get('/api/weather/summary'); // Correct URL for backend route
        console.log('API Response:', response.data);

        return response.data;
    } catch (error) {
        console.error('Error fetching weather summary:', error);
    }
};
