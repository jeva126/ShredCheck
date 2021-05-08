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
        <div className= "container"> 
            <img src = {logo} alt = "logo" className = "logo" ></img>
            <div className = "image-container">
                <img src = {nz} className = "image-NZ" alt = "nz" ></img>
                
                    <div className = "mountain-container">
                        <Link to = '/Mountain' >
                            <Mountain 
                                mountainImage = {mountainImage2}
                                mountainName = {mountains[0].Name}
                                locationImage = {location}
                                xRatio = {75}
                                yRatio = {30}
                            />
                        </Link>
                        
                        <Link to = "/Mountain" >
                            <Mountain 
                                mountainImage = {mountainImage1}
                                mountainName = {mountains[1].Name}
                                locationImage = {location}
                                xRatio = {40}
                                yRatio = {63}
                            />
                        </Link>
                        

                        <Link to = "/Mountain" >
                            <Mountain 
                                mountainImage = {mountainImage3}
                                mountainName = {mountains[2].Name}
                                locationImage = {location}
                                xRatio = {23}
                                yRatio = {70}
                            />
                        </Link>
                        
                    </div>

            </div>
            
        </div>
    );
    }
}
export default HomeScreen;