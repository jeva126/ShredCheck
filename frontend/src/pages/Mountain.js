import {Link, useHistory} from "react-router-dom";
import { AppContext } from '../AppContext';
import { useContext } from 'react';

function Mountain(){
    const { mountains, mountainsLoading } = useContext(AppContext);
//only showing turoa data, page not linked to individuals yet
    if (mountainsLoading) {
        return null;
    } else{

    return(
        <div> 
            <div>{mountains[0].Name}</div>
            <div>{mountains[0].Description}</div>
            <div> X coord :{mountains[0].location.Xcoord} </div>
            <div> Y coord :{mountains[0].location.Ycoord} </div>
            <Link to = '/home'>
                <button> Back  </button>
            </Link>
        </div>
    );
    }
}
export default Mountain;