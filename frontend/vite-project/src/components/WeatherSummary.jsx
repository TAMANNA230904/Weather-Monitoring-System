import { useState, useEffect } from 'react';
import { getWeatherSummary } from '../api.jsx';
import AlertDisplay from './AlertDisplay.jsx';

const weatherIconMap = {
    '01d': '/assets/01d.png',  // clear sky day
     // clear sky night
    '02d': '/assets/02d.png', // few clouds day
    // few clouds night
    '03d': '/assets/03d.png', // scattered clouds
        // broken clouds
    '09d': '/assets/09d.png',      // shower rain
    '10d': '/assets/10d.png',         // rain day
    '11d': '/assets/11d.png',     // thunderstorm
                 // snow
    '50d': '/assets/mist.png',             // mist or haze
    // Add more icon mappings as needed
};
const WeatherSummary = ({ onAlerts }) => {
    const [summaries, setSummaries] = useState([]);
    const [alerts, setAlerts] = useState([]); // New state for error handling

    useEffect(() => {
        const fetchSummaries = async () => {
            try {
                const data = await getWeatherSummary();
                if (data) {
                    setSummaries(data);
                   
                }
            } catch (error) {
                console.error('Error fetching summaries:', error.message);
                setError('Failed to fetch weather summaries. Please try again later.'); // Set error message
            }
        };
        fetchSummaries();
    }, []);

    return (
            <div className='weather-summary-container'>
            <h2>Daily Weather Summaries</h2>
            {alerts.length>0 && <AlertDisplay alerts={alerts}/>}
            <div className='grid-container'>
            {summaries.length > 0 ? (
                summaries.map((summary, index) => (
                    <div key={index} className='weather-summary'>
                        <h3>{summary.city}</h3>
                        <img 
                            src={weatherIconMap[summary.iconCode]} 
                            alt={summary.dominantCondition} 
                            className="weather-icon"
                        />

                        <p>Average Temperature: {summary.avgTemp.toFixed(2)}°C</p>
                        <p>Max Temperature: {summary.maxTemp.toFixed(2)}°C</p>
                        <p>Min Temperature: {summary.minTemp.toFixed(2)}°C</p>
                        <p>Dominant Condition: {summary.dominantCondition}</p>
                    
                        
                    </div>
                ))
            ) : (
                <p>No weather summaries available.</p> // Fallback UI
            )}
        </div>
        </div>

    );
};

export default WeatherSummary;
