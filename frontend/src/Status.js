import DataScraper from "./DataScraper";
import styles from "./Status.module.css";

function Status({src, elements, conditions}) {

    return(
        <div className={styles.widget}>
            <div className={styles.bold}>
                <span>Ski Field Status: </span>
                <div className={styles.data}><DataScraper src={src} element={elements[0]} condition={conditions[0]} /></div>
            </div>
            <div>
                <span>Road Status: </span>
                <div className={styles.data}><DataScraper src={src} element={elements[1]} condition={conditions[1]} /></div>
            </div>
        </div>
    );
}
export default Status;