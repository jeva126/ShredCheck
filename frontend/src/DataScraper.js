import React, {useEffect, useState} from "react";
import rp from "request-promise";
import cheerio from "cheerio";

export default function DataScraper({src, element, condition}) {
    const cros = "https://thingproxy.freeboard.io/fetch/";

    const [state, setState] = useState([]);

    useEffect(() => {
        rp(cros + src)
            .then(html => {

                let data = [];
                let $ = cheerio.load(html);

                $(element).each(function(i, element) {
                    let item = $(this)
                        .text();
                    if (i === condition) {
                        if (item.toLowerCase().includes("open")) {
                            item = "Open";
                        } else if (item.includes("closed")) {
                            item = "Closed";
                        }
                        data.push(item);
                    }
                });

                setState(data);
            })
            .catch(function(err) {
                console.log("Error with Data Scraping");
            });
    });

    return(
        <>
            {state.map(item => <div key={item}>{item}</div>)}
        </>
    );
}