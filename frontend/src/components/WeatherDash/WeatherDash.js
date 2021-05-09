 import '../../style/WeatherDash.css'
 import React, { useState, useEffect } from "react";
 import {getWeatherData} from './WeatherService'
 
 




export default function WeatherDash({latProp, longProp}){

    const [currentTemp, setCurrentTemp] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);
    const [windDirection, setWindDirection] = useState(null);
    const [weatherSymbol, setWeatherSymbol] = useState(null);
    const [currentPrecipitation, setCurrentPrecipiation] = useState(null);

    const [tomorrowCondition, setTomorrowCondition] = useState(null);
    const [nextDayCondition, setNextDayCondition] = useState(null);
    const [nextNextDayCondition, setNextNextDayCondition] = useState(null);

   
    console.log("lat proproprop is " + latProp)
    const [isError, setIsError] = useState(false);

    const [latitude, setLatitude] = useState(latProp);
    const [longitude, setLongitude] = useState(longProp);
    const [elevation, setElevation] = useState("1000");

    //const [peak, setPeak] = useState(mountain);
   

    var d = new Date();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // two lines to avoid index overflow

 

    const getData = (lat, lon, ele) => {
        
        getWeatherData(
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
        );
    };

    useEffect(() => {
        console.log("hey")
        console.log(elevation)
        console.log("hayayaya lat is " + latitude)

        getData(latProp, longProp, elevation);
        


        

        
    },[latitude, longitude, elevation]);


    return(

        <div className="weatherdash-container">
 

            <div className="weatherdash-rightnow"> {/* right now */}
                <div className="weatherdash-rightnow-icon">
                    <img src={process.env.PUBLIC_URL + '/icons/' + weatherSymbol + '.svg'} alt="sun" height='200px' width='200px'></img>
                    
                </div>
                <div className="weatherdash-rightnow-temp">
                        {currentTemp} {`Cº`}
                </div>

                <div className="weatherdash-rightnow-header">
                    <strong>Today</strong>  
                </div>

                <div className="weatherdash-rightnow-wind"> {/* wind */}
                    {'Wind speed: '}
                    <strong> {windSpeed} {`m/s  `} </strong>
                    {'Wind Direction: \n'}
                    <strong> {windDirection} {`º`} </strong>

                </div>
                    
                



            </div>

            <div className="weatherdash-nextfewdays"> {/*next few days */}
               
                
                
                    <div className="weatherdash-nextfewdays-detailscontainer"> {/* tomorrow */}
                        <div className="weatherdash-nextfewdays-text">
                            {weekDays[d.getDay() + 1]}
                        </div> 
                        <img src={process.env.PUBLIC_URL + '/icons/' + tomorrowCondition + '.svg'} alt="sun" height='100px' width='100px'></img>

                    </div>
                    <div className="weatherdash-nextfewdays-detailscontainer"> {/* next day */}
                        <div className="weatherdash-nextfewdays-text">
                            {weekDays[d.getDay() + 2]}
                        </div> 
                        <img src={process.env.PUBLIC_URL + '/icons/' + nextDayCondition + '.svg'} alt="sun" height='100px' width='100px'></img>

                    </div>
                    <div className="weatherdash-nextfewdays-detailscontainer"> {/* next next day */}
                        <div className="weatherdash-nextfewdays-text">
                            {weekDays[d.getDay() + 3]}
                        </div> 
                        <img src={process.env.PUBLIC_URL + '/icons/' + nextNextDayCondition + '.svg'} alt="sun" height='100px' width='100px'></img>
                    </div>
                    
                    {/*  */}
                


            </div>



            

            

            

          

            
        </div>



    );
}