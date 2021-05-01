import  '../style/HomeScreen.css'
import nz from '../images/new-zealand.svg'
import mountain from '../images/mountain-2.svg'
import { Link } from 'react-router-dom'
import WeatherDash from '../components/WeatherDash/WeatherDash'
import React, { useState, useEffect } from "react";

function HomeScreen(){
    const [selectedMountain, setSelectedMountain] = useState("turoa");

    return(
        <div className= "container"> 
            <div className = "header">
                Shred Check
                
            </div>

            <WeatherDash mountain={selectedMountain}></WeatherDash>

            

            



            <div>
                <img src = {nz} className = "image-NZ" alt = "nz" />
                <Link to = "/Mountain" >
                   
                        <img src = {mountain} className = "image-Mountain" alt = "mountain"/>
                    
                </Link>
                
                <img src = {mountain} className = "image-Mountain-testclick2" onClick={() => setSelectedMountain("cardrona")} alt = "mountain"/>
                <img src = {mountain} className = "image-Mountain-testclick1" onClick={() => setSelectedMountain("turoa")} alt = "mountain"/>

                
            </div>
            
        </div>
    )
}
export default HomeScreen;