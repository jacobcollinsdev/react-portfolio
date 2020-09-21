import React from 'react';
import coverImg from '../../../images/weather-app.jpg';

const WeatherApp = ()=>{
    return(
        <div className="project">
            <h3>Weather App</h3>
            <div className="project-example__container">
                <a href="https://learnchess.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={coverImg} alt="Learn-Chess"/></a>
                <div className="overlay">
                    <div className="text">
                        <p>
                            A weather app built using JavaScript and the fetch API to present current temperature and sunrise/sunset data for a user entered location.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp