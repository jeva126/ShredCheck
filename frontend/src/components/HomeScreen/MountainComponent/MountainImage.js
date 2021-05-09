import React from "react";
import WeatherDash from "../../WeatherDash/WeatherDash";
import "../MountainComponent/MountainImage.css"

function Mountain({ mountainImage, mountainName, locationImage, xRatio, yRatio, mountain}) {
    return (
        <div className = "component-container-mountain" style= {{top: yRatio + '%', left: xRatio + '%'}}>
            <div className = "component-image-mountain-title"> {mountainName} </div>
            <img src = {locationImage} alt = "location" className = "component-image-location-icon" ></img>
            <img src = {mountainImage} alt = "mountain" className = "component-image-mountain"></img>
            {/* <div className = "mountain-description">{mountain.Description}</div> */}
            <div className = "mountain-weather"><WeatherDash latProp={mountain.Location.Latitude}
                                                             longProp={mountain.Location.Longitude}>
                                                </WeatherDash>
            </div>
        </div>
    );
}

export default Mountain;