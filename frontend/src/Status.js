import DataScraper from "./DataScraper";
import styles from "./Status.module.css";

function Status() {
    const src = "https://www.coronetpeak.co.nz/weather-report/";
    const element = ".w_weather-status__list--mountain-sm > .w_weather-status > .w_weather-status__info > .w_weather-status__data"

    return(
        <div className={styles.widget}>
            <div className={styles.bold}>
                <span>Ski Field Status: </span>
                <div className={styles.data}><DataScraper src={src} element={element} condition={0} /></div>
            </div>
            <div>
                <span>Road Status: </span>
                <div className={styles.data}><DataScraper src={src} element={element} condition={1}/></div>
            </div>
        </div>
    );
}
export default Status;