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
                    <Status src={mountain.Status.Source} elements={mountain.Status.Elements} conditions={mountain.Status.Conditions}/>
                    <div className = "data-container">
                        <div className = "flex-col">
                            <div className = "flex-row">
                                <div className = "weather-today-container"></div>
                                <div className = "price-container">
                                    <Pricing src={mountain.Price.Source} elements={mountain.Price.Elements} conditions={mountain.Price.Conditions} />
                                </div>
                            </div>
                            <div className = "weather-week-container"></div>
                        </div>
                    </div>
                </div>


                <div className = "image-mountain-container">
                    <img src = {mountainImage} className = "image-mountain" alt = "mountain" ></img>
                </div>
        </div>
        );
    }
}
export default MountainScreen;