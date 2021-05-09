import DataScraper from "./DataScraper";
import styles from "./Status.module.css";

function Pricing(){
    const src = "https://www.coronetpeak.co.nz/";

    return(
        <div>
            {/*<DataScraper src={src} element={".name_2inE7y"}/>*/}
            {/*<DataScraper src={src} element={".status_2inE7y"}/>*/}

            <DataScraper className={styles.ruapehulist} src={src} element={".card_title_Q4pzz"} />
            <DataScraper className={styles.ruapehulist} src={src} element={".card_price_Q4pzz"} />
        </div>
    );
}
export default Pricing;