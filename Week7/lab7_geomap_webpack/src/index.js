import React from "react";
import ReactDOM from "react-dom";
import { WorldMap } from "./worldmap";
import { Legend } from "./legend";
import { json, csv, scaleOrdinal, schemeOranges } from "d3";
// import { geoEqualEarth } from "d3-geo";
import * as topojson from "topojson-client";
import "./styles.css";
// import { feature } from "topojson-client";


const mapUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const csvUrl = "https://gist.githubusercontent.com/hogwild/1cd42bbfecfc53ed264e9801d82c0977/raw/ae784b8e93d146903f3fac15b47659863389a35f/worldCountries.csv";

function useMap(jsonPath) {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        json(jsonPath).then(topoJsonData => {
            setData(topojson.feature(topoJsonData, topoJsonData.objects.countries))});
    }, []);
    return data;
}

function useData(csvPath){
    const [dataAll, setData] = React.useState(null);
    React.useEffect(() => {
        csv(csvPath).then(data => {
            data.forEach(d => {
                d.gdp_md_est = +d.gdp_md_est;
                d.pop_est = +d.pop_est;
            });
            setData(data);
        });
    }, []);
    return dataAll;
}

function Geomap() {
    const WIDTH = 1000;
    const HEIGHT = 600;
    const margin = {left: 50, right: 50, top: 50, bottom: 50};
    const rawData  = useData(csvUrl);
    const map = useMap(mapUrl);
    if (!map || !rawData) {
            return <pre>Loading...</pre>;
        };
    console.log(rawData, map);
    const width = WIDTH - margin.left - margin.right;
    const height = HEIGHT - margin.top - margin.bottom;
    const income_grp = rawData.map(d => d.income_grp);
    const incomeLevels = income_grp.filter((a, b) => income_grp.indexOf(a) === b).sort().reverse();
    console.log(incomeLevels);
    const colormap = scaleOrdinal(schemeOranges[incomeLevels.length])
            .domain(incomeLevels);

    return <svg width={WIDTH} height={HEIGHT}>
        <g>
            <WorldMap map={map} colormap={colormap} projection={"geoEqualEarth"} width={width} height={height}
            data={rawData} incomeLevels={incomeLevels} /> 
            <Legend x={50} y={HEIGHT/2} colormap={colormap} incomeLevels={incomeLevels}/>
        </g>
    </svg>
}


ReactDOM.render(<Geomap />, document.getElementById("root"));