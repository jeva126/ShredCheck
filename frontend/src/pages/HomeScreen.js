import  '../style/HomeScreen.css'
import nz from '../images/new-zealand.svg'
import mountain from '../images/mountain-2.svg'
import { Link } from 'react-router-dom'

function HomeScreen(){

    return(
        <div className= "container"> 
            <div className = "header">
                Shred Check
            </div>
            <div>
                <img src = {nz} className = "image-NZ" alt = "nz" />
                <Link to = "/Mountain" >
                        <img src = {mountain} className = "image-Mountain" alt = "mountain"/>
                </Link>
            </div>
            
        </div>
    )
}
export default HomeScreen;