import React from "react";
import { csv, timeParse } from "d3";

export { useData };

function useData(csvPath){
    const [dataAll, setData] = React.useState(null);
    const parseTime = timeParse("%Y-%m-%d %H:%M:%S");
    // const format = d3.timeFormat("%a %U")
    React.useEffect(() => {
        csv(csvPath).then(data => {
            data.forEach(d => {
                d.starttime = parseTime(d.starttime.slice(0, -5));
                d.stoptime = parseTime(d.stoptime.slice(0, -5))
            });
            setData(data);
        });
    }, []);
    return dataAll;
}