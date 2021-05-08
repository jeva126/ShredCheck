import {Link, useParams, useHistory} from "react-router-dom";
import { AppContext } from '../AppContext';
import { useContext } from 'react';

function Mountain(){
const { mountains, mountainsLoading } = useContext(AppContext);
const { id } = useParams();
const mountain = mountains.find(a => a.id === id);

if(mountainsLoading){
    return null;
}else{
    return(
        <div> 
            <div>{mountain.Name}</div>
            <div>{mountain.Description}</div>
            <div> Longitde :{mountain.Location.Longitude} </div>
            <div> Latitde :{mountain.Location.Latitude} </div>
            <div> Elevation:{mountain.Location.Elevation} </div>
            <Link to = '/home'>
                <button> Back  </button>
            </Link>
        </div>
    );
}
}
export default Mountain;