import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";

import { useData } from './utils'
import { LineChart, MultipleLineChart } from './linecharts';
import { AreaChart } from './areachart';
import { StackedAreaChart } from './stackedareachart';

const csvUrl = "https://gist.githubusercontent.com/hogwild/4a23b2327e88e6e3aa101bb01ddb28ba/raw/81fd842af7328d2ad6d2a498cc4589031ae5b4af/citibike_rawdata_2020_4.csv"

function App() {
    const WIDTH = 800;
    const HEIGHT = 600;
    const margin = {left:50, right: 50, top: 50, bottom: 50};
    const innerWidth = WIDTH - margin.left - margin.right;
    const innerHeight = HEIGHT - margin.top - margin.bottom;

    const rawData = useData(csvUrl);
    if (!rawData) {
        return <p>Loading...</p>
    }
    console.log(rawData);

    // -- converts Date object into the format we specified, specify order of day, month, year -- //
    const formatTime = d3.timeFormat("%B %d, %Y");
    const current = new Date;
    console.log("current Date:", current);
    console.log("re-formatted:", formatTime(current));

    // -- converts the time in the specific format into a Date object, just the inverse of the above timeFormat method -- //
    const parseTime = d3.timeParse("%B %d, %Y");
    const reformatted = formatTime(current);
    console.log("convert back to Date:", parseTime(reformatted));

    console.log(rawData.map(d => formatTime(d.starttime)));

    const formatWeek = d3.timeFormat("%a %U");
    const formatDaily = d3.timeFormat("%d");
    // rawData.forEach(d => console.log(formatDaily(d.starttime)));
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; 
    const weekly = d3.groups(rawData, d => formatWeek(d.starttime)).map( d=> {return { date:d[0], value:d[1].length}});
    const daily = d3.groups(rawData, d =>  formatDaily(d.starttime)).map( d=> {return { date:d[0], value:d[1].length}});
    const temp = d3.groups(rawData, d =>  formatDaily(d.starttime));
    //console.log(temp);
    // console.log(weekly);
    // console.log(daily);

    return <svg width={WIDTH} height={HEIGHT}>
    <LineChart x={margin.left} y={margin.top} width={innerWidth} height={innerHeight} data={daily}/>
    {/* <MultipleLineChart x={margin.left} y={margin.top} width={innerWidth} height={innerHeight} data={weekly} />
    <AreaChart x={margin.left} y={margin.top} width={innerWidth} height={innerHeight} data={daily}/>
    <StackedAreaChart x={margin.left} y={margin.top} width={innerWidth} height={innerHeight} data={weekly} />   */}
    </svg>
}

ReactDOM.render(<App/>, document.getElementById('root'));