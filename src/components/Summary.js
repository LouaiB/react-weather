import React from 'react';
import '../styles/Summary.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faWind, faTint } from '@fortawesome/free-solid-svg-icons'

export default function Summary({ summary, isLoading, reload, toggleUnits, units }) {

    return (
        <div className="summary">
            { summary == null && <span className="message">Search for the weather</span> }
            { summary == 'none' && <span className="message">Area not found</span> }
            { summary != null && summary != 'none' &&  (
            <div className="report">
                <button
                    className="toggle-units-btn"
                    onClick={toggleUnits}
                >
                    { units == 'metric' ? 'C' : 'F' }
                </button>
                <span className="place">{summary.area}, {summary.country}</span>
                <span className="time">{new Date().toTimeString().substr(0, 5)}</span>
                <div className="temp">
                    <img className="icon" src={`http://openweathermap.org/img/w/${summary.icon}.png`} />
                    <div className="temps">
                        <span className="min">{summary.tempMin.toFixed(0)}°</span>
                        <span className="cur">{summary.temp.toFixed(0)}°</span>
                        <span className="max">{summary.tempMax.toFixed(0)}°</span>
                    </div>
                </div>
                <button
                    className="reload"
                    onClick={reload}
                >
                    <FontAwesomeIcon icon={faUndo} className={isLoading ? 'spin' : ''} />
                </button>
                <span className="description">{summary.description}</span>
                <div className="properties">
                    <div className="property">
                        <FontAwesomeIcon icon={faWind} className="icon" />
                        <span className="value">{(summary.windSpeed / 3.6).toFixed(1)} {units == 'metric' ? 'meters/sec' : 'miles/hour'}</span>
                    </div>
                    <div className="property">
                        <FontAwesomeIcon icon={faTint} className="icon" />
                        <span className="value">{summary.humidity}%</span>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}
