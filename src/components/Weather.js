import React, { useState, useRef, useEffect } from 'react';
import '../styles/Weather.sass';
import Search from './Search';
import Summary from './Summary';
import * as WeatherService from '../services/weatherService';

export default function Weather() {

    const [weatherSummary, setWeatherSummary] = useState(null);
    const [units, setUnits] = useState('metric');
    const [isLoading, setIsLoading] = useState(false);
    const lastQuery = useRef('');

    const searchWeatherInArea = async (area) => {
        lastQuery.current = area;
        try{
            setIsLoading(true);
            const result = await WeatherService.getWeatherInArea(area, units);
            setWeatherSummary(result);
            setIsLoading(false);
            console.log(result);
        } catch (err) {
            setIsLoading(false);
            alert(err + " : " + err.message);
        }
    }

    const reload = () => {
        searchWeatherInArea(lastQuery.current);
    }

    const toggleUnits = () => {
        units == 'metric' ? setUnits('imperial') : setUnits('metric');
    }

    useEffect(() => {
        searchWeatherInArea(lastQuery.current);
    }, [units]);

    return (
        <div className="weather">
            <Search search={searchWeatherInArea} isLoading={isLoading} />
            <Summary summary={weatherSummary} isLoading={isLoading} reload={reload} toggleUnits={toggleUnits} units={units} />
        </div>
    )
}
