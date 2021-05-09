import  '../style/HomeScreen.css'
import  '../components/HomeScreen/MountainComponent/MountainImage.css'
import nz from '../images/new-zealand.svg'
import mountainImage1 from '../images/mountain-1.svg'
import mountainImage2 from '../images/mountain-2.svg'
import mountainImage3 from '../images/mountain-3.svg'
import logo from '../images/logo.svg'
import location from '../images/location.svg'
import { Link } from 'react-router-dom'
import Mountain from "../components/HomeScreen/MountainComponent/MountainImage.js"
import { AppContext } from '../AppContext';
import { useContext } from 'react';

function HomeScreen(){
    const { mountains, mountainsLoading } = useContext(AppContext);

    if (mountainsLoading) {
        return null;
    }else{

    return(
        <div className= "home-container"> 
            <div className = "home-boarder"></div>
            <div className = "logo-container-home">
                <img src = {logo} alt = "logo" className = "home-logo" ></img>
                <div className = "home-select-text">
                        SELECT A MOUNTAIN
                </div>
                
            </div>
            
            <div className = "home-image-container">
                <img src = {nz} className = "home-image-NZ" alt = "nz" ></img>
                
                    <div className = "home-mountain-container">
                        <Link to = {`/mountains/${mountains[0].id}`} >
                            <Mountain 
                                mountainImage = {mountainImage2}
                                mountainName = {mountains[0].Name}
                                locationImage = {location}
                                xRatio = {73}
                                yRatio = {36}
                            />
                        </Link>
                        
                        <Link to = {`/mountains/${mountains[1].id}`} >
                            <Mountain 
                                mountainImage = {mountainImage1}
                                mountainName = {mountains[1].Name}
                                locationImage = {location}
                                xRatio = {41}
                                yRatio = {63}
                            />
                        </Link>
                        <Link to = {`/mountains/${mountains[2].id}`} >
                            <Mountain 
                                mountainImage = {mountainImage3}
                                mountainName = {mountains[2].Name}
                                locationImage = {location}
                                xRatio = {24}
                                yRatio = {73}
                            />
                        </Link>
                        
                    </div>
            </div>
            
        </div>
    );
    }
}
export default HomeScreen;