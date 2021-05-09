// const API_KEY = "2327f4522f1538d452b96e0903525dac";
const API_KEY = "2d6026fb2c6a6ef3bbbc1f81c56baf04";

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

)
{
    console.log("elelele is " + ele)
    console.log("latlatlat id " + lat)
    console.log("lolonmlong is " + lon)
    // Get all the weather data (current, hourly for current day, and daily)
    return fetch(
        
        `https://api.openweathermap.org/data/2.5/onecall?lat=-45.04837&lon=168.81007&units=metric&exclude=minutely,hourly&appid=${API_KEY}`
        // 'https://api.weatherunlocked.com/api/resortforecast/999001?app_id={9e72a158}&app_key={b6008800518133ac9981f15fb0628877}'
        // `https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=${ele}&lat=${lat}&lon=${lon}`
        // `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=171.52645555&lon=43.4717&altitude=2190`
        // `http://www.whateverorigin.org/get?url=https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=2120&lat=171.5264&lon=43.4717`
        // `${url}`
        ) 
        .then((res) => res.json())
        .then((response) => {

            console.log(response);
            console.log("hey")
            // console.log("elevation is " + ele);
            // console.log("latitude is " +  lat);
            // console.log("longitude is " + lon);
            
            // var utcDate = response.properties.timeseries[0].time;
            // var localDate = new Date(utcDate);
            // console.log(localDate);
            
            setCurrentTemp(response.current.temp);
            setWeatherSymbol(response.current.weather[0].icon); // changed
            setWindDirection(response.current.wind_deg);
            setWindSpeed(response.current.wind_speed);
           
            // Current weather
            
            
            setTomorrowCondition(response.daily[1].weather[0].icon)
            setNextDayCondition(response.daily[2].weather[0].icon)
            setNextNextDayCondition(response.daily[3].weather[0].icon)

            console.log("pic name is : " + response.current.weather[0].icon)



            
           
        })
        .catch(() => {
            setIsError(true);
        });
}