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
            <div> X coord :{mountain.location.Xcoord} </div>
            <div> Y coord :{mountain.location.Ycoord} </div>

            <Link to = '/home'>
                <button> Back  </button>
            </Link>
        </div>
    );
}
}
export default Mountain;