import {Link, useHistory} from "react-router-dom";

function Mountain(){

    return(
        <div> 
            MOUNTAIN
            
            <Link to = '/home'>
                <button> Back  </button>
            </Link>
        </div>
    );
}
export default Mountain;