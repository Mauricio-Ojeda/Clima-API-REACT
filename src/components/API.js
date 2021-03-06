import React from 'react';
import PropTypes from 'prop-types';

const API = ({ apiValue }) => {

    // Destructuring apiValue
    const {cod, name, main, weather} = apiValue;

    if(!cod || ( parseInt(cod, 10) > 400 )){return null};

    
    return (
            <div className="card-panel white col s12">
                <div className="black-text center-align">
                                        <div>
                                            <h2>El clima de {name}</h2>
                                            <p>
                                                {weather[0].description.toUpperCase()}                        
                                            </p>
                                            <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="weather icon"/> 
                                            <p className="temperatura"> 
                                                {main.temp.toFixed(1)}<span>&#8451;</span>                       
                                            </p>                                           
                                            <p>
                                                Sensacion Termica: {main.feels_like.toFixed(1)} <span>&#x2103;</span>                        
                                            </p>
                                        </div>
                                     
                 
                </div>
                   
            </div>
    )
}

API.propTypes = {
    apiValue : PropTypes.object.isRequired
}

export default API
