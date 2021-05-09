import React, {useEffect, useState} from "react";
import rp from "request-promise";
import cheerio from "cheerio";
import styles from "./DataScraper.module.css";

export default function DataScraper({src, element, condition}) {
    const cros = "https://thingproxy.freeboard.io/fetch/";

    const [state, setState] = useState([]);

    useEffect(() => {
        // // use the request-promise library to fetch the HTML
        rp(cros + src)
            .then(html => {

                let names = [];
                let $ = cheerio.load(html);

                // find what element ids, classes, or tags you want from opening console in the browser
                // cheerio library lets you select elements similar to querySelector
                $(element).each(function(i, element) {
                    let name = $(this)
                        .text();
                    if (i === condition) {
                        names.push(name);
                    }
                });

                setState(names);
            })
            .catch(function(err) {
                console.log("Crawl Failed");
            });
    });

    return(
        <>
            {state.map(item => <div key={item}>{item}</div>)}
        </>
    );
}