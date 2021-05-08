 import '../../style/WeatherDash.css'
 import React, { useState, useEffect } from "react";
 import {getWeatherData} from './WeatherService'
 
 




export default function WeatherDash({mountain}){

    const [currentTemp, setCurrentTemp] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);
    const [windDirection, setWindDirection] = useState(null);
    const [weatherSymbol, setWeatherSymbol] = useState(null);
    const [currentPrecipitation, setCurrentPrecipiation] = useState(null);

    const [tomorrowCondition, setTomorrowCondition] = useState(null);
    const [nextDayCondition, setNextDayCondition] = useState(null);
    const [nextNextDayCondition, setNextNextDayCondition] = useState(null);

   
    
    const [isError, setIsError] = useState(false);

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [elevation, setElevation] = useState(null);

    const [peak, setPeak] = useState(mountain);

    var d = new Date();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // two lines to avoid index overflow

    useEffect(() => {

        


    }, [peak])
    





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

        console.log("peak is " + mountain);

        switch(mountain) {
            case "turoa":
                setLatitude(39.30456);
                setLongitude(175.52731);
                setElevation(1_711);

                // setLatitude(48.8573);
                // setLongitude(121.6667);
                // setElevation(3286);

                
              break;
            case "whakapapa":
                setLatitude(39.23736);
                setLongitude(175.55696);
                setElevation(2_300);
              break;
            case "coronet":
                setLatitude(44.926898);
                setLongitude(168.736053);
                setElevation(1_649);
                break;
            case "cardrona":
                setLatitude(44.8649);
                setLongitude(169.0175);
                setElevation(1_894);
                break;
            default: // turoa
                setLatitude(39.30456);
                setLongitude(175.52731);
                setElevation(2_322);
          }

        getData(latitude, longitude, elevation);

    },[latitude, longitude, elevation, peak, mountain]);






    return(

        <div className="weatherdash-container">
 

            <div className="weatherdash-rightnow"> {/* right now */}
                <div className="weatherdash-rightnow-icon">
                    <img src={process.env.PUBLIC_URL + 'icons/' + weatherSymbol + '.svg'} alt="sun" height='200px' width='200px'></img>
                    
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
                            {weekDays[d.getDay()]}
                        </div> 
                        <img src={process.env.PUBLIC_URL + 'icons/' + tomorrowCondition + '.svg'} alt="sun" height='100px' width='100px'></img>

                    </div>
                    <div className="weatherdash-nextfewdays-detailscontainer"> {/* next day */}
                        <div className="weatherdash-nextfewdays-text">
                            {weekDays[d.getDay() + 1]}
                        </div> 
                        <img src={process.env.PUBLIC_URL + 'icons/' + nextDayCondition + '.svg'} alt="sun" height='100px' width='100px'></img>

                    </div>
                    <div className="weatherdash-nextfewdays-detailscontainer"> {/* next next day */}
                        <div className="weatherdash-nextfewdays-text">
                            {weekDays[d.getDay() + 2]}
                        </div> 
                        <img src={process.env.PUBLIC_URL + 'icons/' + nextNextDayCondition + '.svg'} alt="sun" height='100px' width='100px'></img>
                    </div>
                    
                    
                


            </div>



            

            

            

          

            
        </div>



    );
}