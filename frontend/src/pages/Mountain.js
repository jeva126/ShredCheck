import {Link, useHistory} from "react-router-dom";
import Pricing from "../Pricing";
import Status from "../Status";

function Mountain(){

    return(
        <div>
            <Status />
            <Link to = '/home'>
                <button> Back  </button>
            </Link>
        </div>
    );
}
export default Mountain;