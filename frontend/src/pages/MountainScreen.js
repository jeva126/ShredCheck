import {Link, useParams, useHistory} from "react-router-dom";
import { AppContext } from '../AppContext';
import mountainImage from '../images/mountain.svg'
import logo from '../images/logo.svg'
import { useContext } from 'react';
import "../style/MountainScreen.css"
import WeatherDash from "../components/WeatherDash/WeatherDash.js";

function MountainScreen(){
const { mountains, mountainsLoading } = useContext(AppContext);
const { id } = useParams();
const mountain = mountains.find(a => a.id === id);



if(mountainsLoading){
    return null;
}else{
    return(
        <div className = "screen-container"> 
            <div className = "mountain-boarder">
                <div>{mountain.Name}</div>
                <div>{mountain.Description}</div>


                <WeatherDash latProp={mountain.Location.Latitude} longProp={mountain.Location.Longitude} ></WeatherDash>


                <div> Longitde :{mountain.Location.Longitude} </div>
                <div> Latitde :{mountain.Location.Latitude} </div>
                <div> Elevation:{mountain.Location.Elevation} </div>

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