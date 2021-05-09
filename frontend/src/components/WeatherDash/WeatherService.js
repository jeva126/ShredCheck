// const API_KEY = "2327f4522f1538d452b96e0903525dac";
const API_KEY = "2d6026fb2c6a6ef3bbbc1f81c56baf04";

export function getWeatherData(
    lat,
    lon,
    setCurrentTemp,
    setWindSpeed,
    setWeatherSymbol,
    setWindDirection,
    setTomorrowCondition,
    setNextDayCondition,
    setNextNextDayCondition,
    setIsError

)
{
    
    return fetch(
        
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${API_KEY}`

        ) 
        .then((res) => res.json())
        .then((response) => {

            console.log(response);
           
            
            setCurrentTemp(response.current.temp);
            setWeatherSymbol(response.current.weather[0].icon); // changed
            setWindDirection(response.current.wind_deg);
            setWindSpeed(response.current.wind_speed);
           
            // Current weather
            
            
            setTomorrowCondition(response.daily[1].weather[0].icon)
            setNextDayCondition(response.daily[2].weather[0].icon)
            setNextNextDayCondition(response.daily[3].weather[0].icon)

        })
        .catch(() => {
            setIsError(true);
        });
}