import React, { useEffect } from "react";
import rp from "request-promise";
import cheerio from "cheerio";

export default function DataScraper() {
    const cros = "https://thingproxy.freeboard.io/fetch/";
    const link = "https://www.mtruapehu.com/whakapapa/report";

    useEffect(() => {
        // use the request-promise library to fetch the HTML
        rp(cros + link).then(html => console.log(html));
    });

    return(
        <b>DataScraper</b>
    );

}