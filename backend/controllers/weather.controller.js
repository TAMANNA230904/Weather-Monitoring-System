import { getWeatherData } from '../services/weather.service.js';
import { calculateDailyAggregates ,getDominantCondition} from '../utils/weather.util.js';


const cities = ["Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata", "Hyderabad"];

const getWeatherSummary = async (req, res) => {
    try {
        const summaries = [];
        for (const city of cities) {
            const weatherData = await getWeatherData(city);

            // Calculate daily aggregates
            const dailyAggregates = calculateDailyAggregates(weatherData);
            const dominantCondition = getDominantCondition(weatherData);

            // Push the summary for the current city
            summaries.push({
                city: city,
                avgTemp: dailyAggregates.avgTemp,
                maxTemp: dailyAggregates.maxTemp,
                minTemp: dailyAggregates.minTemp,
                iconCode:dailyAggregates.iconCode,
                dominantCondition: dominantCondition
            });
        }
        res.status(200).json(summaries);
    } catch (error) {
        console.error("Error fetching weather summary:", error);
        res.status(500).json({ error: "Unable to fetch weather summary" });
    }
};


export {getWeatherSummary}
