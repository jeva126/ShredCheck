import {Link, useHistory} from "react-router-dom";
import DataScraper from "../DataScraper";

function Mountain(){

    return(
        <div>
            <DataScraper/>

            <Link to = '/home'>
                <button> Back  </button>
            </Link>
        </div>
    );
}
export default Mountain;