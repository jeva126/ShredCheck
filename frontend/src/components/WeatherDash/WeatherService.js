// const API_KEY = "2327f4522f1538d452b96e0903525dac";


export function getWeatherData(
    lat,
    lon,
    ele,
    setCurrentTemp,
    setWindSpeed,
    setWeatherSymbol,
    setWindDirection,
    setCurrentPrecipiation,
    setTomorrowCondition,
    setNextDayCondition,
    setNextNextDayCondition,
    setIsError

) {
    // Get all the weather data (current, hourly for current day, and daily)
    return fetch(
        
        // 'https://api.weatherunlocked.com/api/resortforecast/999001?app_id={9e72a158}&app_key={b6008800518133ac9981f15fb0628877}'
        `https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=${ele}&lat=${lat}&lon=${lon}`

    )
        .then((res) => res.json())
        .then((response) => {

            console.log(response);
            console.log("elevation is " + ele);
            console.log("latitude is " +  lat);
            console.log("longitude is " + lon);
            
            var utcDate = response.properties.timeseries[0].time;
            var localDate = new Date(utcDate);
            console.log(localDate);


            
            console.log("Air Temperature : " + response.properties.timeseries[0].data.instant.details.air_temperature);
            console.log("Wind Speed : " + response.properties.timeseries[0].data.instant.details.wind_speed);
            // Current weather
            setCurrentTemp(response.properties.timeseries[0].data.instant.details.air_temperature);
            setWindSpeed(response.properties.timeseries[0].data.instant.details.wind_speed);
            setWeatherSymbol(response.properties.timeseries[0].data.next_1_hours.summary.symbol_code)
            setWindDirection(response.properties.timeseries[0].data.instant.details.wind_from_direction)
            setCurrentPrecipiation(response.properties.timeseries[0].data.next_1_hours.details.precipitation_amount)
            
            setTomorrowCondition(response.properties.timeseries[0].data.next_12_hours.summary.symbol_code)
            setNextDayCondition(response.properties.timeseries[25].data.next_12_hours.summary.symbol_code)
            setNextNextDayCondition(response.properties.timeseries[61].data.next_12_hours.summary.symbol_code)




            // setCurrentTemp(Math.floor(response.daily[0].temp.min));
           
        })
        .catch(() => {
            setIsError(true);
        });
}