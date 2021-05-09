import {Link, useParams, useHistory} from "react-router-dom";
import { AppContext } from '../AppContext';
import mountainImage from '../images/mountain.svg'
import logo from '../images/logo.svg'
import { useContext } from 'react';
import "../style/MountainScreen.css"

function MountainScreen(){
    const { mountains, mountainsLoading } = useContext(AppContext);
    const { id } = useParams();
    const mountain = mountains.find(a => a.id === id);

    if(mountainsLoading){
        return null;
    }else{
        return(
            <div className = "screen-container"> 
                <Link to = '/home'>
                    <div className = "logo-container">
                        <img src = {logo} alt = "logo" className = "logo-mountain-page" ></img>
                    </div>
                </Link>

                <div className = "mountain-boarder">
                    <div className = "mountain-page-title">{mountain.Name}</div>
                </div>
                
            
                <div className = "image-mountain-container">
                    <img src = {mountainImage} className = "image-mountain" alt = "mountain" ></img>
                </div>
                
            </div>
        );
    }
}
export default MountainScreen;