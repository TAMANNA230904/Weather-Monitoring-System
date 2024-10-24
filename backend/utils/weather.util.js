function calculateDailyAggregates (weatherData) {
    return {
        avgTemp: (weatherData.main.temp - 273.15), // Kelvin to Celsius conversion for avg temperature
        maxTemp: (weatherData.main.temp_max - 273.15), // Kelvin to Celsius conversion for max temp
        minTemp: (weatherData.main.temp_min - 273.15),
        iconCode:(weatherData.weather[0].icon),
    };
};

function getDominantCondition (weatherData)  {
    return weatherData.weather.length > 0 ? weatherData.weather[0].main : 'Unknown';
};
export {calculateDailyAggregates,getDominantCondition}