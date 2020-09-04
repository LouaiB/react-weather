import axios from 'axios';
import config from '../config.json';

export async function getWeatherInArea(area, units = 'metric'){
    if(!area) return;
    if(units != 'metric' && units != 'imperial') units = 'metric';

    const weatherResponse = await axios.get(`${config.weatherApiUrl}/find?appid=${config.weatherApiKey}&q=${area}&units=${units}`);
    if(weatherResponse.status != 200){
        // Something went wrong
        throw Error(weatherResponse.statusText);
    }

    if(weatherResponse.data.count == 0) return 'none';
    const weatherData = weatherResponse.data.list[0];

    console.info(weatherData);
    return {
        area:           weatherData.name,
        country:        weatherData.sys.country,
        icon:           weatherData.weather[0].icon,
        summary:        weatherData.weather[0].main,
        description:    weatherData.weather[0].description,
        temp:           weatherData.main.temp,
        tempMin:        weatherData.main.temp_min,
        tempMax:        weatherData.main.temp_max,
        windSpeed:      weatherData.wind.speed,
        windDegree:     weatherData.wind.deg,
        humidity:       weatherData.main.humidity
    };
}