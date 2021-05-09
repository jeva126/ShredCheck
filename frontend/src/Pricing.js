import DataScraper from "./DataScraper";
import styles from "./Pricing.module.css";

function Pricing({src, elements, conditions}) {

    return(
        <div className={styles.widget}>
            <div className={styles.padding}>
                <span className={styles.bold}>Day Pass: </span>
                <div className={styles.container}>
                    Adult: <div className={styles.data}><DataScraper src={src[0]} element={elements[0]} condition={conditions[0]} /></div><br />
                    Youth: <div className={styles.data}><DataScraper src={src[0]} element={elements[0]} condition={conditions[1]} /></div>
                </div>
            </div>
            <div>
                <span className={styles.bold}>Season Pass: </span>
                <div className={styles.container}>
                    Adult: <div className={styles.data}><DataScraper src={src[1]} element={elements[1]} condition={conditions[2]} /></div><br />
                    Youth: <div className={styles.data}><DataScraper src={src[1]} element={elements[1]} condition={conditions[3]} /></div>
                </div>
            </div>
        </div>
    );
}
export default Pricing;