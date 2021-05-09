import {Link, useParams, useHistory} from "react-router-dom";
import { AppContext } from '../AppContext';
import mountainImage from '../images/mountain.svg'
import logo from '../images/logo.svg'
import { useContext } from 'react';
import "../style/MountainScreen.css"
import WeatherDash from "../components/WeatherDash/WeatherDash.js";
import Status from "../Status";

function MountainScreen(){
const { mountains, mountainsLoading } = useContext(AppContext);
const { id } = useParams();

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

if(mountains == null){
    return null;
}else{
    const mountain = mountains.find(a => a.id === id);
    return(
        <div className = "screen-container"> 
                <Link to = '/home'>
                    <div className = "logo-container">
                        <img src = {logo} alt = "logo" className = "logo-mountain-page" ></img>
                    </div>
                </Link>

                <div className = "mountain-boarder">
                    <div className = "mountain-page-title">{mountain.Name}</div>
                    <Status src={remarkablesStatusSrc} elements={remarkablesStatusElements} conditions={remarkablesStatusConditions}/>
                </div>
                
            
                <div className = "image-mountain-container">
                    <img src = {mountainImage} className = "image-mountain" alt = "mountain" ></img>
                </div>
        </div>
        );
    }
}
export default MountainScreen;