import React from 'react';

const Show = props => {
    const { city, date, sunrise, sunset, temp, pressure, wind, err } = props.state
    const tempC = temp ? Math.floor(temp - 273.15) : "";
    let content = null;


    if (!err && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        content = (
            <div className="result">
                <h1>Name of City: <em>{city}</em></h1>
                <h3>Today: {date}</h3>
                <h3>Sunrise: {sunriseTime}</h3>
                <h3>Sunset: {sunsetTime}</h3>
                <h3>Temperature [K]: {temp} &#176;K </h3>
                <h3>Temperature [C]: {tempC} &#176;C</h3>
                <h3>Pressure: {pressure} hPa</h3>
                <h3>Wind: {wind} m/s</h3>
            </div>
        )
    }


    return (
        <div className='result'>
            {err ? `Nie mamy w bazie ${city}` : content}


            {/* */}
        </div>
    );
}

export default Show;
