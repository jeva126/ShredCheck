import '../../style/WeatherDash.css'
import React, { useState, useEffect } from "react";
import {getWeatherDataToday} from './WeatherService'






export default function TodayWeather({latProp, longProp}){

   const [currentTemp, setCurrentTemp] = useState(null);
   const [windSpeed, setWindSpeed] = useState(null);
   const [windDirection, setWindDirection] = useState(null);
   const [weatherSymbol, setWeatherSymbol] = useState(null);

   const [isError, setIsError] = useState(false);

   const [latitude, setLatitude] = useState(latProp);
   const [longitude, setLongitude] = useState(longProp);
  


   const getData = (lat, lon) => {
       
       getWeatherDataToday(
           lat,
           lon,
           setCurrentTemp,
           setWindSpeed,
           setWeatherSymbol,
           setWindDirection,
           setIsError
       );
   };

   useEffect(() => {

       getData(latProp, longProp);
   
       
   },[latProp, longProp]);

  

   return(

       <div>

               <div className="weatherdash-rightnow-icon-mountainpage">
                   <img src={"http://openweathermap.org/img/w/" + weatherSymbol + ".png"} alt="sun" height='150px' width='150px'></img>
                   
               </div>
               <div className="weatherdash-rightnow-header">
                   <strong>Today</strong>  
               </div>

               <div className="weatherdash-rightnow-temp-mountainpage">
                       {currentTemp} {`Cº`}
               </div>


               <div className="weatherdash-rightnow-wind-mountainpage"> {/* wind */}
                   {'Wind speed: '}
                   <strong> {windSpeed} {`m/s  `} </strong>
                   {<br></br>}
                   {'Wind Direction: '}
                   <strong> {windDirection} {`º`} </strong>

                </div>
  
       </div>



   );
}