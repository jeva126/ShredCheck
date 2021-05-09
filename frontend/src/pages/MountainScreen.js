import {Link, useParams, useHistory} from "react-router-dom";
import { AppContext } from '../AppContext';
import mountainImage from '../images/mountain.svg'
import logo from '../images/logo.svg'
import { useContext } from 'react';
import "../style/MountainScreen.css"
import Status from "../Status";
import Pricing from "../Pricing";

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

    const turoaPriceSrc = [
        "https://www.mtruapehu.com/Passes",
        "https://www.mtruapehu.com/season-pass"
    ];
    const turoaPriceElements = [
        ".card_price_Q4pzz",
        ".card_subtitle"
    ];
    const turoaPriceConditions = [
        3,
        4,
        2,
        3
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

    const mtHuttPriceSrc = [
        "https://shop.mthutt.co.nz/lift-pass",
        "https://shop.mthutt.co.nz/season-passes-mh"
    ];
    const mtHuttPriceElements = [
        ".product-price",
        ".product-price"
    ];
    const mtHuttPriceConditions = [
        0,
        1,
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

    const remarkablesPriceSrc = [
        "https://shop.theremarkables.co.nz/lift-pass",
        "https://shop.theremarkables.co.nz/3-peak-pass"
    ];
    const remarkablesPriceElements = [
        ".product-price",
        ".product-price"
    ];
    const remarkablesPriceConditions = [
        0,
        1,
        0,
        1
    ];

if(mountains == null){
    return null;
}else{
    const mountain = mountains.find(a => a.id === id);
    return(
        <div className = "screen-container"> 
            <div className = "mountain-boarder">
                <div>{mountain.Name}</div>
                <div>{mountain.Description}</div>
                <div> Longitde :{mountain.Location.Longitude} </div>
                <div> Latitde :{mountain.Location.Latitude} </div>
                <div> Elevation:{mountain.Location.Elevation} </div>

                <Status src={remarkablesStatusSrc} elements={remarkablesStatusElements} conditions={remarkablesStatusConditions} />
                <Pricing src={remarkablesPriceSrc} elements={remarkablesPriceElements} conditions={remarkablesPriceConditions} />

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