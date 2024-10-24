import axios from "axios";

const getWeatherData = async (city) => {
    const apiKey = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
};
export {getWeatherData}
