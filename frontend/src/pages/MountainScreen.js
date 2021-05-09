import {Link, useParams, useHistory} from "react-router-dom";
import { AppContext } from '../AppContext';
import mountainImage from '../images/mountain.svg'
import logo from '../images/logo.svg'
import { useContext } from 'react';
import "../style/MountainScreen.css"
import Status from "../Status";

function MountainScreen(){
const { mountains, mountainsLoading } = useContext(AppContext);
const { id } = useParams();
const mountain = mountains.find(a => a.id === id);

    /* database */
    /* turoa */
    const turoaStatusSrc = "https://www.mtruapehu.com/turoa/report";
    const turoaStatusElements = [
        ".status_2inE7y",
        ".heading_131f86"
        ]
    const turoaStatusConditions = [
        13,
        0
    ];

    /* mt hutt */
    const mtHuttStatusSrc = "https://www.mthutt.co.nz/weather-report/";
    const mtHuttStatusElements = [
        ".w_weather-status__list--mountain-sm > .w_weather-status > .w_weather-status__info > .w_weather-status__data",
        ".w_weather-status__list--mountain-sm > .w_weather-status > .w_weather-status__info > .w_weather-status__data"
    ];
    const mtHuttStatusConditions = [
        0,
        1
    ];

    /* remarkables */
    const remarkablesStatusSrc = "https://www.theremarkables.co.nz/weather-report/";
    const remarkablesStatusElements = [
        ".w_weather-status__list--mountain-sm > .w_weather-status > .w_weather-status__info > .w_weather-status__data",
        ".w_weather-status__list--mountain-sm > .w_weather-status > .w_weather-status__info > .w_weather-status__data"
    ];
    const remarkablesStatusConditions = [
        0,
        1
    ];

if(mountainsLoading){
    return null;
}else{
    return(
        <div className = "screen-container"> 
            <div className = "mountain-boarder">
                <div>{mountain.Name}</div>
                <div>{mountain.Description}</div>
                <div> Longitde :{mountain.Location.Longitude} </div>
                <div> Latitde :{mountain.Location.Latitude} </div>
                <div> Elevation:{mountain.Location.Elevation} </div>

                <Status src={remarkablesStatusSrc} elements={remarkablesStatusElements} conditions={remarkablesStatusConditions}/>

                <Link to = '/home'>
                    <button> Back  </button>
                </Link>
            </div>
            <img src = {logo} alt = "logo" className = "logo-mountain-page" ></img>
            <div className = "image-mountain-container">
                <img src = {mountainImage} className = "image-mountain" alt = "mountain" ></img>
            </div>
            
        </div>
    );
}
}
export default MountainScreen;