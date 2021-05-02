import React from "react";
import "../MountainComponent/MountainImage.css"

function Mountain({ mountainImage, mountainName, locationImage, xRatio, yRatio}) {
    return (
        <div className = "image" style= {{top: yRatio + '%', left: xRatio + '%'}}>
            <div className = "image-mountain-info"> {mountainName} </div>
            <img src = {locationImage} alt = "location" className = "image-location-icon" ></img>
            <img src = {mountainImage} alt = "mountain" className = "image-mountain"></img>
        </div>
    );
}

export default Mountain;