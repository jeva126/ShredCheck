import '../../style/WeatherDash.css'
import React, { useState, useEffect } from "react";
import {getWeatherDataWeek} from './WeatherService'






export default function WeekWeather({latProp, longProp}){

   const [tomorrowCondition, setTomorrowCondition] = useState(null);
   const [nextDayCondition, setNextDayCondition] = useState(null);
   const [nextNextDayCondition, setNextNextDayCondition] = useState(null);
   const [nextNextNextDayCondition, setNextNextNextDayCondition] = useState(null);
   const [nextNextNextNextDayCondition, setNextNextNextNextDayCondition] = useState(null);

   
   const [isError, setIsError] = useState(false);

   const [latitude, setLatitude] = useState(latProp);
   const [longitude, setLongitude] = useState(longProp);
  

   //const [peak, setPeak] = useState(mountain);
  

   var d = new Date();
   const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // two lines to avoid index overflow



   const getData = (lat, lon) => {
       
       getWeatherDataWeek(
           lat,
           lon,
           setTomorrowCondition,
           setNextDayCondition,
           setNextNextDayCondition,
           setNextNextNextDayCondition,
           setNextNextNextNextDayCondition,
           setIsError
       );
   };

   useEffect(() => {

       getData(latProp, longProp);
   
       
   },[latProp, longProp]);

 

   return(

       <div >

           
              
               
               
                   <div className="weatherdash-nextfewdays-detailscontainer"> {/* tomorrow */}
                       <div className="weatherdash-nextfewdays-text">
                           {weekDays[d.getDay() + 1]}
                       </div> 
                       <img src={"http://openweathermap.org/img/wn/" + tomorrowCondition + "@4x.png"} alt="sun" height='100px' width='100px'></img>

                   </div>
                   <div className="weatherdash-nextfewdays-detailscontainer"> {/* next day */}
                       <div className="weatherdash-nextfewdays-text">
                           {weekDays[d.getDay() + 2]}
                       </div> 
                       <img src={"http://openweathermap.org/img/wn/" + nextDayCondition + "@4x.png"} alt="sun" height='100px' width='100px'></img>

                   </div>
                   <div className="weatherdash-nextfewdays-detailscontainer"> {/* next next day */}
                       <div className="weatherdash-nextfewdays-text">
                           {weekDays[d.getDay() + 3]}
                       </div> 
                       <img src={"http://openweathermap.org/img/wn/" + nextNextDayCondition + "@4x.png"} alt="sun" height='100px' width='100px'></img>
                   </div>
                   <div className="weatherdash-nextfewdays-detailscontainer"> {/* next next day */}
                       <div className="weatherdash-nextfewdays-text">
                           {weekDays[d.getDay() + 4]}
                       </div> 
                       <img src={"http://openweathermap.org/img/wn/" + nextNextNextDayCondition + "@4x.png"} alt="sun" height='100px' width='100px'></img>
                   </div>
                   <div className="weatherdash-nextfewdays-detailscontainer"> {/* next next day */}
                       <div className="weatherdash-nextfewdays-text">
                           {weekDays[d.getDay() + 5]}
                       </div> 
                       <img src={"http://openweathermap.org/img/wn/" + nextNextNextNextDayCondition + "@4x.png"} alt="sun" height='100px' width='100px'></img>
                   </div>
                   
                  
               


          



           

           

           

         

           
       </div>



   );
}